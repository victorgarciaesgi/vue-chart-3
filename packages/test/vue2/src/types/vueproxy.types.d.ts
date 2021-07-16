import { ComponentRenderProxy, ExtractDefaultPropTypes, ExtractPropTypes } from '@vue/composition-api';
import { ComputedOptions, CSSProperties, MethodOptions, ShallowUnwrapRef } from '@vue/runtime-dom';
import { ComponentOptions, VueConstructor } from 'vue';
import { DefaultComputed, DefaultData, DefaultMethods } from 'vue/types/options';
export declare type VueProxy<PropsOptions, RawBindings, Data = DefaultData<Vue>, Computed extends ComputedOptions = DefaultComputed, Methods extends MethodOptions = DefaultMethods<Vue>> = ComponentOptions<Vue, ShallowUnwrapRef<RawBindings> & Data, Methods, Computed, PropsOptions, ExtractPropTypes<PropsOptions>> & VueConstructorProxy<PropsOptions, RawBindings, Data, Computed, Methods>;
declare type VueConstructorProxy<PropsOptions, RawBindings, Data, Computed extends ComputedOptions, Methods extends MethodOptions> = VueConstructor & {
    new (...args: any[]): ComponentRenderProxy<ExtractPropTypes<PropsOptions>, ShallowUnwrapRef<RawBindings>, Data, Computed, Methods, ExtractPropTypes<PropsOptions>, ExtractDefaultPropTypes<PropsOptions>, true>;
};
export declare type VueInputEvent = Event & {
    target: HTMLInputElement;
};
export declare type StyleValue = string | CSSProperties | Array<StyleValue>;
export declare type VueHtmlClassParams = string | Record<string, boolean> | Array<string | Record<string, boolean>>;
export {};
