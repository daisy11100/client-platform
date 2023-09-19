<template>
  <basicConfig :meta="newMeta"></basicConfig>
</template>
<script setup>
import { ref, watch } from "vue";
import basicConfig from "./basicConfig.vue";
import snippets from "./snippets";
const newMeta = ref("");
const props = defineProps({
  meta: Array,
});
watch(
  () => props.meta,
  () => {
    const getMeta = props.meta.map((item) => {
      return Object.assign({}, snippets[item], {
        type: item,
      });
    });
    newMeta.value = getMeta;
  },
  {
    deep: true,
    immediate: true,
  }
);
</script>
