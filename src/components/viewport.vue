<template>
  <div ref="editorContainerRef" class="editorContainer">
    <div class="viewportBox">
      <div ref="viewportRef" class="viewport">
        <component-warp
          v-for="(item, index) in pageDataCopyRef.components"
          :key="index"
          :component="item"
        ></component-warp>
      </div>
    </div>
    <iframe
      ref="renderRef"
      width="100%"
      frameborder="0"
      height="100vh"
      :src="_iframeSrc"
      @load="sendDataToRender"
    ></iframe>
  </div>
</template>
<script setup>
import { ref, watch, toRefs } from "vue";
import useDropZone from "./hooks/useDropZone";
import componentWarp from "./componentWarp.vue";
import useSendIframeData from "./hooks/useSendIframeData";

const emits = defineEmits(["on-drop"]);
const props = defineProps({
  pageData: Object,
});
const editorContainerRef = ref(null);
const viewportRef = ref(null);
const pageDataCopyRef = ref({});
const renderRef = ref(null);
let _iframeSrc;

watch(
  () => props.pageData,
  (val) => {
    pageDataCopyRef.value = JSON.parse(JSON.stringify(val));
  },
  { deep: true, immediate: true }
);

useDropZone(editorContainerRef, viewportRef, emits);

const { pageData: pageDataRef } = toRefs(props);
console.log("🚀 ~ file: viewport.vue:49 ~ pageDataRef:", pageDataRef.value);
const { sendDataToRender, sendComponentsUpdate } = useSendIframeData(
  renderRef,
  props,
  pageDataRef
);
</script>
