import { Chart, ChartData, Plugin } from 'chart.js';
import { PropType, Ref } from 'vue-demi';
import type { CSSProperties, DefineComponent } from '@vue/runtime-dom';
import type { DefaultData } from 'vue/types/options';
export declare type StyleValue = string | CSSProperties | Array<StyleValue>;
declare type ComponentData = {
    canvasRef: Ref<HTMLCanvasElement>;
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
    readonly data: {
        readonly type: PropType<ChartData<TType, import("chart.js/types/utils").DistributiveArray<import("chart.js").ChartTypeRegistry[TType]["defaultDataPoint"]>, unknown>>;
        readonly required: true;
    };
    readonly options: {
        readonly type: PropType<import("chart.js/types/utils").DeepPartial<import("chart.js").CoreChartOptions<TType> & import("chart.js").ElementChartOptions<TType> & import("chart.js").PluginChartOptions<TType> & import("chart.js").DatasetChartOptions<TType> & import("chart.js").ScaleChartOptions<TType> & import("chart.js").ChartTypeRegistry[TType]["chartOptions"]>>;
    };
}, ComponentData & DefaultData<import("vue/types/umd")>, any, any, any, any, any, {
    readonly 'labels:update': () => boolean;
    readonly 'chart:update': (chartInstance: Chart<TType, import("chart.js/types/utils").DistributiveArray<import("chart.js").ChartTypeRegistry[TType]["defaultDataPoint"]>, unknown>) => boolean;
    readonly 'chart:destroy': (chartInstance: Chart<TType, import("chart.js/types/utils").DistributiveArray<import("chart.js").ChartTypeRegistry[TType]["defaultDataPoint"]>, unknown>) => boolean;
    readonly 'chart:render': (chartInstance: Chart<TType, import("chart.js/types/utils").DistributiveArray<import("chart.js").ChartTypeRegistry[TType]["defaultDataPoint"]>, unknown>) => boolean;
}, string, import("@vue/runtime-core").VNodeProps & import("@vue/runtime-core").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    plugins: {
        readonly type: PropType<Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
        readonly default: () => never[];
    };
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
    data: {
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
}>, {
    plugins: {
        readonly type: PropType<Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
        readonly default: () => never[];
    };
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
}>;
export {};
