<template>
  <div class="rect">
    <div v-for="(item, index) in coordinateSystem" :key="index">
      <div class="rect-item">
        <div>{{ item.key }}:</div>
        <div class="rect-right">
          <el-input :model="item.value"></el-input>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, watch, ref } from "vue";

const props = defineProps({
  metaData: Object,
  modelValue: Object,
});

const rect = reactive({
  x: 0,
  y: 0,
  w: 0,
  h: 0,
  a: 0,
});

const coordinateSystem = ref([
  {
    key: "x",
    value: 0,
  },
  {
    key: "y",
    value: 0,
  },
  {
    key: "w",
    value: 0,
  },
  {
    key: "h",
    value: 0,
  },
]);
// watch(
//   () => props.modelValue,
//   (model) => {
//     (rect.x = model.x ? model.x : 0),
//       (rect.y = model.y ? model.y : 0),
//       (rect.w = model.w ? model.w : 0),
//       (rect.h = model.h ? model.h : 0),
//       (rect.a = model.a === undefined ? 1 : model.a);
//     coordinateSystem.value = [
//       {
//         key: "x",
//         value: rect.x,
//       },
//       {
//         key: "y",
//         value: rect.y,
//       },
//       {
//         key: "w",
//         value: rect.w,
//       },
//       {
//         key: "h",
//         value: rect.h,
//       },
//     ];
//   },
//   {
//     immediate: true,
//     deep: true,
//   }
// );
</script>
<style lang="scss">
.rect {
  display: flex;
  &-right {
    width: 70%;
  }
  &-item {
    display: flex;
  }
}
</style>
