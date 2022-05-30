<template>
  <template
    v-for="(item, index) in list"
    :key="index"
  >
    <div class="deslistBox">
      <p class="deslist-item">
        <span class="title">{{ item.name }}</span>
        <span class="value">{{ item.value }}</span>
      </p>
    </div>
  </template>
</template>

<script lang="ts" setup>
type IList =
  chrome.devtools.network.Request['request']['cookies'] |
  chrome.devtools.network.Request['request']['headers'];

const props = defineProps<{list:IList}>();

</script>

<style lang="scss" scoped>
  .deslistBox{

  }
  .deslist-item{
    .title{

    }
    .value{
      @include ellipsis(1);
    }
  }
</style>
