import { Chart, ChartType } from 'chart.js';
import { Ref } from 'vue-demi';
import type { VueProxy } from './vueproxy.types';
import { ChartPropsOptions } from './types';
export declare type ComponentData<T extends ChartType> = {
    canvasRef: Ref<HTMLCanvasElement | undefined>;
    renderChart: () => void;
    chartInstance: Chart<T> | null;
};
export declare const defineChartComponent: <TType extends keyof import("chart.js").ChartTypeRegistry = keyof import("chart.js").ChartTypeRegistry>(chartId: string, chartType: TType) => VueProxy<ChartPropsOptions<TType>, ComponentData<TType>, import("vue/types/options").DefaultData<import("vue/types/umd")>, import("vue/types/options").DefaultComputed, import("vue/types/options").DefaultMethods<import("vue/types/umd")>>;
