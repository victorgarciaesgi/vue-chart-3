# Manual update

When accessing to the template ref, you can call the helper function `update`, which will force update the ChartInstance

```vue
<template>
  <DoughnutChart ref="doughtnutRef" :chartData="testData" @chart:render="handleChartRender" />
</template>

<script>
import { shuffle } from 'lodash';
import { computed, defineComponent, ref, onMounted } from 'vue';
import { DoughnutChart } from 'vue-chart-3';

export default defineComponent({
  name: 'Home',
  components: { DoughnutChart },
  setup() {
    const doughtnutRef = ref();
    // ....
    onMounted(() => {
      doughtnutRef.value.update();
    });

    return { shuffleData, doughtnutRef, handleChartRender };
  },
});
</script>
```
