<template>
  <div class="container">
    <label
      :for="Object.values(choice)[0]"
      v-for="(choice, index) in choices"
      :key="index"
    >
      <input
        type="radio"
        :id="Object.values(choice)[0]"
        v-model="radio"
        :value="Object.keys(choice)[0]"
      >
      {{Object.values(choice)[0]}}
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Choice } from '@/types';

export default defineComponent({
  name: 'RadioComponent',
  props: {
    choices: Object as PropType<Choice[]>,
  },
  data() {
    return {
      radio: '',
    };
  },
});
</script>

<style scoped lang="scss">
.container {
  margin-top: 10px;
}
</style>
