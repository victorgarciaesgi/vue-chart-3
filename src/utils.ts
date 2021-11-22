import { ComponentOptions, ShallowUnwrapRef, ComponentPublicInstance } from '@vue/runtime-core';
import * as CSS from 'csstype';
import {
  ComputedOptions,
  ComputedRef,
  MethodOptions,
  Ref,
  ExtractPropTypes,
} from '@vue/composition-api';
import { ComponentData } from './components';
import { VueProxy } from './vue.types';

export type StyleValue = string | CSS.Properties | Array<StyleValue>;

export type MaybeRef<T> = T | Ref<T> | ComputedRef<T>;

export type ExtractComponentProps<T> = T extends VueProxy<
  infer TProps,
  any,
  any,
  any,
  any,
  any,
  any,
  any
>
  ? ExtractPropTypes<TProps>
  : never;

export type ExtractComponentData<T> = T extends VueProxy<
  any,
  infer TData,
  any,
  any,
  any,
  any,
  any,
  any
>
  ? TData
  : never;
