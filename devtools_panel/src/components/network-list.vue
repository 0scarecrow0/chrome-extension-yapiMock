<template>
  <div class="networkList_box">
    <div v-if="networkList.length">
      <p>Network List:</p>
      <listItem
        v-for="(item, index) in networkList"
        :key="index"
        :data="item"
        @switch-change="itemSwitchChange"
      />
    </div>
    <el-empty
      v-else
      description="暂未捕获到数据请求，请刷新页面重新捕获..."
    />
  </div>
</template>

<script setup lang="ts">
import { inject, Ref, ref } from 'vue';
import { RequestConversion } from '../../../utils';
import type { INetworkType } from '../../../types/NetworkTypes';
import listItem from './list-item.vue';
import json from '../networkList.json';
import { proxyObjChange, proxyObjKey } from '../provide-key';

const proxyObj = inject(proxyObjKey);
const proxyChange = inject(proxyObjChange);

const networkList:Ref<INetworkType[]> = ref([]);

// networkList.value = [...json];

chrome.devtools.network.onRequestFinished.addListener((request) => {
  const api = RequestConversion(request);
  api.mockStatus = !!proxyObj?.value[api.pathname]?.mockStatus;
  networkList.value = networkList.value.concat(api);
});

const itemSwitchChange = (val:INetworkType) => {
  proxyChange?.(val);
};
</script>

<style lang="scss" scoped>
  .networkList_box{
    padding: 20px 40px;
  }
</style>
