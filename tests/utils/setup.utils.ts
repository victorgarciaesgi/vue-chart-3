import { mount } from '@vue/test-utils';
import { ChartData, ChartOptions, ChartType } from 'chart.js/auto';
import {
  ComponentOptionsMixin,
  ComputedOptions,
  DefineComponent,
  MethodOptions,
  nextTick,
} from 'vue';
import { ChartComponentEmits, ChartPropsOptions, ComponentData } from '../../src/core';

const commonOptions: ChartOptions<ChartType> = {
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
      text: 'Testing vue-chart-3',
    },
  },
};

export async function setupComponentTest<
  V extends DefineComponent<
    ChartPropsOptions<any>,
    ComponentData<any>,
    unknown,
    ComputedOptions,
    MethodOptions,
    ComponentOptionsMixin,
    ComponentOptionsMixin,
    ChartComponentEmits<any>
  >,
  C extends ChartType = V extends DefineComponent<
    ChartPropsOptions<infer V>,
    any,
    any,
    any,
    any,
    any,
    any,
    any
  >
    ? V
    : any
>(component: V, chartData: ChartData<C>) {
  beforeEach(() => {
    vi.spyOn(console, 'error');
  });

  const wrapper = mount(component as any, {
    props: {
      chartData,
      options: commonOptions,
    },
  });

  await nextTick();

  return wrapper;
}
