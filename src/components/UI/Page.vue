<template>
  <img src="../../assignment/project_logo.svg"  alt="Logo"/>
  <div class="container-loading">
    <div class="loading-bar">
      <div
        class="percentage"
        :style="{'width': percentage + '%'}"
      >{{percentage + '%'}}</div>
    </div>
  </div>
  <h1 v-if="page.title" v-html="page.title" :title="page.name"/>
  <p v-if="page.subtitle" v-html="page.subtitle"/>
  <QuestionComponent
    v-for="(question, index) in page.questions"
    :key="index"
    :question="question"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Page } from '@/types';
import QuestionComponent from '@/components/UI/Question.vue';

export default defineComponent({
  name: 'PageComponent',
  components: { QuestionComponent },
  props: {
    page: Object as PropType<Page>,
  },
  data() {
    return {
      percentage: 92,
    };
  },
});
</script>

<style scoped lang="scss">
img {
  width: 160px;
  margin-bottom: 30px;
}

h1{
  margin-top: 0;
}

.container-loading {
  display: flex;
  justify-content: right;
}

.loading-bar {
  position: relative;
  width: 400px;
  height: 25px;
  overflow: hidden;
  border: 1px solid black;
  text-align: center;
  line-height: 25px;
  margin-bottom: 10px;
}

.percentage {
  position: absolute;
  display: block;
  height: 100%;
  background-color: red;
  background-size: 30px 30px;
}
</style>
