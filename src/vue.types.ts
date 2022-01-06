import { DefaultComputed, DefaultData, DefaultMethods } from 'vue/types/options';
import Vue, { VueConstructor } from 'vue';
import {
  ComponentRenderProxy,
  ComputedOptions,
  ExtractDefaultPropTypes,
  ExtractPropTypes,
  MethodOptions,
  ShallowUnwrapRef,
} from '@vue/composition-api';
import { ComponentOptions } from 'vue/types/umd';
import CSS from 'csstype';

interface CSSProperties
  extends CSS.Properties<string | number>,
    CSS.PropertiesHyphen<string | number> {
}

export type VueInputEvent = Event & { target: HTMLInputElement };

export type StyleValue = string | CSSProperties | Array<StyleValue>;
export type VueHtmlClassParams =
  | string
  | Record<string, boolean>
  | Array<string | Record<string, boolean>>;

type ObjectEmitsOptions = Record<string, ((...args: any[]) => any) | null>;

type EmitsOptions = ObjectEmitsOptions | string[];

declare type EmitsToProps<T extends EmitsOptions> = T extends string[]
  ? {
      [K in string & `on${Capitalize<T[number]>}`]?: (...args: any[]) => any;
    }
  : T extends ObjectEmitsOptions
  ? {
      [K in string & `on${Capitalize<string & keyof T>}`]?: K extends `on${infer C}`
        ? T[Uncapitalize<C>] extends null
          ? (...args: any[]) => any
          : (...args: T[Uncapitalize<C>] extends (...args: infer P) => any ? P : never) => any
        : never;
    }
  : {};

export type VueConstructorProxy<
  PropsOptions,
  RawBindings,
  Data,
  Computed extends ComputedOptions,
  Methods extends MethodOptions,
  Mixin = {},
  Extends = {},
  Emits extends EmitsOptions = {},
  Props = ExtractPropTypes<PropsOptions> & ({} extends Emits ? {} : EmitsToProps<Emits>)
> = Omit<VueConstructor, never> & {
  new (...args: any[]): ComponentRenderProxy<
    Props,
    ShallowUnwrapRef<RawBindings>,
    Data,
    Computed,
    Methods,
    Mixin,
    Extends,
    Emits,
    Props,
    ExtractDefaultPropTypes<PropsOptions>,
    true
  >;
};

export type VueProxy<
  PropsOptions,
  RawBindings,
  Data = DefaultData<Vue>,
  Computed extends ComputedOptions = DefaultComputed,
  Methods extends MethodOptions = DefaultMethods<Vue>,
  Mixin = {},
  Extends = {},
  Emits extends EmitsOptions = {}
> = ComponentOptions<
  Vue,
  ShallowUnwrapRef<RawBindings> & Data,
  Methods,
  Computed,
  PropsOptions,
  ExtractPropTypes<PropsOptions>
> &
  VueConstructorProxy<PropsOptions, RawBindings, Data, Computed, Methods, Mixin, Extends, Emits>;
