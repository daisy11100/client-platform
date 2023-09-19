<template>
  <el-select>
    <el-option
      v-for="item in metaData.options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
    </el-option>
  </el-select>
</template>
<script setup>
console.log(11111);
const props = defineProps({
  metaData: Object,
});
</script>
