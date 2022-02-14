import type { ChartType } from 'chart.js';
import type { ComponentPublicInstance, ExtractPropTypes, Ref } from 'vue';
import type { ChartPropsOptions, ComponentData } from '../core';

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
};
