<template>
  <div class="container">
    <h2 v-html="data.completed_heading"/>
    <p v-html="data.completed_text"/>
    <a
      :href="data.completed_actions[0].url"
      v-html="data.completed_actions[0].label"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Data } from '@/types';

export default defineComponent({
  name: 'EndPage',
  props: {
    data: Object as PropType<Data>,
  },
});
</script>

<style scoped lang="scss">
.container {
  text-align: center;
}
</style>
