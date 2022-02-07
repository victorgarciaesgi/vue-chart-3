# Accessing Canvas Ref and chartInstance

The Chart.js `chartInstance` and `canvasRef` are accessible by the component's reference using `ref`.
It is also passed in events (`chart-render` and `chart-update`)

```vue
<template>
  <DoughnutChart ref="doughtnutRef" :chartData="testData" @chart:render="handleChartRender" />
</template>

<script>
import { shuffle } from 'lodash-es';
import { computed, defineComponent, ref, onMounted } from 'vue';
import { DoughnutChart } from 'vue-chart-3';

export default defineComponent({
  name: 'Home',
  components: { DoughnutChart },
  setup() {
    const doughtnutRef = ref();
    // ....
    onMounted(() => {
      console.log(doughtnutRef.value.chartInstance);
      doughtnutRef.value.chartInstance.toBase64Image();
    });

    // Chart instance is accessible on events too
    function handleChartRender(chart) {
      console.log(chart);
    }

    return { shuffleData, testData, doughtnutRef, handleChartRender };
  },
});
</script>
```
