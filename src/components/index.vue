<template>
  <div class="header">header</div>
  <template class="main">
    <material
      @add-component="
        (data) => {
          addComponent(data);
        }
      "
      :component-data="componentData"
    ></material>
    <editor
      ref="canvasRef"
      @on-drop="addComponent"
      :page-data="readonlyStore.siteData.pageData"
    ></editor>
    <setting></setting>
  </template>
</template>

<script setup>
import material from "./material.vue";
import editor from "./Editor.vue";
import setting from "./setting.vue";
import initStore from "../projectStore";
import {
  setPorjectStore,
  updatePageById,
  readonlyStore,
} from "../projectStore";
import { defaultProjectData } from "../config/pageConfig";
import useComponent from "./hooks/useComponent";
import { ref } from "vue";

const initNewProject = () => {
  const initData = JSON.parse(JSON.stringify(defaultProjectData));
  setPorjectStore(initData);
};

initStore(); // 初始化本地projectStore projectStore:{}
initNewProject(); // 初始化一个新的project  projectStore:{page:{}}
const { addComponent, loadComponent, componentData } = useComponent(
  readonlyStore,
  updatePageById
);
loadComponent(); //加载所有组件
const canvasRef = ref(null);
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
