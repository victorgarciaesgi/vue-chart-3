import { ComponentPropsOptions } from '@vue/runtime-core';
import * as CSS from 'csstype';
import camelCase from 'lodash/camelCase';
import startCase from 'lodash/startCase';

import { ComputedRef, DefineComponent, Prop, Ref } from 'vue';

export const pascalCase = (str: string) => startCase(camelCase(str)).replace(/ /g, '');

export type StyleValue = string | CSS.Properties | Array<StyleValue>;

export type MaybeRef<T> = T | Ref<T> | ComputedRef<T>;

export type ExtractComponentProps<T> = T extends DefineComponent<infer TProps>
  ? TProps extends ComponentPropsOptions
    ? ExtractPropTypes<TProps>
    : TProps
  : never;

export type ExtractComponentData<T> = T extends DefineComponent<any, infer TData> ? TData : never;

type RequiredKeys<T> = {
  [K in keyof T]: T[K] extends
    | {
        required: true;
      }
    | {
        default: any;
      }
    | BooleanConstructor
    | {
        type: BooleanConstructor;
      }
    ? T[K] extends {
        default: undefined | (() => undefined);
      }
      ? never
      : K
    : never;
}[keyof T];

type InferPropType<T> = [T] extends [null]
  ? any
  : [T] extends [
      {
        type: null | true;
      }
    ]
  ? any
  : [T] extends [
      | ObjectConstructor
      | {
          type: ObjectConstructor;
        }
    ]
  ? Record<string, any>
  : [T] extends [
      | BooleanConstructor
      | {
          type: BooleanConstructor;
        }
    ]
  ? boolean
  : [T] extends [
      | DateConstructor
      | {
          type: DateConstructor;
        }
    ]
  ? Date
  : [T] extends [
      | (infer U)[]
      | {
          type: (infer U)[];
        }
    ]
  ? U extends DateConstructor
    ? Date | InferPropType<U>
    : InferPropType<U>
  : [T] extends [Prop<infer V, infer D>]
  ? unknown extends V
    ? D
    : V
  : T;

type OptionalKeys<T> = Exclude<keyof T, RequiredKeys<T>>;

export type ExtractPropTypes<O> = O extends object
  ? {
      [K in RequiredKeys<O>]: InferPropType<O[K]>;
    } & {
      [K in OptionalKeys<O>]?: InferPropType<O[K]>;
    }
  : {
      [K in string]: any;
    };

export default () => {};
