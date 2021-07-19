import { Chart, ChartData, Plugin } from 'chart.js';
import { PropType, Ref } from 'vue-demi';
import { StyleValue, VueProxy } from './vueproxy.types';
declare type ComponentData = {
    canvasRef: Ref<HTMLCanvasElement | undefined>;
    renderChart: () => void;
};
export declare const defineChartComponent: <TType extends "bar" | "line" | "scatter" | "bubble" | "pie" | "doughnut" | "polarArea" | "radar" = "bar" | "line" | "scatter" | "bubble" | "pie" | "doughnut" | "polarArea" | "radar">(chartId: string, chartType: TType) => VueProxy<{
    readonly options: {
        readonly type: PropType<import("chart.js/types/utils").DeepPartial<import("chart.js").CoreChartOptions<TType> & import("chart.js").ElementChartOptions<TType> & import("chart.js").PluginChartOptions<TType> & import("chart.js").DatasetChartOptions<TType> & import("chart.js").ScaleChartOptions<TType> & import("chart.js").ChartTypeRegistry[TType]["chartOptions"]>>;
        readonly required: false;
    };
    readonly chartId: {
        readonly default: string;
        readonly type: StringConstructor;
    };
    readonly width: {
        readonly default: 400;
        readonly type: NumberConstructor;
    };
    readonly height: {
        readonly default: 400;
        readonly type: NumberConstructor;
    };
    readonly cssClasses: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly styles: {
        readonly type: PropType<StyleValue>;
    };
    readonly plugins: {
        readonly type: PropType<Plugin<"bar" | "line" | "scatter" | "bubble" | "pie" | "doughnut" | "polarArea" | "radar", Record<string, unknown>>[]>;
        readonly default: () => never[];
    };
    readonly chartData: {
        readonly type: PropType<ChartData<TType, import("chart.js").ChartTypeRegistry[TType]["defaultDataPoint"][], unknown>>;
        readonly required: true;
    };
    readonly onLabelsUpdate: {
        readonly type: PropType<() => void>;
    };
    readonly onChartUpdate: {
        readonly type: PropType<(chartInstance: Chart<TType, import("chart.js").ChartTypeRegistry[TType]["defaultDataPoint"][], unknown>) => void>;
    };
    readonly onChartDestroy: {
        readonly type: PropType<() => void>;
    };
    readonly onChartRender: {
        readonly type: PropType<(chartInstance: Chart<TType, import("chart.js").ChartTypeRegistry[TType]["defaultDataPoint"][], unknown>) => void>;
    };
}, ComponentData, import("vue/types/options").DefaultData<import("vue/types/umd")>, import("vue/types/options").DefaultComputed, import("vue/types/options").DefaultMethods<import("vue/types/umd")>>;
export {};
