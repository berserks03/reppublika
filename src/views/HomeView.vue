<template>
  <PageComponent :page="pageOne" />
  <div class="container">
    <ButtonElement
      :disabled=true
      :text="jsonData.page_prev_text"
      direction="left"
    />
    <ButtonElement
      :disabled=false
      :text="jsonData.page_next_text"
      direction="right"
      route="/next"
    />
  </div>
  <pre>{{ countAm }}</pre>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageComponent from '@/components/UI/Page.vue'; // @ is an alias to /src
import json from '@/assignment/survey.json';
import ButtonElement from '@/components/UI/Button.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    ButtonElement,
    PageComponent,
  },
  data() {
    return {
      pageOne: json.data.pages[0],
      jsonData: json.data,
    };
  },
  // computed: {
  //   countAm() {
  //     console.log(document.querySelectorAll('select'));
  //     return document.querySelectorAll('option:checked').length;
  //   },
  // },
});
</script>

<style scoped lang="scss">
.container {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
</style>
