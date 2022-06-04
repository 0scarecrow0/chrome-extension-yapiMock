<template>
  <el-card
    :class="{
      'network_item':true,
      'network_item_active':detailsIsShow
    }"
  >
    <div class="header">
      <div
        class="header-left"
        @click="detailsIsShow=!detailsIsShow"
      >
        <!-- method 请求方式 -->
        <el-tag
          :type="itemObj?.method==='POST'?'success':'warning'"
          effect="dark"
          class="method"
        >
          {{ itemObj?.method }}
        </el-tag>
        <!-- url -->
        <p class="url">
          {{ itemObj?.url && urlLasterStr(itemObj.url) }}
        </p>
      </div>
      <div class="header-right">
        <div
          v-if="itemObj?.isMock"
          class="switchBox"
        >
          <span class="text">开启MOCK</span>
          <el-switch
            v-model="itemObj.mockStatus"
            inline-prompt
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-text="Y"
            inactive-text="N"
            @change="switchChange(itemObj!)"
          />
        </div>
      </div>
    </div>
    <transition name="el-zoom-in-top">
      <el-descriptions
        v-show="detailsIsShow"
        :title="itemObj?.url"
        direction="vertical"
        :column="4"
        border
      >
        <el-descriptions-item label="请求方式">
          {{ itemObj?.method }}
        </el-descriptions-item>
        <el-descriptions-item label="资源类型">
          {{ itemObj?.resourceType }}
        </el-descriptions-item>
        <el-descriptions-item label="开始时间">
          {{ itemObj?.startedDateTime }}
        </el-descriptions-item>
        <el-descriptions-item
          label="响应状态"
          :span="2"
        >
          {{ itemObj?.resStatus }}
        </el-descriptions-item>
      </el-descriptions>
    </transition>
  </el-card>
</template>

<script lang="ts" setup>
import { cloneDeep } from 'lodash';
import { Ref, ref, watch } from 'vue';
import type { INetworkType } from '../../../types/NetworkTypes';
import { urlLasterStr } from '../../../utils/regexp';

const detailsIsShow = ref(false);
const props = defineProps<{data:INetworkType}>();
const emit = defineEmits<{(e: 'switchChange', item: INetworkType): void
}>();

const itemObj:Ref<INetworkType | null> = ref(null);

watch(
  () => props.data,
  (newProps) => {
    itemObj.value = cloneDeep(newProps);
  },
  { immediate: true }
);

const switchChange = (itemObj:INetworkType) => {
  emit('switchChange', itemObj);
};

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
      justify-content: space-between;
      &-left{
        display: flex;
        align-items: center;
      }
      &-right{
        .switchBox{
          display: flex;
          align-items: center;
          .text{
            margin-right: 8px;
          }
        }
      }
    }
    .method{
      margin-right: 8px;
    }
    .url{
      @include ellipsis(1);
    }
  }
  .network_item_active{
    height: 300px;
  }
  :deep(.el-card__body){
    padding: 0 15px;
  }
</style>
