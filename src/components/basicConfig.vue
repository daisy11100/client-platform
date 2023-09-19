<template>
  <el-form>
    <template v-for="(item, index) in meta" :key="index">
      <component :is="getMetaType(item)" :meta-data="item"></component>
    </template>
  </el-form>
</template>
<script setup>
import SingleItem from "./singleItem.vue";
const props = defineProps({
  meta: Object,
});
console.log("meta", props.meta);

const getMetaType = (meta) => {
  let type;
  switch (meta.type) {
    case "ArrayItem":
      type = ArrayItem;
      break;
    case "ObjectItem":
      type = ObjectItem;
      break;
    default:
      type = SingleItem;
      break;
  }
  return type;
};
</script>
