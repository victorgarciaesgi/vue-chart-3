export declare const Bar: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data> & import("@vue/composition-api").Data, {}, {}, {
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
        type: import("@vue/composition-api").PropType<import("./components").StyleValue>;
    };
    plugins: {
        type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
        default: () => never[];
    };
    data: {
        type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"bar", number[], unknown>>;
        required: true;
    };
    options: {
        type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"bar"> & import("chart.js").ElementChartOptions<"bar"> & import("chart.js").PluginChartOptions<"bar"> & import("chart.js").DatasetChartOptions<"bar"> & import("chart.js").ScaleChartOptions<"bar"> & import("chart.js").BarControllerChartOptions>>;
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
}, {
    plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
}, true>);
export declare const Doughnut: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data> & import("@vue/composition-api").Data, {}, {}, {
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
        type: import("@vue/composition-api").PropType<import("./components").StyleValue>;
    };
    plugins: {
        type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
        default: () => never[];
    };
    data: {
        type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"doughnut", number[], unknown>>;
        required: true;
    };
    options: {
        type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"doughnut"> & import("chart.js").ElementChartOptions<"doughnut"> & import("chart.js").PluginChartOptions<"doughnut"> & import("chart.js").DatasetChartOptions<"doughnut"> & import("chart.js").ScaleChartOptions<"doughnut"> & import("chart.js").DoughnutControllerChartOptions>>;
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
}, {
    plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
}, true>);
export declare const Line: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data> & import("@vue/composition-api").Data, {}, {}, {
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
        type: import("@vue/composition-api").PropType<import("./components").StyleValue>;
    };
    plugins: {
        type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
        default: () => never[];
    };
    data: {
        type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"line", (number | import("chart.js").ScatterDataPoint | null)[], unknown>>;
        required: true;
    };
    options: {
        type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"line"> & import("chart.js").ElementChartOptions<"line"> & import("chart.js").PluginChartOptions<"line"> & import("chart.js").DatasetChartOptions<"line"> & import("chart.js").ScaleChartOptions<"line"> & import("chart.js").LineControllerChartOptions>>;
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
}, {
    plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
}, true>);
export declare const Pie: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data> & import("@vue/composition-api").Data, {}, {}, {
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
        type: import("@vue/composition-api").PropType<import("./components").StyleValue>;
    };
    plugins: {
        type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
        default: () => never[];
    };
    data: {
        type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"pie", number[], unknown>>;
        required: true;
    };
    options: {
        type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"pie"> & import("chart.js").ElementChartOptions<"pie"> & import("chart.js").PluginChartOptions<"pie"> & import("chart.js").DatasetChartOptions<"pie"> & import("chart.js").ScaleChartOptions<"pie"> & import("chart.js").DoughnutControllerChartOptions>>;
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
}, {
    plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
}, true>);
export declare const PolarArea: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data> & import("@vue/composition-api").Data, {}, {}, {
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
        type: import("@vue/composition-api").PropType<import("./components").StyleValue>;
    };
    plugins: {
        type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
        default: () => never[];
    };
    data: {
        type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"polarArea", number[], unknown>>;
        required: true;
    };
    options: {
        type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"polarArea"> & import("chart.js").ElementChartOptions<"polarArea"> & import("chart.js").PluginChartOptions<"polarArea"> & import("chart.js").DatasetChartOptions<"polarArea"> & import("chart.js").ScaleChartOptions<"polarArea"> & import("chart.js").PolarAreaControllerChartOptions>>;
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
}, {
    plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
}, true>);
export declare const Radar: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data> & import("@vue/composition-api").Data, {}, {}, {
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
        type: import("@vue/composition-api").PropType<import("./components").StyleValue>;
    };
    plugins: {
        type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
        default: () => never[];
    };
    data: {
        type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"radar", (number | null)[], unknown>>;
        required: true;
    };
    options: {
        type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"radar"> & import("chart.js").ElementChartOptions<"radar"> & import("chart.js").PluginChartOptions<"radar"> & import("chart.js").DatasetChartOptions<"radar"> & import("chart.js").ScaleChartOptions<"radar"> & import("chart.js").LineControllerChartOptions>>;
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
}, {
    plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
}, true>);
export declare const Bubble: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data> & import("@vue/composition-api").Data, {}, {}, {
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
        type: import("@vue/composition-api").PropType<import("./components").StyleValue>;
    };
    plugins: {
        type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
        default: () => never[];
    };
    data: {
        type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"bubble", import("chart.js").BubbleDataPoint[], unknown>>;
        required: true;
    };
    options: {
        type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"bubble"> & import("chart.js").ElementChartOptions<"bubble"> & import("chart.js").PluginChartOptions<"bubble"> & import("chart.js").DatasetChartOptions<"bubble"> & import("chart.js").ScaleChartOptions<"bubble">>>;
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
}, {
    plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
}, true>);
export declare const Scatter: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data> & import("@vue/composition-api").Data, {}, {}, {
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
        type: import("@vue/composition-api").PropType<import("./components").StyleValue>;
    };
    plugins: {
        type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
        default: () => never[];
    };
    data: {
        type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"scatter", (number | import("chart.js").ScatterDataPoint | null)[], unknown>>;
        required: true;
    };
    options: {
        type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"scatter"> & import("chart.js").ElementChartOptions<"scatter"> & import("chart.js").PluginChartOptions<"scatter"> & import("chart.js").DatasetChartOptions<"scatter"> & import("chart.js").ScaleChartOptions<"scatter"> & import("chart.js").LineControllerChartOptions>>;
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
}, {
    plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
}, true>);
declare const _default: {
    Bar: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data> & import("@vue/composition-api").Data, {}, {}, {
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
            type: import("@vue/composition-api").PropType<import("./components").StyleValue>;
        };
        plugins: {
            type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
            default: () => never[];
        };
        data: {
            type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"bar", number[], unknown>>;
            required: true;
        };
        options: {
            type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"bar"> & import("chart.js").ElementChartOptions<"bar"> & import("chart.js").PluginChartOptions<"bar"> & import("chart.js").DatasetChartOptions<"bar"> & import("chart.js").ScaleChartOptions<"bar"> & import("chart.js").BarControllerChartOptions>>;
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
    }, {
        plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
        chartId: string;
        width: number;
        height: number;
        cssClasses: string;
    }, true>);
    Doughnut: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data> & import("@vue/composition-api").Data, {}, {}, {
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
            type: import("@vue/composition-api").PropType<import("./components").StyleValue>;
        };
        plugins: {
            type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
            default: () => never[];
        };
        data: {
            type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"doughnut", number[], unknown>>;
            required: true;
        };
        options: {
            type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"doughnut"> & import("chart.js").ElementChartOptions<"doughnut"> & import("chart.js").PluginChartOptions<"doughnut"> & import("chart.js").DatasetChartOptions<"doughnut"> & import("chart.js").ScaleChartOptions<"doughnut"> & import("chart.js").DoughnutControllerChartOptions>>;
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
    }, {
        plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
        chartId: string;
        width: number;
        height: number;
        cssClasses: string;
    }, true>);
    Line: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data> & import("@vue/composition-api").Data, {}, {}, {
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
            type: import("@vue/composition-api").PropType<import("./components").StyleValue>;
        };
        plugins: {
            type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
            default: () => never[];
        };
        data: {
            type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"line", (number | import("chart.js").ScatterDataPoint | null)[], unknown>>;
            required: true;
        };
        options: {
            type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"line"> & import("chart.js").ElementChartOptions<"line"> & import("chart.js").PluginChartOptions<"line"> & import("chart.js").DatasetChartOptions<"line"> & import("chart.js").ScaleChartOptions<"line"> & import("chart.js").LineControllerChartOptions>>;
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
    }, {
        plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
        chartId: string;
        width: number;
        height: number;
        cssClasses: string;
    }, true>);
    Pie: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data> & import("@vue/composition-api").Data, {}, {}, {
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
            type: import("@vue/composition-api").PropType<import("./components").StyleValue>;
        };
        plugins: {
            type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
            default: () => never[];
        };
        data: {
            type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"pie", number[], unknown>>;
            required: true;
        };
        options: {
            type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"pie"> & import("chart.js").ElementChartOptions<"pie"> & import("chart.js").PluginChartOptions<"pie"> & import("chart.js").DatasetChartOptions<"pie"> & import("chart.js").ScaleChartOptions<"pie"> & import("chart.js").DoughnutControllerChartOptions>>;
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
    }, {
        plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
        chartId: string;
        width: number;
        height: number;
        cssClasses: string;
    }, true>);
    PolarArea: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data> & import("@vue/composition-api").Data, {}, {}, {
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
            type: import("@vue/composition-api").PropType<import("./components").StyleValue>;
        };
        plugins: {
            type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
            default: () => never[];
        };
        data: {
            type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"polarArea", number[], unknown>>;
            required: true;
        };
        options: {
            type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"polarArea"> & import("chart.js").ElementChartOptions<"polarArea"> & import("chart.js").PluginChartOptions<"polarArea"> & import("chart.js").DatasetChartOptions<"polarArea"> & import("chart.js").ScaleChartOptions<"polarArea"> & import("chart.js").PolarAreaControllerChartOptions>>;
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
    }, {
        plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
        chartId: string;
        width: number;
        height: number;
        cssClasses: string;
    }, true>);
    Radar: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data> & import("@vue/composition-api").Data, {}, {}, {
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
            type: import("@vue/composition-api").PropType<import("./components").StyleValue>;
        };
        plugins: {
            type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
            default: () => never[];
        };
        data: {
            type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"radar", (number | null)[], unknown>>;
            required: true;
        };
        options: {
            type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"radar"> & import("chart.js").ElementChartOptions<"radar"> & import("chart.js").PluginChartOptions<"radar"> & import("chart.js").DatasetChartOptions<"radar"> & import("chart.js").ScaleChartOptions<"radar"> & import("chart.js").LineControllerChartOptions>>;
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
    }, {
        plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
        chartId: string;
        width: number;
        height: number;
        cssClasses: string;
    }, true>);
    Bubble: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data> & import("@vue/composition-api").Data, {}, {}, {
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
            type: import("@vue/composition-api").PropType<import("./components").StyleValue>;
        };
        plugins: {
            type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
            default: () => never[];
        };
        data: {
            type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"bubble", import("chart.js").BubbleDataPoint[], unknown>>;
            required: true;
        };
        options: {
            type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"bubble"> & import("chart.js").ElementChartOptions<"bubble"> & import("chart.js").PluginChartOptions<"bubble"> & import("chart.js").DatasetChartOptions<"bubble"> & import("chart.js").ScaleChartOptions<"bubble">>>;
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
    }, {
        plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
        chartId: string;
        width: number;
        height: number;
        cssClasses: string;
    }, true>);
    Scatter: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data> & import("@vue/composition-api").Data, {}, {}, {
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
            type: import("@vue/composition-api").PropType<import("./components").StyleValue>;
        };
        plugins: {
            type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
            default: () => never[];
        };
        data: {
            type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"scatter", (number | import("chart.js").ScatterDataPoint | null)[], unknown>>;
            required: true;
        };
        options: {
            type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"scatter"> & import("chart.js").ElementChartOptions<"scatter"> & import("chart.js").PluginChartOptions<"scatter"> & import("chart.js").DatasetChartOptions<"scatter"> & import("chart.js").ScaleChartOptions<"scatter"> & import("chart.js").LineControllerChartOptions>>;
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
    }, {
        plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
        chartId: string;
        width: number;
        height: number;
        cssClasses: string;
    }, true>);
    defineChartComponent: <TType extends keyof import("chart.js").ChartTypeRegistry = keyof import("chart.js").ChartTypeRegistry>(chartId: string, chartType: TType) => import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data> & import("@vue/composition-api").Data, {}, {}, {
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
            type: import("@vue/composition-api").PropType<import("./components").StyleValue>;
        };
        plugins: {
            type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
            default: () => never[];
        };
        data: {
            type: import("@vue/composition-api").PropType<import("chart.js").ChartData<TType, import("chart.js/types/utils").DistributiveArray<import("chart.js").ChartTypeRegistry[TType]["defaultDataPoint"]>, unknown>>;
            required: true;
        };
        options: {
            type: import("@vue/composition-api").PropType<import("chart.js/types/utils").DeepPartial<import("chart.js").CoreChartOptions<TType> & import("chart.js").ElementChartOptions<TType> & import("chart.js").PluginChartOptions<TType> & import("chart.js").DatasetChartOptions<TType> & import("chart.js").ScaleChartOptions<TType> & import("chart.js").ChartTypeRegistry[TType]["chartOptions"]>>;
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
    }, {
        plugins: import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
        chartId: string;
        width: number;
        height: number;
        cssClasses: string;
    }, true>);
};
export default _default;
