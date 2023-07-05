<template>
  <Card
    :tab-list="tabListTitle"
    v-bind="$attrs"
    :active-tab-key="activeKey"
    @tab-change="onTabChange"
  >
    <p v-if="activeKey === '01'">
      <VisitAnalysis />
    </p>
    <p v-if="activeKey === '02'">
      <VisitAnalysisBar />
    </p>
  </Card>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import { Card } from 'ant-design-vue';
  import VisitAnalysis from './VisitAnalysis.vue';
  import VisitAnalysisBar from './VisitAnalysisBar.vue';
  import { tabListTitle } from '/@/views/dashboard/analysis/data';
  const activeKey = ref('01');

  /**
   * tab页切换事件
   * @param key 目的tab的key
   */
  function onTabChange(key: string) {
    activeKey.value = key;
  }
</script>
