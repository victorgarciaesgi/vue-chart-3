import { ComponentRenderProxy, ExtractDefaultPropTypes, ExtractPropTypes } from 'vue-demi';
import { ComputedOptions, CSSProperties, MethodOptions, ShallowUnwrapRef } from '@vue/runtime-dom';
import Vue, { ComponentOptions, VueConstructor } from 'vue';

type DefaultData<V> = object | ((this: V) => object);
type DefaultProps = Record<string, any>;
type DefaultMethods<V> = { [key: string]: (this: V, ...args: any[]) => any };
type DefaultComputed = { [key: string]: any };

export type VueProxy<
  PropsOptions,
  RawBindings,
  Data = DefaultData<Vue>,
  Computed extends ComputedOptions = DefaultComputed,
  Methods extends MethodOptions = DefaultMethods<Vue>
> = ComponentOptions<
  Vue,
  ShallowUnwrapRef<RawBindings> & Data,
  Methods,
  Computed,
  PropsOptions,
  ExtractPropTypes<PropsOptions>
> &
  VueConstructorProxy<PropsOptions, RawBindings, Data, Computed, Methods>;

type VueConstructorProxy<
  PropsOptions,
  RawBindings,
  Data,
  Computed extends ComputedOptions,
  Methods extends MethodOptions
> = VueConstructor & {
  new (...args: any[]): ComponentRenderProxy<
    ExtractPropTypes<PropsOptions>,
    ShallowUnwrapRef<RawBindings>,
    Data,
    Computed,
    Methods,
    ExtractPropTypes<PropsOptions>,
    ExtractDefaultPropTypes<PropsOptions>,
    true
  >;
};

export type VueInputEvent = Event & { target: HTMLInputElement };

export type StyleValue = string | CSSProperties | Array<StyleValue>;
export type VueHtmlClassParams =
  | string
  | Record<string, boolean>
  | Array<string | Record<string, boolean>>;
