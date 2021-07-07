export { defineChartComponent } from './components';
export declare const BarChart: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data> & import("@vue/composition-api").Data, {}, {}, {
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
        readonly type: import("@vue/composition-api").PropType<import("./components").StyleValue>;
    };
    readonly plugins: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
        readonly default: () => never[];
    };
    readonly data: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"bar", number[], unknown>>;
        readonly required: true;
    };
    readonly options: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"bar"> & import("chart.js").ElementChartOptions<"bar"> & import("chart.js").PluginChartOptions<"bar"> & import("chart.js").DatasetChartOptions<"bar"> & import("chart.js").ScaleChartOptions<"bar"> & import("chart.js").BarControllerChartOptions>>;
    };
    readonly onLabelsUpdate: {
        readonly type: import("@vue/composition-api").PropType<() => void>;
    };
    readonly onChartUpdate: {
        readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"bar", number[], unknown>) => void>;
    };
    readonly onChartDestroy: {
        readonly type: import("@vue/composition-api").PropType<() => void>;
    };
    readonly onChartRender: {
        readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"bar", number[], unknown>) => void>;
    };
}, {
    data: import("chart.js").ChartData<"bar", number[], unknown>;
    plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
} & {
    styles?: import("./components").StyleValue | undefined;
    options?: import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"bar"> & import("chart.js").ElementChartOptions<"bar"> & import("chart.js").PluginChartOptions<"bar"> & import("chart.js").DatasetChartOptions<"bar"> & import("chart.js").ScaleChartOptions<"bar"> & import("chart.js").BarControllerChartOptions> | undefined;
    onLabelsUpdate?: (() => void) | undefined;
    onChartUpdate?: ((chartInstance: import("chart.js").Chart<"bar", number[], unknown>) => void) | undefined;
    onChartDestroy?: (() => void) | undefined;
    onChartRender?: ((chartInstance: import("chart.js").Chart<"bar", number[], unknown>) => void) | undefined;
}> & import("vue").VueConstructor<import("vue").default> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{
    data: import("chart.js").ChartData<"bar", number[], unknown>;
    plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
} & {
    styles?: import("./components").StyleValue | undefined;
    options?: import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"bar"> & import("chart.js").ElementChartOptions<"bar"> & import("chart.js").PluginChartOptions<"bar"> & import("chart.js").DatasetChartOptions<"bar"> & import("chart.js").ScaleChartOptions<"bar"> & import("chart.js").BarControllerChartOptions> | undefined;
    onLabelsUpdate?: (() => void) | undefined;
    onChartUpdate?: ((chartInstance: import("chart.js").Chart<"bar", number[], unknown>) => void) | undefined;
    onChartDestroy?: (() => void) | undefined;
    onChartRender?: ((chartInstance: import("chart.js").Chart<"bar", number[], unknown>) => void) | undefined;
}, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data>, import("@vue/composition-api").Data, {}, {}, {
    data: import("chart.js").ChartData<"bar", number[], unknown>;
    plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
} & {
    styles?: import("./components").StyleValue | undefined;
    options?: import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"bar"> & import("chart.js").ElementChartOptions<"bar"> & import("chart.js").PluginChartOptions<"bar"> & import("chart.js").DatasetChartOptions<"bar"> & import("chart.js").ScaleChartOptions<"bar"> & import("chart.js").BarControllerChartOptions> | undefined;
    onLabelsUpdate?: (() => void) | undefined;
    onChartUpdate?: ((chartInstance: import("chart.js").Chart<"bar", number[], unknown>) => void) | undefined;
    onChartDestroy?: (() => void) | undefined;
    onChartRender?: ((chartInstance: import("chart.js").Chart<"bar", number[], unknown>) => void) | undefined;
}, {
    plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
}, true>);
export declare const DoughnutChart: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data> & import("@vue/composition-api").Data, {}, {}, {
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
        readonly type: import("@vue/composition-api").PropType<import("./components").StyleValue>;
    };
    readonly plugins: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
        readonly default: () => never[];
    };
    readonly data: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"doughnut", number[], unknown>>;
        readonly required: true;
    };
    readonly options: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"doughnut"> & import("chart.js").ElementChartOptions<"doughnut"> & import("chart.js").PluginChartOptions<"doughnut"> & import("chart.js").DatasetChartOptions<"doughnut"> & import("chart.js").ScaleChartOptions<"doughnut"> & import("chart.js").DoughnutControllerChartOptions>>;
    };
    readonly onLabelsUpdate: {
        readonly type: import("@vue/composition-api").PropType<() => void>;
    };
    readonly onChartUpdate: {
        readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"doughnut", number[], unknown>) => void>;
    };
    readonly onChartDestroy: {
        readonly type: import("@vue/composition-api").PropType<() => void>;
    };
    readonly onChartRender: {
        readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"doughnut", number[], unknown>) => void>;
    };
}, {
    data: import("chart.js").ChartData<"doughnut", number[], unknown>;
    plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
} & {
    styles?: import("./components").StyleValue | undefined;
    options?: import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"doughnut"> & import("chart.js").ElementChartOptions<"doughnut"> & import("chart.js").PluginChartOptions<"doughnut"> & import("chart.js").DatasetChartOptions<"doughnut"> & import("chart.js").ScaleChartOptions<"doughnut"> & import("chart.js").DoughnutControllerChartOptions> | undefined;
    onLabelsUpdate?: (() => void) | undefined;
    onChartUpdate?: ((chartInstance: import("chart.js").Chart<"doughnut", number[], unknown>) => void) | undefined;
    onChartDestroy?: (() => void) | undefined;
    onChartRender?: ((chartInstance: import("chart.js").Chart<"doughnut", number[], unknown>) => void) | undefined;
}> & import("vue").VueConstructor<import("vue").default> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{
    data: import("chart.js").ChartData<"doughnut", number[], unknown>;
    plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
} & {
    styles?: import("./components").StyleValue | undefined;
    options?: import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"doughnut"> & import("chart.js").ElementChartOptions<"doughnut"> & import("chart.js").PluginChartOptions<"doughnut"> & import("chart.js").DatasetChartOptions<"doughnut"> & import("chart.js").ScaleChartOptions<"doughnut"> & import("chart.js").DoughnutControllerChartOptions> | undefined;
    onLabelsUpdate?: (() => void) | undefined;
    onChartUpdate?: ((chartInstance: import("chart.js").Chart<"doughnut", number[], unknown>) => void) | undefined;
    onChartDestroy?: (() => void) | undefined;
    onChartRender?: ((chartInstance: import("chart.js").Chart<"doughnut", number[], unknown>) => void) | undefined;
}, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data>, import("@vue/composition-api").Data, {}, {}, {
    data: import("chart.js").ChartData<"doughnut", number[], unknown>;
    plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
} & {
    styles?: import("./components").StyleValue | undefined;
    options?: import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"doughnut"> & import("chart.js").ElementChartOptions<"doughnut"> & import("chart.js").PluginChartOptions<"doughnut"> & import("chart.js").DatasetChartOptions<"doughnut"> & import("chart.js").ScaleChartOptions<"doughnut"> & import("chart.js").DoughnutControllerChartOptions> | undefined;
    onLabelsUpdate?: (() => void) | undefined;
    onChartUpdate?: ((chartInstance: import("chart.js").Chart<"doughnut", number[], unknown>) => void) | undefined;
    onChartDestroy?: (() => void) | undefined;
    onChartRender?: ((chartInstance: import("chart.js").Chart<"doughnut", number[], unknown>) => void) | undefined;
}, {
    plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
}, true>);
export declare const LineChart: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data> & import("@vue/composition-api").Data, {}, {}, {
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
        readonly type: import("@vue/composition-api").PropType<import("./components").StyleValue>;
    };
    readonly plugins: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
        readonly default: () => never[];
    };
    readonly data: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"line", (number | import("chart.js").ScatterDataPoint | null)[], unknown>>;
        readonly required: true;
    };
    readonly options: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"line"> & import("chart.js").ElementChartOptions<"line"> & import("chart.js").PluginChartOptions<"line"> & import("chart.js").DatasetChartOptions<"line"> & import("chart.js").ScaleChartOptions<"line"> & import("chart.js").LineControllerChartOptions>>;
    };
    readonly onLabelsUpdate: {
        readonly type: import("@vue/composition-api").PropType<() => void>;
    };
    readonly onChartUpdate: {
        readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"line", (number | import("chart.js").ScatterDataPoint | null)[], unknown>) => void>;
    };
    readonly onChartDestroy: {
        readonly type: import("@vue/composition-api").PropType<() => void>;
    };
    readonly onChartRender: {
        readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"line", (number | import("chart.js").ScatterDataPoint | null)[], unknown>) => void>;
    };
}, {
    data: import("chart.js").ChartData<"line", (number | import("chart.js").ScatterDataPoint | null)[], unknown>;
    plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
} & {
    styles?: import("./components").StyleValue | undefined;
    options?: import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"line"> & import("chart.js").ElementChartOptions<"line"> & import("chart.js").PluginChartOptions<"line"> & import("chart.js").DatasetChartOptions<"line"> & import("chart.js").ScaleChartOptions<"line"> & import("chart.js").LineControllerChartOptions> | undefined;
    onLabelsUpdate?: (() => void) | undefined;
    onChartUpdate?: ((chartInstance: import("chart.js").Chart<"line", (number | import("chart.js").ScatterDataPoint | null)[], unknown>) => void) | undefined;
    onChartDestroy?: (() => void) | undefined;
    onChartRender?: ((chartInstance: import("chart.js").Chart<"line", (number | import("chart.js").ScatterDataPoint | null)[], unknown>) => void) | undefined;
}> & import("vue").VueConstructor<import("vue").default> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{
    data: import("chart.js").ChartData<"line", (number | import("chart.js").ScatterDataPoint | null)[], unknown>;
    plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
} & {
    styles?: import("./components").StyleValue | undefined;
    options?: import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"line"> & import("chart.js").ElementChartOptions<"line"> & import("chart.js").PluginChartOptions<"line"> & import("chart.js").DatasetChartOptions<"line"> & import("chart.js").ScaleChartOptions<"line"> & import("chart.js").LineControllerChartOptions> | undefined;
    onLabelsUpdate?: (() => void) | undefined;
    onChartUpdate?: ((chartInstance: import("chart.js").Chart<"line", (number | import("chart.js").ScatterDataPoint | null)[], unknown>) => void) | undefined;
    onChartDestroy?: (() => void) | undefined;
    onChartRender?: ((chartInstance: import("chart.js").Chart<"line", (number | import("chart.js").ScatterDataPoint | null)[], unknown>) => void) | undefined;
}, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data>, import("@vue/composition-api").Data, {}, {}, {
    data: import("chart.js").ChartData<"line", (number | import("chart.js").ScatterDataPoint | null)[], unknown>;
    plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
} & {
    styles?: import("./components").StyleValue | undefined;
    options?: import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"line"> & import("chart.js").ElementChartOptions<"line"> & import("chart.js").PluginChartOptions<"line"> & import("chart.js").DatasetChartOptions<"line"> & import("chart.js").ScaleChartOptions<"line"> & import("chart.js").LineControllerChartOptions> | undefined;
    onLabelsUpdate?: (() => void) | undefined;
    onChartUpdate?: ((chartInstance: import("chart.js").Chart<"line", (number | import("chart.js").ScatterDataPoint | null)[], unknown>) => void) | undefined;
    onChartDestroy?: (() => void) | undefined;
    onChartRender?: ((chartInstance: import("chart.js").Chart<"line", (number | import("chart.js").ScatterDataPoint | null)[], unknown>) => void) | undefined;
}, {
    plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
}, true>);
export declare const PieChart: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data> & import("@vue/composition-api").Data, {}, {}, {
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
        readonly type: import("@vue/composition-api").PropType<import("./components").StyleValue>;
    };
    readonly plugins: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
        readonly default: () => never[];
    };
    readonly data: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"pie", number[], unknown>>;
        readonly required: true;
    };
    readonly options: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"pie"> & import("chart.js").ElementChartOptions<"pie"> & import("chart.js").PluginChartOptions<"pie"> & import("chart.js").DatasetChartOptions<"pie"> & import("chart.js").ScaleChartOptions<"pie"> & import("chart.js").DoughnutControllerChartOptions>>;
    };
    readonly onLabelsUpdate: {
        readonly type: import("@vue/composition-api").PropType<() => void>;
    };
    readonly onChartUpdate: {
        readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"pie", number[], unknown>) => void>;
    };
    readonly onChartDestroy: {
        readonly type: import("@vue/composition-api").PropType<() => void>;
    };
    readonly onChartRender: {
        readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"pie", number[], unknown>) => void>;
    };
}, {
    data: import("chart.js").ChartData<"pie", number[], unknown>;
    plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
} & {
    styles?: import("./components").StyleValue | undefined;
    options?: import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"pie"> & import("chart.js").ElementChartOptions<"pie"> & import("chart.js").PluginChartOptions<"pie"> & import("chart.js").DatasetChartOptions<"pie"> & import("chart.js").ScaleChartOptions<"pie"> & import("chart.js").DoughnutControllerChartOptions> | undefined;
    onLabelsUpdate?: (() => void) | undefined;
    onChartUpdate?: ((chartInstance: import("chart.js").Chart<"pie", number[], unknown>) => void) | undefined;
    onChartDestroy?: (() => void) | undefined;
    onChartRender?: ((chartInstance: import("chart.js").Chart<"pie", number[], unknown>) => void) | undefined;
}> & import("vue").VueConstructor<import("vue").default> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{
    data: import("chart.js").ChartData<"pie", number[], unknown>;
    plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
} & {
    styles?: import("./components").StyleValue | undefined;
    options?: import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"pie"> & import("chart.js").ElementChartOptions<"pie"> & import("chart.js").PluginChartOptions<"pie"> & import("chart.js").DatasetChartOptions<"pie"> & import("chart.js").ScaleChartOptions<"pie"> & import("chart.js").DoughnutControllerChartOptions> | undefined;
    onLabelsUpdate?: (() => void) | undefined;
    onChartUpdate?: ((chartInstance: import("chart.js").Chart<"pie", number[], unknown>) => void) | undefined;
    onChartDestroy?: (() => void) | undefined;
    onChartRender?: ((chartInstance: import("chart.js").Chart<"pie", number[], unknown>) => void) | undefined;
}, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data>, import("@vue/composition-api").Data, {}, {}, {
    data: import("chart.js").ChartData<"pie", number[], unknown>;
    plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
} & {
    styles?: import("./components").StyleValue | undefined;
    options?: import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"pie"> & import("chart.js").ElementChartOptions<"pie"> & import("chart.js").PluginChartOptions<"pie"> & import("chart.js").DatasetChartOptions<"pie"> & import("chart.js").ScaleChartOptions<"pie"> & import("chart.js").DoughnutControllerChartOptions> | undefined;
    onLabelsUpdate?: (() => void) | undefined;
    onChartUpdate?: ((chartInstance: import("chart.js").Chart<"pie", number[], unknown>) => void) | undefined;
    onChartDestroy?: (() => void) | undefined;
    onChartRender?: ((chartInstance: import("chart.js").Chart<"pie", number[], unknown>) => void) | undefined;
}, {
    plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
}, true>);
export declare const PolarAreaChart: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data> & import("@vue/composition-api").Data, {}, {}, {
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
        readonly type: import("@vue/composition-api").PropType<import("./components").StyleValue>;
    };
    readonly plugins: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
        readonly default: () => never[];
    };
    readonly data: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"polarArea", number[], unknown>>;
        readonly required: true;
    };
    readonly options: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"polarArea"> & import("chart.js").ElementChartOptions<"polarArea"> & import("chart.js").PluginChartOptions<"polarArea"> & import("chart.js").DatasetChartOptions<"polarArea"> & import("chart.js").ScaleChartOptions<"polarArea"> & import("chart.js").PolarAreaControllerChartOptions>>;
    };
    readonly onLabelsUpdate: {
        readonly type: import("@vue/composition-api").PropType<() => void>;
    };
    readonly onChartUpdate: {
        readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"polarArea", number[], unknown>) => void>;
    };
    readonly onChartDestroy: {
        readonly type: import("@vue/composition-api").PropType<() => void>;
    };
    readonly onChartRender: {
        readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"polarArea", number[], unknown>) => void>;
    };
}, {
    data: import("chart.js").ChartData<"polarArea", number[], unknown>;
    plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
} & {
    styles?: import("./components").StyleValue | undefined;
    options?: import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"polarArea"> & import("chart.js").ElementChartOptions<"polarArea"> & import("chart.js").PluginChartOptions<"polarArea"> & import("chart.js").DatasetChartOptions<"polarArea"> & import("chart.js").ScaleChartOptions<"polarArea"> & import("chart.js").PolarAreaControllerChartOptions> | undefined;
    onLabelsUpdate?: (() => void) | undefined;
    onChartUpdate?: ((chartInstance: import("chart.js").Chart<"polarArea", number[], unknown>) => void) | undefined;
    onChartDestroy?: (() => void) | undefined;
    onChartRender?: ((chartInstance: import("chart.js").Chart<"polarArea", number[], unknown>) => void) | undefined;
}> & import("vue").VueConstructor<import("vue").default> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{
    data: import("chart.js").ChartData<"polarArea", number[], unknown>;
    plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
} & {
    styles?: import("./components").StyleValue | undefined;
    options?: import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"polarArea"> & import("chart.js").ElementChartOptions<"polarArea"> & import("chart.js").PluginChartOptions<"polarArea"> & import("chart.js").DatasetChartOptions<"polarArea"> & import("chart.js").ScaleChartOptions<"polarArea"> & import("chart.js").PolarAreaControllerChartOptions> | undefined;
    onLabelsUpdate?: (() => void) | undefined;
    onChartUpdate?: ((chartInstance: import("chart.js").Chart<"polarArea", number[], unknown>) => void) | undefined;
    onChartDestroy?: (() => void) | undefined;
    onChartRender?: ((chartInstance: import("chart.js").Chart<"polarArea", number[], unknown>) => void) | undefined;
}, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data>, import("@vue/composition-api").Data, {}, {}, {
    data: import("chart.js").ChartData<"polarArea", number[], unknown>;
    plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
} & {
    styles?: import("./components").StyleValue | undefined;
    options?: import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"polarArea"> & import("chart.js").ElementChartOptions<"polarArea"> & import("chart.js").PluginChartOptions<"polarArea"> & import("chart.js").DatasetChartOptions<"polarArea"> & import("chart.js").ScaleChartOptions<"polarArea"> & import("chart.js").PolarAreaControllerChartOptions> | undefined;
    onLabelsUpdate?: (() => void) | undefined;
    onChartUpdate?: ((chartInstance: import("chart.js").Chart<"polarArea", number[], unknown>) => void) | undefined;
    onChartDestroy?: (() => void) | undefined;
    onChartRender?: ((chartInstance: import("chart.js").Chart<"polarArea", number[], unknown>) => void) | undefined;
}, {
    plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
}, true>);
export declare const RadarChart: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data> & import("@vue/composition-api").Data, {}, {}, {
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
        readonly type: import("@vue/composition-api").PropType<import("./components").StyleValue>;
    };
    readonly plugins: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
        readonly default: () => never[];
    };
    readonly data: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"radar", (number | null)[], unknown>>;
        readonly required: true;
    };
    readonly options: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"radar"> & import("chart.js").ElementChartOptions<"radar"> & import("chart.js").PluginChartOptions<"radar"> & import("chart.js").DatasetChartOptions<"radar"> & import("chart.js").ScaleChartOptions<"radar"> & import("chart.js").LineControllerChartOptions>>;
    };
    readonly onLabelsUpdate: {
        readonly type: import("@vue/composition-api").PropType<() => void>;
    };
    readonly onChartUpdate: {
        readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"radar", (number | null)[], unknown>) => void>;
    };
    readonly onChartDestroy: {
        readonly type: import("@vue/composition-api").PropType<() => void>;
    };
    readonly onChartRender: {
        readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"radar", (number | null)[], unknown>) => void>;
    };
}, {
    data: import("chart.js").ChartData<"radar", (number | null)[], unknown>;
    plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
} & {
    styles?: import("./components").StyleValue | undefined;
    options?: import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"radar"> & import("chart.js").ElementChartOptions<"radar"> & import("chart.js").PluginChartOptions<"radar"> & import("chart.js").DatasetChartOptions<"radar"> & import("chart.js").ScaleChartOptions<"radar"> & import("chart.js").LineControllerChartOptions> | undefined;
    onLabelsUpdate?: (() => void) | undefined;
    onChartUpdate?: ((chartInstance: import("chart.js").Chart<"radar", (number | null)[], unknown>) => void) | undefined;
    onChartDestroy?: (() => void) | undefined;
    onChartRender?: ((chartInstance: import("chart.js").Chart<"radar", (number | null)[], unknown>) => void) | undefined;
}> & import("vue").VueConstructor<import("vue").default> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{
    data: import("chart.js").ChartData<"radar", (number | null)[], unknown>;
    plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
} & {
    styles?: import("./components").StyleValue | undefined;
    options?: import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"radar"> & import("chart.js").ElementChartOptions<"radar"> & import("chart.js").PluginChartOptions<"radar"> & import("chart.js").DatasetChartOptions<"radar"> & import("chart.js").ScaleChartOptions<"radar"> & import("chart.js").LineControllerChartOptions> | undefined;
    onLabelsUpdate?: (() => void) | undefined;
    onChartUpdate?: ((chartInstance: import("chart.js").Chart<"radar", (number | null)[], unknown>) => void) | undefined;
    onChartDestroy?: (() => void) | undefined;
    onChartRender?: ((chartInstance: import("chart.js").Chart<"radar", (number | null)[], unknown>) => void) | undefined;
}, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data>, import("@vue/composition-api").Data, {}, {}, {
    data: import("chart.js").ChartData<"radar", (number | null)[], unknown>;
    plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
} & {
    styles?: import("./components").StyleValue | undefined;
    options?: import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"radar"> & import("chart.js").ElementChartOptions<"radar"> & import("chart.js").PluginChartOptions<"radar"> & import("chart.js").DatasetChartOptions<"radar"> & import("chart.js").ScaleChartOptions<"radar"> & import("chart.js").LineControllerChartOptions> | undefined;
    onLabelsUpdate?: (() => void) | undefined;
    onChartUpdate?: ((chartInstance: import("chart.js").Chart<"radar", (number | null)[], unknown>) => void) | undefined;
    onChartDestroy?: (() => void) | undefined;
    onChartRender?: ((chartInstance: import("chart.js").Chart<"radar", (number | null)[], unknown>) => void) | undefined;
}, {
    plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
}, true>);
export declare const BubbleChart: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data> & import("@vue/composition-api").Data, {}, {}, {
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
        readonly type: import("@vue/composition-api").PropType<import("./components").StyleValue>;
    };
    readonly plugins: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
        readonly default: () => never[];
    };
    readonly data: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"bubble", import("chart.js").BubbleDataPoint[], unknown>>;
        readonly required: true;
    };
    readonly options: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"bubble"> & import("chart.js").ElementChartOptions<"bubble"> & import("chart.js").PluginChartOptions<"bubble"> & import("chart.js").DatasetChartOptions<"bubble"> & import("chart.js").ScaleChartOptions<"bubble">>>;
    };
    readonly onLabelsUpdate: {
        readonly type: import("@vue/composition-api").PropType<() => void>;
    };
    readonly onChartUpdate: {
        readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"bubble", import("chart.js").BubbleDataPoint[], unknown>) => void>;
    };
    readonly onChartDestroy: {
        readonly type: import("@vue/composition-api").PropType<() => void>;
    };
    readonly onChartRender: {
        readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"bubble", import("chart.js").BubbleDataPoint[], unknown>) => void>;
    };
}, {
    data: import("chart.js").ChartData<"bubble", import("chart.js").BubbleDataPoint[], unknown>;
    plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
} & {
    styles?: import("./components").StyleValue | undefined;
    options?: import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"bubble"> & import("chart.js").ElementChartOptions<"bubble"> & import("chart.js").PluginChartOptions<"bubble"> & import("chart.js").DatasetChartOptions<"bubble"> & import("chart.js").ScaleChartOptions<"bubble">> | undefined;
    onLabelsUpdate?: (() => void) | undefined;
    onChartUpdate?: ((chartInstance: import("chart.js").Chart<"bubble", import("chart.js").BubbleDataPoint[], unknown>) => void) | undefined;
    onChartDestroy?: (() => void) | undefined;
    onChartRender?: ((chartInstance: import("chart.js").Chart<"bubble", import("chart.js").BubbleDataPoint[], unknown>) => void) | undefined;
}> & import("vue").VueConstructor<import("vue").default> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{
    data: import("chart.js").ChartData<"bubble", import("chart.js").BubbleDataPoint[], unknown>;
    plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
} & {
    styles?: import("./components").StyleValue | undefined;
    options?: import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"bubble"> & import("chart.js").ElementChartOptions<"bubble"> & import("chart.js").PluginChartOptions<"bubble"> & import("chart.js").DatasetChartOptions<"bubble"> & import("chart.js").ScaleChartOptions<"bubble">> | undefined;
    onLabelsUpdate?: (() => void) | undefined;
    onChartUpdate?: ((chartInstance: import("chart.js").Chart<"bubble", import("chart.js").BubbleDataPoint[], unknown>) => void) | undefined;
    onChartDestroy?: (() => void) | undefined;
    onChartRender?: ((chartInstance: import("chart.js").Chart<"bubble", import("chart.js").BubbleDataPoint[], unknown>) => void) | undefined;
}, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data>, import("@vue/composition-api").Data, {}, {}, {
    data: import("chart.js").ChartData<"bubble", import("chart.js").BubbleDataPoint[], unknown>;
    plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
} & {
    styles?: import("./components").StyleValue | undefined;
    options?: import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"bubble"> & import("chart.js").ElementChartOptions<"bubble"> & import("chart.js").PluginChartOptions<"bubble"> & import("chart.js").DatasetChartOptions<"bubble"> & import("chart.js").ScaleChartOptions<"bubble">> | undefined;
    onLabelsUpdate?: (() => void) | undefined;
    onChartUpdate?: ((chartInstance: import("chart.js").Chart<"bubble", import("chart.js").BubbleDataPoint[], unknown>) => void) | undefined;
    onChartDestroy?: (() => void) | undefined;
    onChartRender?: ((chartInstance: import("chart.js").Chart<"bubble", import("chart.js").BubbleDataPoint[], unknown>) => void) | undefined;
}, {
    plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
}, true>);
export declare const ScatterChart: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data> & import("@vue/composition-api").Data, {}, {}, {
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
        readonly type: import("@vue/composition-api").PropType<import("./components").StyleValue>;
    };
    readonly plugins: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
        readonly default: () => never[];
    };
    readonly data: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"scatter", (number | import("chart.js").ScatterDataPoint | null)[], unknown>>;
        readonly required: true;
    };
    readonly options: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"scatter"> & import("chart.js").ElementChartOptions<"scatter"> & import("chart.js").PluginChartOptions<"scatter"> & import("chart.js").DatasetChartOptions<"scatter"> & import("chart.js").ScaleChartOptions<"scatter"> & import("chart.js").LineControllerChartOptions>>;
    };
    readonly onLabelsUpdate: {
        readonly type: import("@vue/composition-api").PropType<() => void>;
    };
    readonly onChartUpdate: {
        readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"scatter", (number | import("chart.js").ScatterDataPoint | null)[], unknown>) => void>;
    };
    readonly onChartDestroy: {
        readonly type: import("@vue/composition-api").PropType<() => void>;
    };
    readonly onChartRender: {
        readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"scatter", (number | import("chart.js").ScatterDataPoint | null)[], unknown>) => void>;
    };
}, {
    data: import("chart.js").ChartData<"scatter", (number | import("chart.js").ScatterDataPoint | null)[], unknown>;
    plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
} & {
    styles?: import("./components").StyleValue | undefined;
    options?: import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"scatter"> & import("chart.js").ElementChartOptions<"scatter"> & import("chart.js").PluginChartOptions<"scatter"> & import("chart.js").DatasetChartOptions<"scatter"> & import("chart.js").ScaleChartOptions<"scatter"> & import("chart.js").LineControllerChartOptions> | undefined;
    onLabelsUpdate?: (() => void) | undefined;
    onChartUpdate?: ((chartInstance: import("chart.js").Chart<"scatter", (number | import("chart.js").ScatterDataPoint | null)[], unknown>) => void) | undefined;
    onChartDestroy?: (() => void) | undefined;
    onChartRender?: ((chartInstance: import("chart.js").Chart<"scatter", (number | import("chart.js").ScatterDataPoint | null)[], unknown>) => void) | undefined;
}> & import("vue").VueConstructor<import("vue").default> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{
    data: import("chart.js").ChartData<"scatter", (number | import("chart.js").ScatterDataPoint | null)[], unknown>;
    plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
} & {
    styles?: import("./components").StyleValue | undefined;
    options?: import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"scatter"> & import("chart.js").ElementChartOptions<"scatter"> & import("chart.js").PluginChartOptions<"scatter"> & import("chart.js").DatasetChartOptions<"scatter"> & import("chart.js").ScaleChartOptions<"scatter"> & import("chart.js").LineControllerChartOptions> | undefined;
    onLabelsUpdate?: (() => void) | undefined;
    onChartUpdate?: ((chartInstance: import("chart.js").Chart<"scatter", (number | import("chart.js").ScatterDataPoint | null)[], unknown>) => void) | undefined;
    onChartDestroy?: (() => void) | undefined;
    onChartRender?: ((chartInstance: import("chart.js").Chart<"scatter", (number | import("chart.js").ScatterDataPoint | null)[], unknown>) => void) | undefined;
}, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data>, import("@vue/composition-api").Data, {}, {}, {
    data: import("chart.js").ChartData<"scatter", (number | import("chart.js").ScatterDataPoint | null)[], unknown>;
    plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
} & {
    styles?: import("./components").StyleValue | undefined;
    options?: import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"scatter"> & import("chart.js").ElementChartOptions<"scatter"> & import("chart.js").PluginChartOptions<"scatter"> & import("chart.js").DatasetChartOptions<"scatter"> & import("chart.js").ScaleChartOptions<"scatter"> & import("chart.js").LineControllerChartOptions> | undefined;
    onLabelsUpdate?: (() => void) | undefined;
    onChartUpdate?: ((chartInstance: import("chart.js").Chart<"scatter", (number | import("chart.js").ScatterDataPoint | null)[], unknown>) => void) | undefined;
    onChartDestroy?: (() => void) | undefined;
    onChartRender?: ((chartInstance: import("chart.js").Chart<"scatter", (number | import("chart.js").ScatterDataPoint | null)[], unknown>) => void) | undefined;
}, {
    plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
}, true>);
declare const _default: {
    BarChart: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data> & import("@vue/composition-api").Data, {}, {}, {
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
            readonly type: import("@vue/composition-api").PropType<import("./components").StyleValue>;
        };
        readonly plugins: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
            readonly default: () => never[];
        };
        readonly data: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"bar", number[], unknown>>;
            readonly required: true;
        };
        readonly options: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"bar"> & import("chart.js").ElementChartOptions<"bar"> & import("chart.js").PluginChartOptions<"bar"> & import("chart.js").DatasetChartOptions<"bar"> & import("chart.js").ScaleChartOptions<"bar"> & import("chart.js").BarControllerChartOptions>>;
        };
        readonly onLabelsUpdate: {
            readonly type: import("@vue/composition-api").PropType<() => void>;
        };
        readonly onChartUpdate: {
            readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"bar", number[], unknown>) => void>;
        };
        readonly onChartDestroy: {
            readonly type: import("@vue/composition-api").PropType<() => void>;
        };
        readonly onChartRender: {
            readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"bar", number[], unknown>) => void>;
        };
    }, {
        data: import("chart.js").ChartData<"bar", number[], unknown>;
        plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
        chartId: string;
        width: number;
        height: number;
        cssClasses: string;
    } & {
        styles?: import("./components").StyleValue | undefined;
        options?: import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"bar"> & import("chart.js").ElementChartOptions<"bar"> & import("chart.js").PluginChartOptions<"bar"> & import("chart.js").DatasetChartOptions<"bar"> & import("chart.js").ScaleChartOptions<"bar"> & import("chart.js").BarControllerChartOptions> | undefined;
        onLabelsUpdate?: (() => void) | undefined;
        onChartUpdate?: ((chartInstance: import("chart.js").Chart<"bar", number[], unknown>) => void) | undefined;
        onChartDestroy?: (() => void) | undefined;
        onChartRender?: ((chartInstance: import("chart.js").Chart<"bar", number[], unknown>) => void) | undefined;
    }> & import("vue").VueConstructor<import("vue").default> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{
        data: import("chart.js").ChartData<"bar", number[], unknown>;
        plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
        chartId: string;
        width: number;
        height: number;
        cssClasses: string;
    } & {
        styles?: import("./components").StyleValue | undefined;
        options?: import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"bar"> & import("chart.js").ElementChartOptions<"bar"> & import("chart.js").PluginChartOptions<"bar"> & import("chart.js").DatasetChartOptions<"bar"> & import("chart.js").ScaleChartOptions<"bar"> & import("chart.js").BarControllerChartOptions> | undefined;
        onLabelsUpdate?: (() => void) | undefined;
        onChartUpdate?: ((chartInstance: import("chart.js").Chart<"bar", number[], unknown>) => void) | undefined;
        onChartDestroy?: (() => void) | undefined;
        onChartRender?: ((chartInstance: import("chart.js").Chart<"bar", number[], unknown>) => void) | undefined;
    }, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data>, import("@vue/composition-api").Data, {}, {}, {
        data: import("chart.js").ChartData<"bar", number[], unknown>;
        plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
        chartId: string;
        width: number;
        height: number;
        cssClasses: string;
    } & {
        styles?: import("./components").StyleValue | undefined;
        options?: import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"bar"> & import("chart.js").ElementChartOptions<"bar"> & import("chart.js").PluginChartOptions<"bar"> & import("chart.js").DatasetChartOptions<"bar"> & import("chart.js").ScaleChartOptions<"bar"> & import("chart.js").BarControllerChartOptions> | undefined;
        onLabelsUpdate?: (() => void) | undefined;
        onChartUpdate?: ((chartInstance: import("chart.js").Chart<"bar", number[], unknown>) => void) | undefined;
        onChartDestroy?: (() => void) | undefined;
        onChartRender?: ((chartInstance: import("chart.js").Chart<"bar", number[], unknown>) => void) | undefined;
    }, {
        plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
        chartId: string;
        width: number;
        height: number;
        cssClasses: string;
    }, true>);
    DoughnutChart: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data> & import("@vue/composition-api").Data, {}, {}, {
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
            readonly type: import("@vue/composition-api").PropType<import("./components").StyleValue>;
        };
        readonly plugins: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
            readonly default: () => never[];
        };
        readonly data: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"doughnut", number[], unknown>>;
            readonly required: true;
        };
        readonly options: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"doughnut"> & import("chart.js").ElementChartOptions<"doughnut"> & import("chart.js").PluginChartOptions<"doughnut"> & import("chart.js").DatasetChartOptions<"doughnut"> & import("chart.js").ScaleChartOptions<"doughnut"> & import("chart.js").DoughnutControllerChartOptions>>;
        };
        readonly onLabelsUpdate: {
            readonly type: import("@vue/composition-api").PropType<() => void>;
        };
        readonly onChartUpdate: {
            readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"doughnut", number[], unknown>) => void>;
        };
        readonly onChartDestroy: {
            readonly type: import("@vue/composition-api").PropType<() => void>;
        };
        readonly onChartRender: {
            readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"doughnut", number[], unknown>) => void>;
        };
    }, {
        data: import("chart.js").ChartData<"doughnut", number[], unknown>;
        plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
        chartId: string;
        width: number;
        height: number;
        cssClasses: string;
    } & {
        styles?: import("./components").StyleValue | undefined;
        options?: import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"doughnut"> & import("chart.js").ElementChartOptions<"doughnut"> & import("chart.js").PluginChartOptions<"doughnut"> & import("chart.js").DatasetChartOptions<"doughnut"> & import("chart.js").ScaleChartOptions<"doughnut"> & import("chart.js").DoughnutControllerChartOptions> | undefined;
        onLabelsUpdate?: (() => void) | undefined;
        onChartUpdate?: ((chartInstance: import("chart.js").Chart<"doughnut", number[], unknown>) => void) | undefined;
        onChartDestroy?: (() => void) | undefined;
        onChartRender?: ((chartInstance: import("chart.js").Chart<"doughnut", number[], unknown>) => void) | undefined;
    }> & import("vue").VueConstructor<import("vue").default> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{
        data: import("chart.js").ChartData<"doughnut", number[], unknown>;
        plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
        chartId: string;
        width: number;
        height: number;
        cssClasses: string;
    } & {
        styles?: import("./components").StyleValue | undefined;
        options?: import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"doughnut"> & import("chart.js").ElementChartOptions<"doughnut"> & import("chart.js").PluginChartOptions<"doughnut"> & import("chart.js").DatasetChartOptions<"doughnut"> & import("chart.js").ScaleChartOptions<"doughnut"> & import("chart.js").DoughnutControllerChartOptions> | undefined;
        onLabelsUpdate?: (() => void) | undefined;
        onChartUpdate?: ((chartInstance: import("chart.js").Chart<"doughnut", number[], unknown>) => void) | undefined;
        onChartDestroy?: (() => void) | undefined;
        onChartRender?: ((chartInstance: import("chart.js").Chart<"doughnut", number[], unknown>) => void) | undefined;
    }, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data>, import("@vue/composition-api").Data, {}, {}, {
        data: import("chart.js").ChartData<"doughnut", number[], unknown>;
        plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
        chartId: string;
        width: number;
        height: number;
        cssClasses: string;
    } & {
        styles?: import("./components").StyleValue | undefined;
        options?: import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"doughnut"> & import("chart.js").ElementChartOptions<"doughnut"> & import("chart.js").PluginChartOptions<"doughnut"> & import("chart.js").DatasetChartOptions<"doughnut"> & import("chart.js").ScaleChartOptions<"doughnut"> & import("chart.js").DoughnutControllerChartOptions> | undefined;
        onLabelsUpdate?: (() => void) | undefined;
        onChartUpdate?: ((chartInstance: import("chart.js").Chart<"doughnut", number[], unknown>) => void) | undefined;
        onChartDestroy?: (() => void) | undefined;
        onChartRender?: ((chartInstance: import("chart.js").Chart<"doughnut", number[], unknown>) => void) | undefined;
    }, {
        plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
        chartId: string;
        width: number;
        height: number;
        cssClasses: string;
    }, true>);
    LineChart: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data> & import("@vue/composition-api").Data, {}, {}, {
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
            readonly type: import("@vue/composition-api").PropType<import("./components").StyleValue>;
        };
        readonly plugins: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
            readonly default: () => never[];
        };
        readonly data: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"line", (number | import("chart.js").ScatterDataPoint | null)[], unknown>>;
            readonly required: true;
        };
        readonly options: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"line"> & import("chart.js").ElementChartOptions<"line"> & import("chart.js").PluginChartOptions<"line"> & import("chart.js").DatasetChartOptions<"line"> & import("chart.js").ScaleChartOptions<"line"> & import("chart.js").LineControllerChartOptions>>;
        };
        readonly onLabelsUpdate: {
            readonly type: import("@vue/composition-api").PropType<() => void>;
        };
        readonly onChartUpdate: {
            readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"line", (number | import("chart.js").ScatterDataPoint | null)[], unknown>) => void>;
        };
        readonly onChartDestroy: {
            readonly type: import("@vue/composition-api").PropType<() => void>;
        };
        readonly onChartRender: {
            readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"line", (number | import("chart.js").ScatterDataPoint | null)[], unknown>) => void>;
        };
    }, {
        data: import("chart.js").ChartData<"line", (number | import("chart.js").ScatterDataPoint | null)[], unknown>;
        plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
        chartId: string;
        width: number;
        height: number;
        cssClasses: string;
    } & {
        styles?: import("./components").StyleValue | undefined;
        options?: import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"line"> & import("chart.js").ElementChartOptions<"line"> & import("chart.js").PluginChartOptions<"line"> & import("chart.js").DatasetChartOptions<"line"> & import("chart.js").ScaleChartOptions<"line"> & import("chart.js").LineControllerChartOptions> | undefined;
        onLabelsUpdate?: (() => void) | undefined;
        onChartUpdate?: ((chartInstance: import("chart.js").Chart<"line", (number | import("chart.js").ScatterDataPoint | null)[], unknown>) => void) | undefined;
        onChartDestroy?: (() => void) | undefined;
        onChartRender?: ((chartInstance: import("chart.js").Chart<"line", (number | import("chart.js").ScatterDataPoint | null)[], unknown>) => void) | undefined;
    }> & import("vue").VueConstructor<import("vue").default> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{
        data: import("chart.js").ChartData<"line", (number | import("chart.js").ScatterDataPoint | null)[], unknown>;
        plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
        chartId: string;
        width: number;
        height: number;
        cssClasses: string;
    } & {
        styles?: import("./components").StyleValue | undefined;
        options?: import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"line"> & import("chart.js").ElementChartOptions<"line"> & import("chart.js").PluginChartOptions<"line"> & import("chart.js").DatasetChartOptions<"line"> & import("chart.js").ScaleChartOptions<"line"> & import("chart.js").LineControllerChartOptions> | undefined;
        onLabelsUpdate?: (() => void) | undefined;
        onChartUpdate?: ((chartInstance: import("chart.js").Chart<"line", (number | import("chart.js").ScatterDataPoint | null)[], unknown>) => void) | undefined;
        onChartDestroy?: (() => void) | undefined;
        onChartRender?: ((chartInstance: import("chart.js").Chart<"line", (number | import("chart.js").ScatterDataPoint | null)[], unknown>) => void) | undefined;
    }, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data>, import("@vue/composition-api").Data, {}, {}, {
        data: import("chart.js").ChartData<"line", (number | import("chart.js").ScatterDataPoint | null)[], unknown>;
        plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
        chartId: string;
        width: number;
        height: number;
        cssClasses: string;
    } & {
        styles?: import("./components").StyleValue | undefined;
        options?: import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"line"> & import("chart.js").ElementChartOptions<"line"> & import("chart.js").PluginChartOptions<"line"> & import("chart.js").DatasetChartOptions<"line"> & import("chart.js").ScaleChartOptions<"line"> & import("chart.js").LineControllerChartOptions> | undefined;
        onLabelsUpdate?: (() => void) | undefined;
        onChartUpdate?: ((chartInstance: import("chart.js").Chart<"line", (number | import("chart.js").ScatterDataPoint | null)[], unknown>) => void) | undefined;
        onChartDestroy?: (() => void) | undefined;
        onChartRender?: ((chartInstance: import("chart.js").Chart<"line", (number | import("chart.js").ScatterDataPoint | null)[], unknown>) => void) | undefined;
    }, {
        plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
        chartId: string;
        width: number;
        height: number;
        cssClasses: string;
    }, true>);
    PieChart: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data> & import("@vue/composition-api").Data, {}, {}, {
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
            readonly type: import("@vue/composition-api").PropType<import("./components").StyleValue>;
        };
        readonly plugins: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
            readonly default: () => never[];
        };
        readonly data: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"pie", number[], unknown>>;
            readonly required: true;
        };
        readonly options: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"pie"> & import("chart.js").ElementChartOptions<"pie"> & import("chart.js").PluginChartOptions<"pie"> & import("chart.js").DatasetChartOptions<"pie"> & import("chart.js").ScaleChartOptions<"pie"> & import("chart.js").DoughnutControllerChartOptions>>;
        };
        readonly onLabelsUpdate: {
            readonly type: import("@vue/composition-api").PropType<() => void>;
        };
        readonly onChartUpdate: {
            readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"pie", number[], unknown>) => void>;
        };
        readonly onChartDestroy: {
            readonly type: import("@vue/composition-api").PropType<() => void>;
        };
        readonly onChartRender: {
            readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"pie", number[], unknown>) => void>;
        };
    }, {
        data: import("chart.js").ChartData<"pie", number[], unknown>;
        plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
        chartId: string;
        width: number;
        height: number;
        cssClasses: string;
    } & {
        styles?: import("./components").StyleValue | undefined;
        options?: import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"pie"> & import("chart.js").ElementChartOptions<"pie"> & import("chart.js").PluginChartOptions<"pie"> & import("chart.js").DatasetChartOptions<"pie"> & import("chart.js").ScaleChartOptions<"pie"> & import("chart.js").DoughnutControllerChartOptions> | undefined;
        onLabelsUpdate?: (() => void) | undefined;
        onChartUpdate?: ((chartInstance: import("chart.js").Chart<"pie", number[], unknown>) => void) | undefined;
        onChartDestroy?: (() => void) | undefined;
        onChartRender?: ((chartInstance: import("chart.js").Chart<"pie", number[], unknown>) => void) | undefined;
    }> & import("vue").VueConstructor<import("vue").default> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{
        data: import("chart.js").ChartData<"pie", number[], unknown>;
        plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
        chartId: string;
        width: number;
        height: number;
        cssClasses: string;
    } & {
        styles?: import("./components").StyleValue | undefined;
        options?: import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"pie"> & import("chart.js").ElementChartOptions<"pie"> & import("chart.js").PluginChartOptions<"pie"> & import("chart.js").DatasetChartOptions<"pie"> & import("chart.js").ScaleChartOptions<"pie"> & import("chart.js").DoughnutControllerChartOptions> | undefined;
        onLabelsUpdate?: (() => void) | undefined;
        onChartUpdate?: ((chartInstance: import("chart.js").Chart<"pie", number[], unknown>) => void) | undefined;
        onChartDestroy?: (() => void) | undefined;
        onChartRender?: ((chartInstance: import("chart.js").Chart<"pie", number[], unknown>) => void) | undefined;
    }, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data>, import("@vue/composition-api").Data, {}, {}, {
        data: import("chart.js").ChartData<"pie", number[], unknown>;
        plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
        chartId: string;
        width: number;
        height: number;
        cssClasses: string;
    } & {
        styles?: import("./components").StyleValue | undefined;
        options?: import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"pie"> & import("chart.js").ElementChartOptions<"pie"> & import("chart.js").PluginChartOptions<"pie"> & import("chart.js").DatasetChartOptions<"pie"> & import("chart.js").ScaleChartOptions<"pie"> & import("chart.js").DoughnutControllerChartOptions> | undefined;
        onLabelsUpdate?: (() => void) | undefined;
        onChartUpdate?: ((chartInstance: import("chart.js").Chart<"pie", number[], unknown>) => void) | undefined;
        onChartDestroy?: (() => void) | undefined;
        onChartRender?: ((chartInstance: import("chart.js").Chart<"pie", number[], unknown>) => void) | undefined;
    }, {
        plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
        chartId: string;
        width: number;
        height: number;
        cssClasses: string;
    }, true>);
    PolarAreaChart: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data> & import("@vue/composition-api").Data, {}, {}, {
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
            readonly type: import("@vue/composition-api").PropType<import("./components").StyleValue>;
        };
        readonly plugins: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
            readonly default: () => never[];
        };
        readonly data: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"polarArea", number[], unknown>>;
            readonly required: true;
        };
        readonly options: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"polarArea"> & import("chart.js").ElementChartOptions<"polarArea"> & import("chart.js").PluginChartOptions<"polarArea"> & import("chart.js").DatasetChartOptions<"polarArea"> & import("chart.js").ScaleChartOptions<"polarArea"> & import("chart.js").PolarAreaControllerChartOptions>>;
        };
        readonly onLabelsUpdate: {
            readonly type: import("@vue/composition-api").PropType<() => void>;
        };
        readonly onChartUpdate: {
            readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"polarArea", number[], unknown>) => void>;
        };
        readonly onChartDestroy: {
            readonly type: import("@vue/composition-api").PropType<() => void>;
        };
        readonly onChartRender: {
            readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"polarArea", number[], unknown>) => void>;
        };
    }, {
        data: import("chart.js").ChartData<"polarArea", number[], unknown>;
        plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
        chartId: string;
        width: number;
        height: number;
        cssClasses: string;
    } & {
        styles?: import("./components").StyleValue | undefined;
        options?: import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"polarArea"> & import("chart.js").ElementChartOptions<"polarArea"> & import("chart.js").PluginChartOptions<"polarArea"> & import("chart.js").DatasetChartOptions<"polarArea"> & import("chart.js").ScaleChartOptions<"polarArea"> & import("chart.js").PolarAreaControllerChartOptions> | undefined;
        onLabelsUpdate?: (() => void) | undefined;
        onChartUpdate?: ((chartInstance: import("chart.js").Chart<"polarArea", number[], unknown>) => void) | undefined;
        onChartDestroy?: (() => void) | undefined;
        onChartRender?: ((chartInstance: import("chart.js").Chart<"polarArea", number[], unknown>) => void) | undefined;
    }> & import("vue").VueConstructor<import("vue").default> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{
        data: import("chart.js").ChartData<"polarArea", number[], unknown>;
        plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
        chartId: string;
        width: number;
        height: number;
        cssClasses: string;
    } & {
        styles?: import("./components").StyleValue | undefined;
        options?: import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"polarArea"> & import("chart.js").ElementChartOptions<"polarArea"> & import("chart.js").PluginChartOptions<"polarArea"> & import("chart.js").DatasetChartOptions<"polarArea"> & import("chart.js").ScaleChartOptions<"polarArea"> & import("chart.js").PolarAreaControllerChartOptions> | undefined;
        onLabelsUpdate?: (() => void) | undefined;
        onChartUpdate?: ((chartInstance: import("chart.js").Chart<"polarArea", number[], unknown>) => void) | undefined;
        onChartDestroy?: (() => void) | undefined;
        onChartRender?: ((chartInstance: import("chart.js").Chart<"polarArea", number[], unknown>) => void) | undefined;
    }, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data>, import("@vue/composition-api").Data, {}, {}, {
        data: import("chart.js").ChartData<"polarArea", number[], unknown>;
        plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
        chartId: string;
        width: number;
        height: number;
        cssClasses: string;
    } & {
        styles?: import("./components").StyleValue | undefined;
        options?: import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"polarArea"> & import("chart.js").ElementChartOptions<"polarArea"> & import("chart.js").PluginChartOptions<"polarArea"> & import("chart.js").DatasetChartOptions<"polarArea"> & import("chart.js").ScaleChartOptions<"polarArea"> & import("chart.js").PolarAreaControllerChartOptions> | undefined;
        onLabelsUpdate?: (() => void) | undefined;
        onChartUpdate?: ((chartInstance: import("chart.js").Chart<"polarArea", number[], unknown>) => void) | undefined;
        onChartDestroy?: (() => void) | undefined;
        onChartRender?: ((chartInstance: import("chart.js").Chart<"polarArea", number[], unknown>) => void) | undefined;
    }, {
        plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
        chartId: string;
        width: number;
        height: number;
        cssClasses: string;
    }, true>);
    RadarChart: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data> & import("@vue/composition-api").Data, {}, {}, {
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
            readonly type: import("@vue/composition-api").PropType<import("./components").StyleValue>;
        };
        readonly plugins: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
            readonly default: () => never[];
        };
        readonly data: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"radar", (number | null)[], unknown>>;
            readonly required: true;
        };
        readonly options: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"radar"> & import("chart.js").ElementChartOptions<"radar"> & import("chart.js").PluginChartOptions<"radar"> & import("chart.js").DatasetChartOptions<"radar"> & import("chart.js").ScaleChartOptions<"radar"> & import("chart.js").LineControllerChartOptions>>;
        };
        readonly onLabelsUpdate: {
            readonly type: import("@vue/composition-api").PropType<() => void>;
        };
        readonly onChartUpdate: {
            readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"radar", (number | null)[], unknown>) => void>;
        };
        readonly onChartDestroy: {
            readonly type: import("@vue/composition-api").PropType<() => void>;
        };
        readonly onChartRender: {
            readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"radar", (number | null)[], unknown>) => void>;
        };
    }, {
        data: import("chart.js").ChartData<"radar", (number | null)[], unknown>;
        plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
        chartId: string;
        width: number;
        height: number;
        cssClasses: string;
    } & {
        styles?: import("./components").StyleValue | undefined;
        options?: import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"radar"> & import("chart.js").ElementChartOptions<"radar"> & import("chart.js").PluginChartOptions<"radar"> & import("chart.js").DatasetChartOptions<"radar"> & import("chart.js").ScaleChartOptions<"radar"> & import("chart.js").LineControllerChartOptions> | undefined;
        onLabelsUpdate?: (() => void) | undefined;
        onChartUpdate?: ((chartInstance: import("chart.js").Chart<"radar", (number | null)[], unknown>) => void) | undefined;
        onChartDestroy?: (() => void) | undefined;
        onChartRender?: ((chartInstance: import("chart.js").Chart<"radar", (number | null)[], unknown>) => void) | undefined;
    }> & import("vue").VueConstructor<import("vue").default> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{
        data: import("chart.js").ChartData<"radar", (number | null)[], unknown>;
        plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
        chartId: string;
        width: number;
        height: number;
        cssClasses: string;
    } & {
        styles?: import("./components").StyleValue | undefined;
        options?: import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"radar"> & import("chart.js").ElementChartOptions<"radar"> & import("chart.js").PluginChartOptions<"radar"> & import("chart.js").DatasetChartOptions<"radar"> & import("chart.js").ScaleChartOptions<"radar"> & import("chart.js").LineControllerChartOptions> | undefined;
        onLabelsUpdate?: (() => void) | undefined;
        onChartUpdate?: ((chartInstance: import("chart.js").Chart<"radar", (number | null)[], unknown>) => void) | undefined;
        onChartDestroy?: (() => void) | undefined;
        onChartRender?: ((chartInstance: import("chart.js").Chart<"radar", (number | null)[], unknown>) => void) | undefined;
    }, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data>, import("@vue/composition-api").Data, {}, {}, {
        data: import("chart.js").ChartData<"radar", (number | null)[], unknown>;
        plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
        chartId: string;
        width: number;
        height: number;
        cssClasses: string;
    } & {
        styles?: import("./components").StyleValue | undefined;
        options?: import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"radar"> & import("chart.js").ElementChartOptions<"radar"> & import("chart.js").PluginChartOptions<"radar"> & import("chart.js").DatasetChartOptions<"radar"> & import("chart.js").ScaleChartOptions<"radar"> & import("chart.js").LineControllerChartOptions> | undefined;
        onLabelsUpdate?: (() => void) | undefined;
        onChartUpdate?: ((chartInstance: import("chart.js").Chart<"radar", (number | null)[], unknown>) => void) | undefined;
        onChartDestroy?: (() => void) | undefined;
        onChartRender?: ((chartInstance: import("chart.js").Chart<"radar", (number | null)[], unknown>) => void) | undefined;
    }, {
        plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
        chartId: string;
        width: number;
        height: number;
        cssClasses: string;
    }, true>);
    BubbleChart: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data> & import("@vue/composition-api").Data, {}, {}, {
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
            readonly type: import("@vue/composition-api").PropType<import("./components").StyleValue>;
        };
        readonly plugins: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
            readonly default: () => never[];
        };
        readonly data: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"bubble", import("chart.js").BubbleDataPoint[], unknown>>;
            readonly required: true;
        };
        readonly options: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"bubble"> & import("chart.js").ElementChartOptions<"bubble"> & import("chart.js").PluginChartOptions<"bubble"> & import("chart.js").DatasetChartOptions<"bubble"> & import("chart.js").ScaleChartOptions<"bubble">>>;
        };
        readonly onLabelsUpdate: {
            readonly type: import("@vue/composition-api").PropType<() => void>;
        };
        readonly onChartUpdate: {
            readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"bubble", import("chart.js").BubbleDataPoint[], unknown>) => void>;
        };
        readonly onChartDestroy: {
            readonly type: import("@vue/composition-api").PropType<() => void>;
        };
        readonly onChartRender: {
            readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"bubble", import("chart.js").BubbleDataPoint[], unknown>) => void>;
        };
    }, {
        data: import("chart.js").ChartData<"bubble", import("chart.js").BubbleDataPoint[], unknown>;
        plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
        chartId: string;
        width: number;
        height: number;
        cssClasses: string;
    } & {
        styles?: import("./components").StyleValue | undefined;
        options?: import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"bubble"> & import("chart.js").ElementChartOptions<"bubble"> & import("chart.js").PluginChartOptions<"bubble"> & import("chart.js").DatasetChartOptions<"bubble"> & import("chart.js").ScaleChartOptions<"bubble">> | undefined;
        onLabelsUpdate?: (() => void) | undefined;
        onChartUpdate?: ((chartInstance: import("chart.js").Chart<"bubble", import("chart.js").BubbleDataPoint[], unknown>) => void) | undefined;
        onChartDestroy?: (() => void) | undefined;
        onChartRender?: ((chartInstance: import("chart.js").Chart<"bubble", import("chart.js").BubbleDataPoint[], unknown>) => void) | undefined;
    }> & import("vue").VueConstructor<import("vue").default> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{
        data: import("chart.js").ChartData<"bubble", import("chart.js").BubbleDataPoint[], unknown>;
        plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
        chartId: string;
        width: number;
        height: number;
        cssClasses: string;
    } & {
        styles?: import("./components").StyleValue | undefined;
        options?: import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"bubble"> & import("chart.js").ElementChartOptions<"bubble"> & import("chart.js").PluginChartOptions<"bubble"> & import("chart.js").DatasetChartOptions<"bubble"> & import("chart.js").ScaleChartOptions<"bubble">> | undefined;
        onLabelsUpdate?: (() => void) | undefined;
        onChartUpdate?: ((chartInstance: import("chart.js").Chart<"bubble", import("chart.js").BubbleDataPoint[], unknown>) => void) | undefined;
        onChartDestroy?: (() => void) | undefined;
        onChartRender?: ((chartInstance: import("chart.js").Chart<"bubble", import("chart.js").BubbleDataPoint[], unknown>) => void) | undefined;
    }, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data>, import("@vue/composition-api").Data, {}, {}, {
        data: import("chart.js").ChartData<"bubble", import("chart.js").BubbleDataPoint[], unknown>;
        plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
        chartId: string;
        width: number;
        height: number;
        cssClasses: string;
    } & {
        styles?: import("./components").StyleValue | undefined;
        options?: import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"bubble"> & import("chart.js").ElementChartOptions<"bubble"> & import("chart.js").PluginChartOptions<"bubble"> & import("chart.js").DatasetChartOptions<"bubble"> & import("chart.js").ScaleChartOptions<"bubble">> | undefined;
        onLabelsUpdate?: (() => void) | undefined;
        onChartUpdate?: ((chartInstance: import("chart.js").Chart<"bubble", import("chart.js").BubbleDataPoint[], unknown>) => void) | undefined;
        onChartDestroy?: (() => void) | undefined;
        onChartRender?: ((chartInstance: import("chart.js").Chart<"bubble", import("chart.js").BubbleDataPoint[], unknown>) => void) | undefined;
    }, {
        plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
        chartId: string;
        width: number;
        height: number;
        cssClasses: string;
    }, true>);
    ScatterChart: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data> & import("@vue/composition-api").Data, {}, {}, {
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
            readonly type: import("@vue/composition-api").PropType<import("./components").StyleValue>;
        };
        readonly plugins: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
            readonly default: () => never[];
        };
        readonly data: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"scatter", (number | import("chart.js").ScatterDataPoint | null)[], unknown>>;
            readonly required: true;
        };
        readonly options: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"scatter"> & import("chart.js").ElementChartOptions<"scatter"> & import("chart.js").PluginChartOptions<"scatter"> & import("chart.js").DatasetChartOptions<"scatter"> & import("chart.js").ScaleChartOptions<"scatter"> & import("chart.js").LineControllerChartOptions>>;
        };
        readonly onLabelsUpdate: {
            readonly type: import("@vue/composition-api").PropType<() => void>;
        };
        readonly onChartUpdate: {
            readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"scatter", (number | import("chart.js").ScatterDataPoint | null)[], unknown>) => void>;
        };
        readonly onChartDestroy: {
            readonly type: import("@vue/composition-api").PropType<() => void>;
        };
        readonly onChartRender: {
            readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"scatter", (number | import("chart.js").ScatterDataPoint | null)[], unknown>) => void>;
        };
    }, {
        data: import("chart.js").ChartData<"scatter", (number | import("chart.js").ScatterDataPoint | null)[], unknown>;
        plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
        chartId: string;
        width: number;
        height: number;
        cssClasses: string;
    } & {
        styles?: import("./components").StyleValue | undefined;
        options?: import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"scatter"> & import("chart.js").ElementChartOptions<"scatter"> & import("chart.js").PluginChartOptions<"scatter"> & import("chart.js").DatasetChartOptions<"scatter"> & import("chart.js").ScaleChartOptions<"scatter"> & import("chart.js").LineControllerChartOptions> | undefined;
        onLabelsUpdate?: (() => void) | undefined;
        onChartUpdate?: ((chartInstance: import("chart.js").Chart<"scatter", (number | import("chart.js").ScatterDataPoint | null)[], unknown>) => void) | undefined;
        onChartDestroy?: (() => void) | undefined;
        onChartRender?: ((chartInstance: import("chart.js").Chart<"scatter", (number | import("chart.js").ScatterDataPoint | null)[], unknown>) => void) | undefined;
    }> & import("vue").VueConstructor<import("vue").default> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{
        data: import("chart.js").ChartData<"scatter", (number | import("chart.js").ScatterDataPoint | null)[], unknown>;
        plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
        chartId: string;
        width: number;
        height: number;
        cssClasses: string;
    } & {
        styles?: import("./components").StyleValue | undefined;
        options?: import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"scatter"> & import("chart.js").ElementChartOptions<"scatter"> & import("chart.js").PluginChartOptions<"scatter"> & import("chart.js").DatasetChartOptions<"scatter"> & import("chart.js").ScaleChartOptions<"scatter"> & import("chart.js").LineControllerChartOptions> | undefined;
        onLabelsUpdate?: (() => void) | undefined;
        onChartUpdate?: ((chartInstance: import("chart.js").Chart<"scatter", (number | import("chart.js").ScatterDataPoint | null)[], unknown>) => void) | undefined;
        onChartDestroy?: (() => void) | undefined;
        onChartRender?: ((chartInstance: import("chart.js").Chart<"scatter", (number | import("chart.js").ScatterDataPoint | null)[], unknown>) => void) | undefined;
    }, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data>, import("@vue/composition-api").Data, {}, {}, {
        data: import("chart.js").ChartData<"scatter", (number | import("chart.js").ScatterDataPoint | null)[], unknown>;
        plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
        chartId: string;
        width: number;
        height: number;
        cssClasses: string;
    } & {
        styles?: import("./components").StyleValue | undefined;
        options?: import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"scatter"> & import("chart.js").ElementChartOptions<"scatter"> & import("chart.js").PluginChartOptions<"scatter"> & import("chart.js").DatasetChartOptions<"scatter"> & import("chart.js").ScaleChartOptions<"scatter"> & import("chart.js").LineControllerChartOptions> | undefined;
        onLabelsUpdate?: (() => void) | undefined;
        onChartUpdate?: ((chartInstance: import("chart.js").Chart<"scatter", (number | import("chart.js").ScatterDataPoint | null)[], unknown>) => void) | undefined;
        onChartDestroy?: (() => void) | undefined;
        onChartRender?: ((chartInstance: import("chart.js").Chart<"scatter", (number | import("chart.js").ScatterDataPoint | null)[], unknown>) => void) | undefined;
    }, {
        plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
        chartId: string;
        width: number;
        height: number;
        cssClasses: string;
    }, true>);
    defineChartComponent: <TType extends keyof import("chart.js").ChartTypeRegistry = keyof import("chart.js").ChartTypeRegistry>(chartId: string, chartType: TType) => import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data> & import("@vue/composition-api").Data, {}, {}, {
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
            readonly type: import("@vue/composition-api").PropType<import("./components").StyleValue>;
        };
        readonly plugins: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
            readonly default: () => never[];
        };
        readonly data: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js").ChartData<TType, import("chart.js/types/utils").DistributiveArray<import("chart.js").ChartTypeRegistry[TType]["defaultDataPoint"]>, unknown>>;
            readonly required: true;
        };
        readonly options: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js/types/utils").DeepPartial<import("chart.js").CoreChartOptions<TType> & import("chart.js").ElementChartOptions<TType> & import("chart.js").PluginChartOptions<TType> & import("chart.js").DatasetChartOptions<TType> & import("chart.js").ScaleChartOptions<TType> & import("chart.js").ChartTypeRegistry[TType]["chartOptions"]>>;
        };
        readonly onLabelsUpdate: {
            readonly type: import("@vue/composition-api").PropType<() => void>;
        };
        readonly onChartUpdate: {
            readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<TType, import("chart.js/types/utils").DistributiveArray<import("chart.js").ChartTypeRegistry[TType]["defaultDataPoint"]>, unknown>) => void>;
        };
        readonly onChartDestroy: {
            readonly type: import("@vue/composition-api").PropType<() => void>;
        };
        readonly onChartRender: {
            readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<TType, import("chart.js/types/utils").DistributiveArray<import("chart.js").ChartTypeRegistry[TType]["defaultDataPoint"]>, unknown>) => void>;
        };
    }, {
        data: import("chart.js").ChartData<TType, import("chart.js/types/utils").DistributiveArray<import("chart.js").ChartTypeRegistry[TType]["defaultDataPoint"]>, unknown>;
        plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
        chartId: string;
        width: number;
        height: number;
        cssClasses: string;
    } & {
        styles?: import("./components").StyleValue | undefined;
        options?: (unknown extends import("chart.js/types/utils").DeepPartial<import("chart.js").CoreChartOptions<TType> & import("chart.js").ElementChartOptions<TType> & import("chart.js").PluginChartOptions<TType> & import("chart.js").DatasetChartOptions<TType> & import("chart.js").ScaleChartOptions<TType> & import("chart.js").ChartTypeRegistry[TType]["chartOptions"]> ? unknown : import("chart.js/types/utils").DeepPartial<import("chart.js").CoreChartOptions<TType> & import("chart.js").ElementChartOptions<TType> & import("chart.js").PluginChartOptions<TType> & import("chart.js").DatasetChartOptions<TType> & import("chart.js").ScaleChartOptions<TType> & import("chart.js").ChartTypeRegistry[TType]["chartOptions"]> extends Function ? Function & import("chart.js/types/utils").DeepPartial<import("chart.js").CoreChartOptions<TType> & import("chart.js").ElementChartOptions<TType> & import("chart.js").PluginChartOptions<TType> & import("chart.js").DatasetChartOptions<TType> & import("chart.js").ScaleChartOptions<TType> & import("chart.js").ChartTypeRegistry[TType]["chartOptions"]> extends (...args: any[]) => any ? ((...args: any[]) => any) & Function & import("chart.js/types/utils").DeepPartial<import("chart.js").CoreChartOptions<TType> & import("chart.js").ElementChartOptions<TType> & import("chart.js").PluginChartOptions<TType> & import("chart.js").DatasetChartOptions<TType> & import("chart.js").ScaleChartOptions<TType> & import("chart.js").ChartTypeRegistry[TType]["chartOptions"]> : never : Exclude<import("chart.js/types/utils").DeepPartial<import("chart.js").CoreChartOptions<TType> & import("chart.js").ElementChartOptions<TType> & import("chart.js").PluginChartOptions<TType> & import("chart.js").DatasetChartOptions<TType> & import("chart.js").ScaleChartOptions<TType> & import("chart.js").ChartTypeRegistry[TType]["chartOptions"]>, Function>) | undefined;
        onLabelsUpdate?: (() => void) | undefined;
        onChartUpdate?: ((chartInstance: import("chart.js").Chart<TType, import("chart.js/types/utils").DistributiveArray<import("chart.js").ChartTypeRegistry[TType]["defaultDataPoint"]>, unknown>) => void) | undefined;
        onChartDestroy?: (() => void) | undefined;
        onChartRender?: ((chartInstance: import("chart.js").Chart<TType, import("chart.js/types/utils").DistributiveArray<import("chart.js").ChartTypeRegistry[TType]["defaultDataPoint"]>, unknown>) => void) | undefined;
    }> & import("vue").VueConstructor<import("vue").default> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{
        data: import("chart.js").ChartData<TType, import("chart.js/types/utils").DistributiveArray<import("chart.js").ChartTypeRegistry[TType]["defaultDataPoint"]>, unknown>;
        plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
        chartId: string;
        width: number;
        height: number;
        cssClasses: string;
    } & {
        styles?: import("./components").StyleValue | undefined;
        options?: (unknown extends import("chart.js/types/utils").DeepPartial<import("chart.js").CoreChartOptions<TType> & import("chart.js").ElementChartOptions<TType> & import("chart.js").PluginChartOptions<TType> & import("chart.js").DatasetChartOptions<TType> & import("chart.js").ScaleChartOptions<TType> & import("chart.js").ChartTypeRegistry[TType]["chartOptions"]> ? unknown : import("chart.js/types/utils").DeepPartial<import("chart.js").CoreChartOptions<TType> & import("chart.js").ElementChartOptions<TType> & import("chart.js").PluginChartOptions<TType> & import("chart.js").DatasetChartOptions<TType> & import("chart.js").ScaleChartOptions<TType> & import("chart.js").ChartTypeRegistry[TType]["chartOptions"]> extends Function ? Function & import("chart.js/types/utils").DeepPartial<import("chart.js").CoreChartOptions<TType> & import("chart.js").ElementChartOptions<TType> & import("chart.js").PluginChartOptions<TType> & import("chart.js").DatasetChartOptions<TType> & import("chart.js").ScaleChartOptions<TType> & import("chart.js").ChartTypeRegistry[TType]["chartOptions"]> extends (...args: any[]) => any ? ((...args: any[]) => any) & Function & import("chart.js/types/utils").DeepPartial<import("chart.js").CoreChartOptions<TType> & import("chart.js").ElementChartOptions<TType> & import("chart.js").PluginChartOptions<TType> & import("chart.js").DatasetChartOptions<TType> & import("chart.js").ScaleChartOptions<TType> & import("chart.js").ChartTypeRegistry[TType]["chartOptions"]> : never : Exclude<import("chart.js/types/utils").DeepPartial<import("chart.js").CoreChartOptions<TType> & import("chart.js").ElementChartOptions<TType> & import("chart.js").PluginChartOptions<TType> & import("chart.js").DatasetChartOptions<TType> & import("chart.js").ScaleChartOptions<TType> & import("chart.js").ChartTypeRegistry[TType]["chartOptions"]>, Function>) | undefined;
        onLabelsUpdate?: (() => void) | undefined;
        onChartUpdate?: ((chartInstance: import("chart.js").Chart<TType, import("chart.js/types/utils").DistributiveArray<import("chart.js").ChartTypeRegistry[TType]["defaultDataPoint"]>, unknown>) => void) | undefined;
        onChartDestroy?: (() => void) | undefined;
        onChartRender?: ((chartInstance: import("chart.js").Chart<TType, import("chart.js/types/utils").DistributiveArray<import("chart.js").ChartTypeRegistry[TType]["defaultDataPoint"]>, unknown>) => void) | undefined;
    }, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data>, import("@vue/composition-api").Data, {}, {}, {
        data: import("chart.js").ChartData<TType, import("chart.js/types/utils").DistributiveArray<import("chart.js").ChartTypeRegistry[TType]["defaultDataPoint"]>, unknown>;
        plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
        chartId: string;
        width: number;
        height: number;
        cssClasses: string;
    } & {
        styles?: import("./components").StyleValue | undefined;
        options?: (unknown extends import("chart.js/types/utils").DeepPartial<import("chart.js").CoreChartOptions<TType> & import("chart.js").ElementChartOptions<TType> & import("chart.js").PluginChartOptions<TType> & import("chart.js").DatasetChartOptions<TType> & import("chart.js").ScaleChartOptions<TType> & import("chart.js").ChartTypeRegistry[TType]["chartOptions"]> ? unknown : import("chart.js/types/utils").DeepPartial<import("chart.js").CoreChartOptions<TType> & import("chart.js").ElementChartOptions<TType> & import("chart.js").PluginChartOptions<TType> & import("chart.js").DatasetChartOptions<TType> & import("chart.js").ScaleChartOptions<TType> & import("chart.js").ChartTypeRegistry[TType]["chartOptions"]> extends Function ? Function & import("chart.js/types/utils").DeepPartial<import("chart.js").CoreChartOptions<TType> & import("chart.js").ElementChartOptions<TType> & import("chart.js").PluginChartOptions<TType> & import("chart.js").DatasetChartOptions<TType> & import("chart.js").ScaleChartOptions<TType> & import("chart.js").ChartTypeRegistry[TType]["chartOptions"]> extends (...args: any[]) => any ? ((...args: any[]) => any) & Function & import("chart.js/types/utils").DeepPartial<import("chart.js").CoreChartOptions<TType> & import("chart.js").ElementChartOptions<TType> & import("chart.js").PluginChartOptions<TType> & import("chart.js").DatasetChartOptions<TType> & import("chart.js").ScaleChartOptions<TType> & import("chart.js").ChartTypeRegistry[TType]["chartOptions"]> : never : Exclude<import("chart.js/types/utils").DeepPartial<import("chart.js").CoreChartOptions<TType> & import("chart.js").ElementChartOptions<TType> & import("chart.js").PluginChartOptions<TType> & import("chart.js").DatasetChartOptions<TType> & import("chart.js").ScaleChartOptions<TType> & import("chart.js").ChartTypeRegistry[TType]["chartOptions"]>, Function>) | undefined;
        onLabelsUpdate?: (() => void) | undefined;
        onChartUpdate?: ((chartInstance: import("chart.js").Chart<TType, import("chart.js/types/utils").DistributiveArray<import("chart.js").ChartTypeRegistry[TType]["defaultDataPoint"]>, unknown>) => void) | undefined;
        onChartDestroy?: (() => void) | undefined;
        onChartRender?: ((chartInstance: import("chart.js").Chart<TType, import("chart.js/types/utils").DistributiveArray<import("chart.js").ChartTypeRegistry[TType]["defaultDataPoint"]>, unknown>) => void) | undefined;
    }, {
        plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
        chartId: string;
        width: number;
        height: number;
        cssClasses: string;
    }, true>);
};
export default _default;
