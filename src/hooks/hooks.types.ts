import type { ChartType } from 'chart.js';
import type { ComponentPublicInstance, DefineComponent, Ref } from 'vue';
import type { ChartPropsOptions, ComponentData } from '../core';
import { ExtractPropTypes } from '../utils';

export type VueChartComponent<TType extends ChartType> = DefineComponent<
  ChartPropsOptions<TType>,
  ComponentData<TType>
>;

export interface HookOptions<TType extends ChartType, TJSX = false>
  extends ChartPropsOptions<TType> {
  ref?: TJSX extends true ? Ref<any> : string;
}

type DumbTypescript = 0;

export type ChartHookReturnType<TType extends ChartType, TJSX = false> = {
  [K in DumbTypescript as `${TType}ChartRef`]: Ref<ComponentPublicInstance<
    ChartPropsOptions<TType>,
    ComponentData<TType>
  > | null>;
} & {
  [K in DumbTypescript as `${TType}ChartProps`]: Ref<ExtractPropTypes<HookOptions<TType, TJSX>>>;
} & {
  update: () => void;
};
