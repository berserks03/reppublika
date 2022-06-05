<template>
  <PageComponent :page="pageTwo" />
  <div class="container">
    <ButtonElement
      :disabled=false
      :text="jsonData.page_prev_text"
      direction="left"
    />
    <ButtonElement
      :disabled=false
      :text="jsonData.complete_text"
      direction="right"
      route="/end"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageComponent from '@/components/UI/Page.vue'; // @ is an alias to /src
import json from '@/assignment/survey.json';
import ButtonElement from '@/components/UI/Button.vue';

export default defineComponent({
  name: 'NextView',
  components: {
    ButtonElement,
    PageComponent,
  },
  data() {
    return {
      pageTwo: json.data.pages[1],
      jsonData: json.data,
    };
  },
});
</script>

<style scoped lang="scss">
.container {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
</style>
