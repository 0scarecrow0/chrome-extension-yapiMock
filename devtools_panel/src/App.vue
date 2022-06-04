<template>
  <networkList />
</template>

<script setup lang="ts">
/**
 * 方案：
 * 1.用户打开 devtools_page 页面，发送 GET_RULES 获取现有 rules 规则。
 * 2.当用户 改变 switch 滑块时 发送 CHANGE_RULES 改变现有规则。
 * 3.background 收到 CHANGE_RULES 请求时更新 rules 并 触发 RULES 事件，更新rules规则。
*/
import { provide, ref, Ref } from 'vue';
import { IMockRules, INetworkType } from '../../types/NetworkTypes';
import { ChromeSendConnect } from '../../utils/connect';
import networkList from './components/network-list.vue';
import { proxyObjChange, proxyObjKey } from './provide-key';

/** 注入信息 */
const proxyObj:Ref<IMockRules> = ref({});
provide(proxyObjKey, proxyObj);
/** 与backgroundjs建立通信 */
const connectBack = new ChromeSendConnect('DEVTOOLS_CONNECT_BACKGROUND', 'devtools_page');
/** 获取现有 代理规则 */
connectBack.sendMessage('GET_RULES', 'background_page');
connectBack.onMessage((response) => {
  switch (response.action) {
    case 'RULES':
      proxyObj.value = response.data as IMockRules;
      break;

    default:
      break;
  }
});

const proxyChange = (item:INetworkType) => {
  connectBack.sendMessage('CHANGE_RULES', 'background_page', item);
};
provide(proxyObjChange, proxyChange);

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 18px;
}
</style>
