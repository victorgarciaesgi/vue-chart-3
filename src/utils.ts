import { ComponentPropsOptions, ExtractPropTypes } from '@vue/runtime-core';
import * as CSS from 'csstype';
import { ComputedRef, DefineComponent, Ref } from 'vue';

export type StyleValue = string | CSS.Properties | Array<StyleValue>;

export type MaybeRef<T> = T | Ref<T> | ComputedRef<T>;

export type ExtractComponentProps<T> = T extends DefineComponent<infer TProps>
  ? TProps extends ComponentPropsOptions
    ? ExtractPropTypes<TProps>
    : TProps
  : never;

export type ExtractComponentData<T> = T extends DefineComponent<any, infer TData> ? TData : never;
