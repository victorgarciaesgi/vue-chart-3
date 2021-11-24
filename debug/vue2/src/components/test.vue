<template>
  <div>Ok</div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from '@vue/composition-api';

export default defineComponent({
  name: '__Page',
  props: {
    ok: String,
  },
  setup(props) {
    return {};
  },
});
</script>
