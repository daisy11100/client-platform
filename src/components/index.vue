<template>
  <div class="header">header</div>
  <template class="main">
    <material @add-component="(data)=>{addComponent(data)}" :component-data="componentData"></material>
    <editor @on-drop="addComponent"></editor>
    <setting></setting>
  </template>
</template>

<script setup>
import material from "./material.vue";
import editor from "./Editor.vue";
import setting from "./setting.vue";
import initStore from "../projectStore";
import { setPorjectStore,updatePageById ,readonlyStore} from "../projectStore";
import { defaultProjectData } from "../config/pageConfig";
import useComponent from './hooks/useComponent';

const {addComponent,loadComponent,componentData}=useComponent(readonlyStore,updatePageById)

const initNewProject = () => {
  const initData = JSON.parse(JSON.stringify(defaultProjectData));
  setPorjectStore(initData);
};

initStore();
initNewProject();
loadComponent(); //加载所有组件
</script>

<style scoped lang="scss">
.header {
  width: 100vw;
  height: 50px;
  background-color: #fff;
  margin-bottom: 10px;
}
.main {
  width: 100vw;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
}
</style>
