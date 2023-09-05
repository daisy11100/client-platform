<template>
  <div class="editor">
    <div ref="editorContainerRef" class="editorContainer">
      <div ref="viewportRef"  class="viewport"></div>
      <!-- <iframe></iframe> -->
    </div>
  </div>
</template>

<script setup>
import { readonlyStore,updatePageById } from '../projectStore';
import { ref } from 'vue';
import useComponent
 from './hooks/useComponent';
import useDropZone from './hooks/useDropZone';

 const {addComponent}=useComponent(readonlyStore,updatePageById);
 const editorContainerRef=ref(null);
 const viewportRef=ref(null);
 useDropZone(editorContainerRef,viewportRef,addComponent)

</script>

<style scoped lang="scss">
.editor {
  width: 60%;
  height: 100vh;
  background-color: #fff;
}
.editorContainer{
  width: 100%;
  height: 100vh;
}
.viewport{
  width: 100%;
  height: 100vh;
}
</style>
