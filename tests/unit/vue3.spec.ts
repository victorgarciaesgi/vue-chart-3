import { mount } from '@vue/test-utils';
import * as Chartjs from 'chart.js/auto';
import { defineComponent, ref, computed, nextTick } from 'vue';
import {
  DoughnutChart,
  ExtractComponentData,
  ExtractComponentProps,
  BarChart,
  useBarChart,
} from '../../src';

const timeout = (count: number) => new Promise((resolve) => setTimeout(resolve, count));

type TestExtractData = ExtractComponentData<typeof DoughnutChart>;
let testAssignData: TestExtractData = {} as TestExtractData;
const canvas: Chartjs.Chart<'doughnut'> | null = testAssignData?.chartInstance?.value;
// Expect no type error

type TestExtractProps = ExtractComponentProps<typeof DoughnutChart>;
let testAssignProps: TestExtractProps = {} as TestExtractProps;
const chartData: Chartjs.ChartData<'doughnut'> = testAssignProps?.chartData;
// Expect no type error

// @ts-expect-error
const expectError: ChartData<'doughnut'> = testAssignProps?.blebleble;

describe('Vue 3 - Doughtnut chart', async () => {
  beforeEach(() => {
    vi.spyOn(console, 'error');
  });

  const dataset = [30, 40, 60, 70, 5];

  const { vm } = mount(DoughnutChart, {
    props: {
      chartData: {
        labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
        datasets: [
          {
            data: dataset,
            backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
          },
        ],
      },
      options: {
        scales: {
          myScale: {
            type: 'logarithmic',
            position: 'right',
          },
        },
        plugins: {
          legend: {
            position: 'bottom',
          },
          title: {
            display: true,
            text: 'Chart.js Doughnut Chart',
          },
        },
      },
    },
  });
  await nextTick();
  const canvas = vm.canvasRef;

  it('should have canvas registered', () => {
    expect(canvas).not.toBeNull();
    expect(canvas).toBeDefined();
  });
  it('should have chartInstance variable instance of Chart.js', () => {
    expect(vm).toBeDefined();
    expect(vm.chartInstance).toBeInstanceOf(Chartjs.Chart);
  });
  it('should not have any console errors', () => {
    expect(console.error).not.toHaveBeenCalled();
  });

  // it('should have Chart constructed', async () => {
  //   await timeout(3000);
  //   var meta = vm.chartInstance?.getDatasetMeta(0)!;
  //   console.log(meta);
  //   expect(meta.type).toBe('doughnut');
  //   expect(meta.controller).not.toBe(undefined);
  //   expect(meta.controller.index).toBe(0);
  //   expect(meta.data).toEqual(dataset);

  //   meta.controller.updateIndex(1);
  //   expect(meta.controller.index).toBe(1);
  // });
});

const TestHooksComponent = defineComponent({
  name: 'TestHooks',
  components: {
    BarChart,
  },
  template: `
  <div id="app" style="width: 400px">
    <BarChart v-bind="barChartProps" />
  </div>
  `,
  setup() {
    const data = ref([30, 40, 60, 70, 5]);
    const legendTop = ref(true);

    const options = computed(() => ({
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    }));

    const testData = computed(() => ({
      labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
      datasets: [
        {
          data: data.value,
          backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
        },
      ],
    }));

    const { barChartProps, barChartRef } = useBarChart({
      chartData: testData,
      options: options,
    });

    return { data, barChartProps, barChartRef };
  },
});

describe('Vue 3 - with hooks', () => {
  beforeEach(() => {
    vi.spyOn(console, 'error');
  });

  const { vm } = mount(TestHooksComponent);

  const canvas = vm.$el.getElementsByTagName('canvas');

  it('should have canvas registered', () => {
    expect(canvas).not.to.toBeNull();
    expect(canvas).toBeDefined();
  });
  it('should have barChartRef variable instance of Vue', () => {
    expect(vm).toBeDefined();
    expect(vm.barChartRef).toBeDefined();
  });
  it('should not have any console errors', () => {
    expect(console.error).not.toHaveBeenCalled();
  });
});
