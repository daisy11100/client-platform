<template>
  <div v-if="meta.labelPosition === 'top'"></div>
  <div>{{ meta.label }}</div>
</template>
<script setup>
const props = defineProps({
  meta: Object,
});
</script>
