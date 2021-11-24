import Vue, { VNode } from 'vue';
import { ComponentRenderProxy } from '@vue/composition-api';

declare global {
  namespace JSX {
    export interface Element extends VNode {}
    export interface ElementClass extends ComponentRenderProxy {}
    export interface ElementAttributesProperty {
      $props: any; // specify the property name to use
    }
    export interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}
