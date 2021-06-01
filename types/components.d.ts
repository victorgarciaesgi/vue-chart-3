import { ChartData, Plugin } from 'chart.js';
import { PropType } from 'vue-demi';
import { CSSProperties } from '@vue/runtime-dom';
export declare type StyleValue = string | CSSProperties | Array<StyleValue>;
export declare const defineChartComponent: <TType extends keyof import("chart.js").ChartTypeRegistry = keyof import("chart.js").ChartTypeRegistry>(chartId: string, chartType: TType) => import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data> & import("@vue/composition-api").Data, {}, {}, {
    chartId: {
        default: string;
        type: StringConstructor;
    };
    width: {
        default: number;
        type: NumberConstructor;
    };
    height: {
        default: number;
        type: NumberConstructor;
    };
    cssClasses: {
        type: StringConstructor;
        default: string;
    };
    styles: {
        type: PropType<StyleValue>;
    };
    plugins: {
        type: PropType<Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
        default: () => never[];
    };
    data: {
        type: PropType<ChartData<TType, import("chart.js/types/utils").DistributiveArray<import("chart.js").ChartTypeRegistry[TType]["defaultDataPoint"]>, unknown>>;
        required: true;
    };
    options: {
        type: PropType<import("chart.js/types/utils").DeepPartial<import("chart.js").CoreChartOptions<TType> & import("chart.js").ElementChartOptions<TType> & import("chart.js").PluginChartOptions<TType> & import("chart.js").DatasetChartOptions<TType> & import("chart.js").ScaleChartOptions<TType> & import("chart.js").ChartTypeRegistry[TType]["chartOptions"]>>;
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
}, {
    plugins: Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
}, true>);
