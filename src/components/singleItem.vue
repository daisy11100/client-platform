<template>
  <div class="singleItem" :class="getClassName(metaData)">
    <div class="singleItem-left">
      {{ metaData.label }}
    </div>
    <div class="singleItem-right">
      <component :is="list[metaData.type]" :meta-data="metaData"></component>
    </div>
  </div>
</template>
<script setup>
import { reactive, shallowRef } from "vue";
import input from "./basic/input.vue";
import select from "./basic/select.vue";
import Rect from "./style/Rect.vue";
import HoverLabel from "./hoverLabel.vue";
const props = defineProps({
  metaData: Object,
});
const list = reactive({
  input: shallowRef(input),
  select: shallowRef(select),
  Rect: shallowRef(Rect),
});

const getClassName = (meta) => {
  return meta.labelPostion === "top" ? "singleItem-column" : "singleItem-row";
};
</script>
<style lang="scss">
.singleItem {
  margin-bottom: 10px;
  &-left {
    font-size: 14px;
    margin-right: 10px;
    text-align: left;
  }
  &-right {
    width: 70%;
  }
  &-column {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  &-row {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
