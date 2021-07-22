import type {
  ComponentOptions,
  ShallowUnwrapRef,
  ComponentPublicInstance,
} from '@vue/runtime-core';
import type { Chart, ChartData, ChartOptions, ChartType } from 'chart.js';
import * as CSS from 'csstype';
import type { ComputedOptions, ComputedRef, MethodOptions, PropType, Ref } from 'vue-demi';

export type StyleValue = string | CSS.Properties | Array<StyleValue>;

export type MaybeRef<T> = T | Ref<T> | ComputedRef<T>;

export interface ChartPropsOptions<TType extends ChartType> {
  options: { type: PropType<ChartOptions<TType>>; required: false };
  chartId: { default: string; type: String };
  width: { default: 400; type: Number };
  height: { default: 400; type: Number };
  cssClasses: { type: String; default: '' };
  styles: { type: PropType<StyleValue> };
  plugins: { type: PropType<Plugin[]>; default: () => [] };
  chartData: { type: PropType<ChartData<TType>>; required: true };
  onLabelsUpdate: { type: PropType<() => void> };
  onChartUpdate: { type: PropType<(chartInstance: Chart<TType>) => void> };
  onChartDestroy: { type: PropType<() => void> };
  onChartRender: { type: PropType<(chartInstance: Chart<TType>) => void> };
}

type ComponentPublicInstanceConstructor<
  T extends ComponentPublicInstance<Props, RawBindings, D, C, M> = ComponentPublicInstance<any>,
  Props = any,
  RawBindings = any,
  D = any,
  C extends ComputedOptions = ComputedOptions,
  M extends MethodOptions = MethodOptions
> = {
  __isFragment?: never;
  __isTeleport?: never;
  __isSuspense?: never;
  new (...args: any[]): T;
};

export type ExtractComponentProps<T> = T extends ComponentPublicInstanceConstructor<
  ComponentPublicInstance<infer TProps>
>
  ? TProps
  : T extends ComponentOptions<any, any, any, any, any, infer TProps2>
  ? T
  : never;

export type ExtractComponentData<T> = T extends ComponentPublicInstanceConstructor<infer TI>
  ? ShallowUnwrapRef<TI>
  : T extends ComponentOptions<any, infer TData2, any, any, any, any>
  ? TData2 extends ShallowUnwrapRef<infer K>
    ? K & Vue
    : TData2 & Vue
  : never;
