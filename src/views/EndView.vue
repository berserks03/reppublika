<template>
  <EndPage :data="jsonData"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import json from '@/assignment/survey.json';
import EndPage from '@/components/EndPage.vue';

export default defineComponent({
  name: 'EndView',
  components: {
    EndPage,
  },
  data() {
    return {
      jsonData: json.data,
    };
  },
});
</script>
