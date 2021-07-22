import type { ComponentOptions, ShallowUnwrapRef, ComponentPublicInstance } from '@vue/runtime-core';
import * as CSS from 'csstype';
import type { ComputedOptions, ComputedRef, MethodOptions, Ref } from 'vue-demi';
export declare type StyleValue = string | CSS.Properties | Array<StyleValue>;
export declare type MaybeRef<T> = T | Ref<T> | ComputedRef<T>;
declare type ComponentPublicInstanceConstructor<T extends ComponentPublicInstance<Props, RawBindings, D, C, M> = ComponentPublicInstance<any>, Props = any, RawBindings = any, D = any, C extends ComputedOptions = ComputedOptions, M extends MethodOptions = MethodOptions> = {
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
    new (...args: any[]): T;
};
export declare type ExtractComponentProps<T> = T extends ComponentPublicInstanceConstructor<ComponentPublicInstance<infer TProps>> ? TProps : T extends ComponentOptions<any, any, any, any, any, infer TProps2> ? T : never;
export declare type ExtractComponentData<T> = T extends ComponentPublicInstanceConstructor<infer TI> ? ShallowUnwrapRef<TI> : T extends ComponentOptions<any, infer TData2, any, any, any, any> ? TData2 extends ShallowUnwrapRef<infer K> ? K & Vue : TData2 & Vue : never;
export {};
