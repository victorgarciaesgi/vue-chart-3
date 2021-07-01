import { ChartData, Plugin } from 'chart.js';
import { PropType, Ref } from 'vue-demi';
import type { CSSProperties } from '@vue/runtime-dom';
import type { DefaultData } from 'vue/types/options';
import { VueProxy } from './vueproxy.types';
export declare type StyleValue = string | CSSProperties | Array<StyleValue>;
declare type ComponentData = {
    canvasRef: Ref<HTMLCanvasElement>;
};
export declare const defineChartComponent: <TType extends keyof import("chart.js").ChartTypeRegistry = keyof import("chart.js").ChartTypeRegistry>(chartId: string, chartType: TType) => VueProxy<{
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
}, ComponentData & DefaultData<import("vue/types/umd")>, ComponentData & DefaultData<import("vue/types/umd")>, import("vue/types/options").DefaultComputed, import("vue/types/options").DefaultMethods<import("vue/types/umd")>>;
export {};
