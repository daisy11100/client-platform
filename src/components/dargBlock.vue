<template>
  <div
    ref="dragBlockWrapRef"
    :style="WrapStyleRef"
    @mousedown="mouseDown"
    @mouseup="mouseUp"
  >
    <slot name="content"></slot>
    <div
      ref="dragBlockRef"
      :style="dragStyleRef"
      class="drag-block"
      :component-data="JSON.stringify(componentItem)"
    >
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script setup>
import useDrag from "./hooks/useDrag";
import { onMounted, ref, toRefs } from "vue";

const dragBlockWrapRef = ref(null);
const dragBlockRef = ref(null);
const emit = defineEmits(["add-component"]);
const props = defineProps({
  componentData: Object,
  componentItem: Object,
});

const { componentData: componentDataRef } = toRefs(props);

const { WrapStyleRef, dragStyleRef, mouseDown, mouseUp, initInteract } =
  useDrag(dragBlockWrapRef, componentDataRef, emit);

onMounted(() => {
  initInteract(dragBlockRef.value);
});
</script>

<style scoped lang="scss">
.drag-block {
  z-index: 33;
  position: absolute;
}
</style>
