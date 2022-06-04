<template>
  <div class="main_container" />
  <el-table
    border
    :data="Object.keys(MockRules)"
  >
    <el-table-column
      label="ID"
      width="80"
    >
      <template #default="scope">
        <span>{{ MockRules[scope.row].id }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="API"
    >
      <template #default="scope">
        <span>{{ scope.row }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="Yapi"
      width="80"
    >
      <template #default="scope">
        <span>{{ MockRules[scope.row].yapiProjectId }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="代理状态"
      width="120"
    >
      <template #default="scope">
        <el-switch
          v-model="MockRules[scope.row].mockStatus"
          class="mt-2"
          style="margin-left: 24px"
          inline-prompt
          :active-icon="Check"
          :inactive-icon="Close"
          @change="switchChange(scope.row)"
        />
      </template>
    </el-table-column>
    <el-table-column
      align="right"
      label="操作"
      width="150"
    >
      <template #default="scope">
        <el-button
          size="small"
          @click="handleEdit(scope.row)"
        >
          Edit
        </el-button>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.row)"
        >
          Delete
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';
import { Check, Close } from '@element-plus/icons-vue';
import { IChangeRules, IMockRules } from '../types/NetworkTypes';
import { ChromeSendConnect } from '../utils/connect';

const MockRules:Ref<IMockRules> = ref({});

/** 与backgroundjs建立通信 */
const connectBack = new ChromeSendConnect('POPUP_CONNECT_BACKGROUND', 'popup_page');
/** 获取现有 代理规则 */
connectBack.sendMessage('GET_RULES', 'background_page');
connectBack.onMessage((response) => {
  switch (response.action) {
    case 'RULES':
      MockRules.value = response.data as IMockRules;
      break;

    default:
      break;
  }
});

const switchChange = (key:string) => {
  const value:IChangeRules = {
    pathname: key,
    yapi: MockRules.value[key].yapiProjectId,
    mockStatus: MockRules.value[key].mockStatus
  };
  connectBack.sendMessage('CHANGE_RULES', 'background_page', value);
};

const handleEdit = (key:string) => {
  console.log(key);
};
const handleDelete = (key:string) => {
  connectBack.sendMessage('DELETE_RULES', 'background_page', key);
};

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.main_container{
  width: 700px;
  padding: 50px;
}
</style>
