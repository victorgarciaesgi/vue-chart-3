<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';

export default defineComponent({
  name: 'Test',
  props: {
    test: { type: String },
  },
  setup(props) {
    const salut = ref('lol');
    return { salut };
  },
});
</script>
