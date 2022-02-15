import { CSSProperties } from '@vue/runtime-dom';

export type VueInputEvent = Event & { target: HTMLInputElement };

export type StyleValue = string | CSSProperties | Array<StyleValue>;
export type VueHtmlClassParams =
  | string
  | Record<string, boolean>
  | Array<string | Record<string, boolean>>;
