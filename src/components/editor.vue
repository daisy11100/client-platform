<template>
  <div class="editor">
    <viewport 
      v-for="(page,index) in pageData" 
      :key="index" 
      :page-data="page"
      :on-drop="(data)=>{$emit('on-drop',data)}"
    >
    </viewport>
  </div>
</template>

<script setup>
import viewport from './viewport.vue';

const props=defineProps({
  pageData:Array
})



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
