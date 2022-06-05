<template>
  <label for="select">
    <select id="select">
      <option />
      <option
        v-for="(choice, index) in choices"
        :key="index"
      >
        {{Object.values(choice)[0]}}
      </option>
    </select>
  </label>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Choice } from '@/types';

export default defineComponent({
  name: 'SelectComponent',
  props: {
    choices: Object as PropType<Choice[]>,
  },
});
</script>

<style scoped lang="scss">
label {
  display: block;
  margin-top: 10px;
}

select {
  width: 100%;
  padding: 5px 15px 5px 5px;
  border-color: lightgray;
  appearance: none;
  background-image: url("/src/resources/arrow.svg");
  background-repeat: no-repeat;
  background-position: calc(100% - 3px);
  background-size: 10px;
}
</style>
