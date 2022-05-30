<template>
  <div class="networkList_box">
    <div v-if="networkList.length">
      <p>Network List:</p>
      <listItem
        v-for="(item, index) in networkList"
        :key="index"
        :data="item"
        @switch-change="(e)=>itemSwitchChange(index,e)"
      />
    </div>
    <el-empty
      v-else
      description="暂未捕获到数据请求，请刷新页面重新捕获..."
    />
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';
import { RequestConversion } from '../../../utils';
import type { IMockRulesList, INetworkType } from '../../../types/NetworkTypes';
import listItem from './list-item.vue';
import json from '../networkList.json';
import { ChromeSendConnect } from '../../../utils/connect';

const networkList:Ref<INetworkType[]> = ref([]);

// networkList.value = [...json];
// console.log(networkList.value);

const rulesList:Ref<IMockRulesList> = ref(new Map());
chrome.storage.sync.get(['proxy_list'], (result) => {
  rulesList.value = result.proxy_list || new Map();
  console.log(`Value currently is ${result.proxy_list}`);
  console.log(rulesList.value);
});

chrome.devtools.network.onRequestFinished.addListener((request) => {
  const api = RequestConversion(request);
  api.mockStatus = rulesList.value.get(api.pathname)?.mockStatus || false;
  networkList.value = networkList.value.concat(RequestConversion(request));
  // chrome.devtools.inspectedWindow.eval(
  //   `console.log("Large image: " + unescape("${JSON.stringify(networkList.value)}"))`
  // );
});

/** 与backgroundjs建立通信 */
const connectBack = new ChromeSendConnect('DEVTOOLS_CONNECT_BACKGROUND', 'devtools_page');
setTimeout(() => {
  connectBack.sendMessage('GET_RULES', 'background_page');
}, 3000);

const itemSwitchChange = (index:number, val:boolean) => {
  networkList.value[index].mockStatus = val;
  console.log(networkList.value[index], 'emitChange');
  rulesList.value.set(networkList.value[index].pathname, {
    id: 10,
    yapiProjectId: networkList.value[index].yapi,
    mockStatus: networkList.value[index].mockStatus
  });
  // TODO: 不能存储map对象 需要注意
  chrome.storage.sync.set({ proxy_list: rulesList.value });
};
</script>

<style lang="scss" scoped>
  .networkList_box{
    padding: 20px 40px;
  }
</style>
