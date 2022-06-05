<template>
  <div class="container">
    <span v-if="question.is_required">*</span>
    <h2 :title="question.code" v-html="question.name"/>
    <p v-if="question.public_description" v-html="question.public_description"/>
    <SelectComponent
      v-if="question.type === 'dropdown'"
      :choices="question.choices"
    />
    <RadioComponent
      v-if="question.type === 'radiogroup'"
      :choices="question.choices"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Question } from '@/types';
import SelectComponent from '@/components/UI/Select.vue';
import RadioComponent from '@/components/UI/Radio.vue';

export default defineComponent({
  name: 'QuestionComponent',
  components: {
    SelectComponent,
    RadioComponent,
  },
  props: {
    question: Object as PropType<Question>,
  },
});
</script>

<style scoped lang="scss">
.container {
  margin-bottom: 30px;
}

span {
  color: red;
  margin-right: 5px;
}

h2 {
  display: inline;
  font-size: 20px;
}

p {
  margin: 10px 0 0;
}
</style>
