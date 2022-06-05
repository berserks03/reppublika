<template>
  <button
    :class="direction"
    v-html="text"
    :disabled="disabled"
    :onClick="direction === 'left' ? () => $router.go(-1)  : () => $router.push(route)"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'ButtonElement',
  props: {
    text: String,
    direction: String as PropType<'left' | 'right'>,
    disabled: Boolean,
    route: String,
  },
});
</script>

<style scoped lang="scss">
.container {
  text-align: center;
}
button {
  background-color: red;
  color: white;
  padding: 10px 20px;
  border: none;

  &:disabled {
    background-color: lightgray;
    color: gray;
    border: 1px solid gray;
  }

  &.left {
    height: 35px;
    padding-left:25px;

    &::before {
      content:"<";
      display: inline;
      position: relative;
      right: 10px;

    }
  }

  &.right {
    height: 35px;
    padding-right:25px;

    &::after {
      content:">";
      display: inline;
      position: relative;
      left: 10px;

    }
  }
}
</style>
