<template>
  <el-card
    :class="{
      'network_item':true,
      'network_item_active':detailsIsShow
    }"
    @click="detailsIsShow=!detailsIsShow"
  >
    <div class="header">
      <!-- method 请求方式 -->
      <el-tag
        :type="data.method==='POST'?'success':'warning'"
        effect="dark"
      >
        {{ data.method }}
      </el-tag>
      <!-- url -->
      <p>{{ urlLasterStr(data.url) }}</p>
    </div>
    <transition name="el-zoom-in-top">
      <el-descriptions
        v-show="detailsIsShow"
        title="垂直带边框列表"
        direction="vertical"
        :column="4"
        border
      >
        <el-descriptions-item label="用户名">
          kooriookami
        </el-descriptions-item>
        <el-descriptions-item label="手机号">
          18100000000
        </el-descriptions-item>
        <el-descriptions-item
          label="居住地"
          :span="2"
        >
          苏州市
        </el-descriptions-item>
        <el-descriptions-item label="备注">
          <el-tag size="small">
            学校
          </el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="联系地址">
          江苏省苏州市吴中区吴中大道 1188 号
        </el-descriptions-item>
      </el-descriptions>
    </transition>
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { INetworkType } from '../types/NetworkTypes';
import { urlLasterStr } from '../utils/regexp';

const detailsIsShow = ref(false);
const props = defineProps<{data:INetworkType}>();

</script>

<style lang="scss" scoped>
  .network_item{
    margin-bottom: 10px;
    height: 50px;
    .header{
      height: 50px;
      display: flex;
      align-items: center;
      cursor: pointer;
    }
  }
  .network_item_active{
    height: 300px;
  }
  :deep(.el-card__body){
    padding: 0 15px;
  }
</style>
