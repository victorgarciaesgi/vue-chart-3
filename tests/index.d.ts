declare module '*.vue' {
  import { defineComponent } from '@vue/composition-api';
  const component: ReturnType<typeof defineComponent>;
  export default component;
}
