import { Chart, ChartData, Plugin } from 'chart.js';
import { PropType } from 'vue-demi';
import * as CSS from 'csstype';
export declare type StyleValue = string | CSS.Properties | Array<StyleValue>;
export declare const defineChartComponent: <TType extends keyof import("chart.js").ChartTypeRegistry = keyof import("chart.js").ChartTypeRegistry>(chartId: string, chartType: TType) => import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data> & import("@vue/composition-api").Data, {}, {}, {
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
}, {
    data: ChartData<TType, import("chart.js/types/utils").DistributiveArray<import("chart.js").ChartTypeRegistry[TType]["defaultDataPoint"]>, unknown>;
    plugins: Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
} & {
    styles?: StyleValue | undefined;
    options?: (unknown extends import("chart.js/types/utils").DeepPartial<import("chart.js").CoreChartOptions<TType> & import("chart.js").ElementChartOptions<TType> & import("chart.js").PluginChartOptions<TType> & import("chart.js").DatasetChartOptions<TType> & import("chart.js").ScaleChartOptions<TType> & import("chart.js").ChartTypeRegistry[TType]["chartOptions"]> ? unknown : import("chart.js/types/utils").DeepPartial<import("chart.js").CoreChartOptions<TType> & import("chart.js").ElementChartOptions<TType> & import("chart.js").PluginChartOptions<TType> & import("chart.js").DatasetChartOptions<TType> & import("chart.js").ScaleChartOptions<TType> & import("chart.js").ChartTypeRegistry[TType]["chartOptions"]> extends Function ? Function & import("chart.js/types/utils").DeepPartial<import("chart.js").CoreChartOptions<TType> & import("chart.js").ElementChartOptions<TType> & import("chart.js").PluginChartOptions<TType> & import("chart.js").DatasetChartOptions<TType> & import("chart.js").ScaleChartOptions<TType> & import("chart.js").ChartTypeRegistry[TType]["chartOptions"]> extends (...args: any[]) => any ? ((...args: any[]) => any) & Function & import("chart.js/types/utils").DeepPartial<import("chart.js").CoreChartOptions<TType> & import("chart.js").ElementChartOptions<TType> & import("chart.js").PluginChartOptions<TType> & import("chart.js").DatasetChartOptions<TType> & import("chart.js").ScaleChartOptions<TType> & import("chart.js").ChartTypeRegistry[TType]["chartOptions"]> : never : Exclude<import("chart.js/types/utils").DeepPartial<import("chart.js").CoreChartOptions<TType> & import("chart.js").ElementChartOptions<TType> & import("chart.js").PluginChartOptions<TType> & import("chart.js").DatasetChartOptions<TType> & import("chart.js").ScaleChartOptions<TType> & import("chart.js").ChartTypeRegistry[TType]["chartOptions"]>, Function>) | undefined;
    onLabelsUpdate?: (() => void) | undefined;
    onChartUpdate?: ((chartInstance: Chart<TType, import("chart.js/types/utils").DistributiveArray<import("chart.js").ChartTypeRegistry[TType]["defaultDataPoint"]>, unknown>) => void) | undefined;
    onChartDestroy?: (() => void) | undefined;
    onChartRender?: ((chartInstance: Chart<TType, import("chart.js/types/utils").DistributiveArray<import("chart.js").ChartTypeRegistry[TType]["defaultDataPoint"]>, unknown>) => void) | undefined;
}> & import("vue").VueConstructor<import("vue").default> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{
    data: ChartData<TType, import("chart.js/types/utils").DistributiveArray<import("chart.js").ChartTypeRegistry[TType]["defaultDataPoint"]>, unknown>;
    plugins: Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
} & {
    styles?: StyleValue | undefined;
    options?: (unknown extends import("chart.js/types/utils").DeepPartial<import("chart.js").CoreChartOptions<TType> & import("chart.js").ElementChartOptions<TType> & import("chart.js").PluginChartOptions<TType> & import("chart.js").DatasetChartOptions<TType> & import("chart.js").ScaleChartOptions<TType> & import("chart.js").ChartTypeRegistry[TType]["chartOptions"]> ? unknown : import("chart.js/types/utils").DeepPartial<import("chart.js").CoreChartOptions<TType> & import("chart.js").ElementChartOptions<TType> & import("chart.js").PluginChartOptions<TType> & import("chart.js").DatasetChartOptions<TType> & import("chart.js").ScaleChartOptions<TType> & import("chart.js").ChartTypeRegistry[TType]["chartOptions"]> extends Function ? Function & import("chart.js/types/utils").DeepPartial<import("chart.js").CoreChartOptions<TType> & import("chart.js").ElementChartOptions<TType> & import("chart.js").PluginChartOptions<TType> & import("chart.js").DatasetChartOptions<TType> & import("chart.js").ScaleChartOptions<TType> & import("chart.js").ChartTypeRegistry[TType]["chartOptions"]> extends (...args: any[]) => any ? ((...args: any[]) => any) & Function & import("chart.js/types/utils").DeepPartial<import("chart.js").CoreChartOptions<TType> & import("chart.js").ElementChartOptions<TType> & import("chart.js").PluginChartOptions<TType> & import("chart.js").DatasetChartOptions<TType> & import("chart.js").ScaleChartOptions<TType> & import("chart.js").ChartTypeRegistry[TType]["chartOptions"]> : never : Exclude<import("chart.js/types/utils").DeepPartial<import("chart.js").CoreChartOptions<TType> & import("chart.js").ElementChartOptions<TType> & import("chart.js").PluginChartOptions<TType> & import("chart.js").DatasetChartOptions<TType> & import("chart.js").ScaleChartOptions<TType> & import("chart.js").ChartTypeRegistry[TType]["chartOptions"]>, Function>) | undefined;
    onLabelsUpdate?: (() => void) | undefined;
    onChartUpdate?: ((chartInstance: Chart<TType, import("chart.js/types/utils").DistributiveArray<import("chart.js").ChartTypeRegistry[TType]["defaultDataPoint"]>, unknown>) => void) | undefined;
    onChartDestroy?: (() => void) | undefined;
    onChartRender?: ((chartInstance: Chart<TType, import("chart.js/types/utils").DistributiveArray<import("chart.js").ChartTypeRegistry[TType]["defaultDataPoint"]>, unknown>) => void) | undefined;
}, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data>, import("@vue/composition-api").Data, {}, {}, {
    data: ChartData<TType, import("chart.js/types/utils").DistributiveArray<import("chart.js").ChartTypeRegistry[TType]["defaultDataPoint"]>, unknown>;
    plugins: Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
} & {
    styles?: StyleValue | undefined;
    options?: (unknown extends import("chart.js/types/utils").DeepPartial<import("chart.js").CoreChartOptions<TType> & import("chart.js").ElementChartOptions<TType> & import("chart.js").PluginChartOptions<TType> & import("chart.js").DatasetChartOptions<TType> & import("chart.js").ScaleChartOptions<TType> & import("chart.js").ChartTypeRegistry[TType]["chartOptions"]> ? unknown : import("chart.js/types/utils").DeepPartial<import("chart.js").CoreChartOptions<TType> & import("chart.js").ElementChartOptions<TType> & import("chart.js").PluginChartOptions<TType> & import("chart.js").DatasetChartOptions<TType> & import("chart.js").ScaleChartOptions<TType> & import("chart.js").ChartTypeRegistry[TType]["chartOptions"]> extends Function ? Function & import("chart.js/types/utils").DeepPartial<import("chart.js").CoreChartOptions<TType> & import("chart.js").ElementChartOptions<TType> & import("chart.js").PluginChartOptions<TType> & import("chart.js").DatasetChartOptions<TType> & import("chart.js").ScaleChartOptions<TType> & import("chart.js").ChartTypeRegistry[TType]["chartOptions"]> extends (...args: any[]) => any ? ((...args: any[]) => any) & Function & import("chart.js/types/utils").DeepPartial<import("chart.js").CoreChartOptions<TType> & import("chart.js").ElementChartOptions<TType> & import("chart.js").PluginChartOptions<TType> & import("chart.js").DatasetChartOptions<TType> & import("chart.js").ScaleChartOptions<TType> & import("chart.js").ChartTypeRegistry[TType]["chartOptions"]> : never : Exclude<import("chart.js/types/utils").DeepPartial<import("chart.js").CoreChartOptions<TType> & import("chart.js").ElementChartOptions<TType> & import("chart.js").PluginChartOptions<TType> & import("chart.js").DatasetChartOptions<TType> & import("chart.js").ScaleChartOptions<TType> & import("chart.js").ChartTypeRegistry[TType]["chartOptions"]>, Function>) | undefined;
    onLabelsUpdate?: (() => void) | undefined;
    onChartUpdate?: ((chartInstance: Chart<TType, import("chart.js/types/utils").DistributiveArray<import("chart.js").ChartTypeRegistry[TType]["defaultDataPoint"]>, unknown>) => void) | undefined;
    onChartDestroy?: (() => void) | undefined;
    onChartRender?: ((chartInstance: Chart<TType, import("chart.js/types/utils").DistributiveArray<import("chart.js").ChartTypeRegistry[TType]["defaultDataPoint"]>, unknown>) => void) | undefined;
}, {
    plugins: Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
}, true>);
