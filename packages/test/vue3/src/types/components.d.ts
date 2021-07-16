import { Chart, ChartData, Plugin } from 'chart.js';
import { PropType, Ref } from 'vue-demi';
import type { DefineComponent } from '@vue/runtime-core';
import { StyleValue, VueProxy } from './vueproxy.types';
declare type ComponentData = {
    canvasRef: Ref<HTMLCanvasElement | undefined>;
    renderChart: () => void;
};
export declare const defineChartComponent: <TType extends keyof import("chart.js").ChartTypeRegistry = keyof import("chart.js").ChartTypeRegistry>(chartId: string, chartType: TType) => DefineComponent<{
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
        readonly type: PropType<Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
        readonly default: () => never[];
    };
    readonly chartData: {
        readonly type: PropType<ChartData<TType, import("chart.js/types/utils").DistributiveArray<import("chart.js").ChartTypeRegistry[TType]["defaultDataPoint"]>, unknown>>;
        readonly required: true;
    };
    readonly options: {
        readonly type: PropType<import("chart.js/types/utils").DeepPartial<import("chart.js").CoreChartOptions<TType> & import("chart.js").ElementChartOptions<TType> & import("chart.js").PluginChartOptions<TType> & import("chart.js").DatasetChartOptions<TType> & import("chart.js").ScaleChartOptions<TType> & import("chart.js").ChartTypeRegistry[TType]["chartOptions"]>>;
    };
    readonly onLabelsUpdate: {
        readonly type: PropType<() => void>;
    };
    readonly onChartUpdate: {
        readonly type: PropType<(chartInstance: Chart<TType, import("chart.js/types/utils").DistributiveArray<import("chart.js").ChartTypeRegistry[TType]["defaultDataPoint"]>, unknown>) => void>;
    };
    readonly onChartDestroy: {
        readonly type: PropType<() => void>;
    };
    readonly onChartRender: {
        readonly type: PropType<(chartInstance: Chart<TType, import("chart.js/types/utils").DistributiveArray<import("chart.js").ChartTypeRegistry[TType]["defaultDataPoint"]>, unknown>) => void>;
    };
}, ComponentData, {}, import("@vue/runtime-core").ComputedOptions, import("@vue/runtime-core").MethodOptions, import("@vue/runtime-core").ComponentOptionsMixin, import("@vue/runtime-core").ComponentOptionsMixin, Record<string, any>, string, import("@vue/runtime-core").VNodeProps & import("@vue/runtime-core").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    readonly chartId?: unknown;
    readonly width?: unknown;
    readonly height?: unknown;
    readonly cssClasses?: unknown;
    readonly styles?: unknown;
    readonly plugins?: unknown;
    readonly chartData?: unknown;
    readonly options?: unknown;
    readonly onLabelsUpdate?: unknown;
    readonly onChartUpdate?: unknown;
    readonly onChartDestroy?: unknown;
    readonly onChartRender?: unknown;
} & {
    plugins: {
        readonly type: PropType<Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
        readonly default: () => never[];
    };
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
    chartData: {
        readonly type: PropType<ChartData<TType, import("chart.js/types/utils").DistributiveArray<import("chart.js").ChartTypeRegistry[TType]["defaultDataPoint"]>, unknown>>;
        readonly required: true;
    };
} & {
    styles?: {
        readonly type: PropType<StyleValue>;
    } | undefined;
    options?: ([{
        readonly type: PropType<import("chart.js/types/utils").DeepPartial<import("chart.js").CoreChartOptions<TType> & import("chart.js").ElementChartOptions<TType> & import("chart.js").PluginChartOptions<TType> & import("chart.js").DatasetChartOptions<TType> & import("chart.js").ScaleChartOptions<TType> & import("chart.js").ChartTypeRegistry[TType]["chartOptions"]>>;
    }] extends [import("@vue/runtime-core").Prop<infer V, infer D>] ? unknown extends V ? D : V : {
        readonly type: PropType<import("chart.js/types/utils").DeepPartial<import("chart.js").CoreChartOptions<TType> & import("chart.js").ElementChartOptions<TType> & import("chart.js").PluginChartOptions<TType> & import("chart.js").DatasetChartOptions<TType> & import("chart.js").ScaleChartOptions<TType> & import("chart.js").ChartTypeRegistry[TType]["chartOptions"]>>;
    }) | undefined;
    onLabelsUpdate?: {
        readonly type: PropType<() => void>;
    } | undefined;
    onChartUpdate?: {
        readonly type: PropType<(chartInstance: Chart<TType, import("chart.js/types/utils").DistributiveArray<import("chart.js").ChartTypeRegistry[TType]["defaultDataPoint"]>, unknown>) => void>;
    } | undefined;
    onChartDestroy?: {
        readonly type: PropType<() => void>;
    } | undefined;
    onChartRender?: {
        readonly type: PropType<(chartInstance: Chart<TType, import("chart.js/types/utils").DistributiveArray<import("chart.js").ChartTypeRegistry[TType]["defaultDataPoint"]>, unknown>) => void>;
    } | undefined;
}>, {
    plugins: {
        readonly type: PropType<Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
        readonly default: () => never[];
    };
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
}> | VueProxy<{
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
        readonly type: PropType<Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
        readonly default: () => never[];
    };
    readonly chartData: {
        readonly type: PropType<ChartData<TType, import("chart.js/types/utils").DistributiveArray<import("chart.js").ChartTypeRegistry[TType]["defaultDataPoint"]>, unknown>>;
        readonly required: true;
    };
    readonly options: {
        readonly type: PropType<import("chart.js/types/utils").DeepPartial<import("chart.js").CoreChartOptions<TType> & import("chart.js").ElementChartOptions<TType> & import("chart.js").PluginChartOptions<TType> & import("chart.js").DatasetChartOptions<TType> & import("chart.js").ScaleChartOptions<TType> & import("chart.js").ChartTypeRegistry[TType]["chartOptions"]>>;
    };
    readonly onLabelsUpdate: {
        readonly type: PropType<() => void>;
    };
    readonly onChartUpdate: {
        readonly type: PropType<(chartInstance: Chart<TType, import("chart.js/types/utils").DistributiveArray<import("chart.js").ChartTypeRegistry[TType]["defaultDataPoint"]>, unknown>) => void>;
    };
    readonly onChartDestroy: {
        readonly type: PropType<() => void>;
    };
    readonly onChartRender: {
        readonly type: PropType<(chartInstance: Chart<TType, import("chart.js/types/utils").DistributiveArray<import("chart.js").ChartTypeRegistry[TType]["defaultDataPoint"]>, unknown>) => void>;
    };
}, ComponentData, import("vue/types/options").DefaultData<import("vue/types/umd")>, import("vue/types/options").DefaultComputed, import("vue/types/options").DefaultMethods<import("vue/types/umd")>>;
export {};
