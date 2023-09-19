<template>
  <div class="setting">
    <!-- <page-meta
      v-if="componentData.defaultValue"
      :component-list="componentList"
      :component-data="componentValRef"
      :component-id="componentDefaultIdRef"
      @updateDefaultValue="updateDefaultValue"
    ></page-meta> -->
    <page-meta
      :component-list="componentList"
      :component-data="componentValRef"
      :component-id="componentDefaultIdRef"
      @updateDefaultValue="updateDefaultValue"
    ></page-meta>
  </div>
</template>

<script setup>
import { computed, inject } from "vue";
import pageMeta from "./pageMeta.vue";
import { set, get } from "lodash-es";
import stringToPath from "lodash-es/_stringToPath";
const props = defineProps({
  siteOption: Object,
  componentData: Object,
  componentList: Array,
});

const updatePageById = inject("updatePageById");
const updateCompnentById = inject("updateCompnentById");

const componentValRef = computed(() =>
  JSON.parse(JSON.stringify(props.componentData))
);

const componentDefaultIdRef = computed(
  () =>
    props.componentData.defaultValue?.id &&
    JSON.parse(JSON.stringify(props.componentData.defaultValue.id))
);

const deleteDefaultValue = (path) => {
  const removePath = stringToPath(path);
  const basicPath = removePath.slice(0, -1);
  const index = removePath.slice(-1);
  const id = props.componentData.defaultValue.id;
  if (props.componentData.type == "page") {
    updatePageById(id, (pageData) => {
      get(pageData.options, basicPath).slice(index, 1);
    });
  } else {
    updateCompnentById(id, (componentData) => {
      get(componentData.options, basic).slice(index, 1);
    });
  }
};

const updateDefaultValue = ({ path, value, meta, operateType }) => {
  if (!!operateType && operateType === "remove") {
    deleteDefaultValue(path);
    return;
  }

  const id = props.componentData.defaultValue.id;
  const newValue = JSON.parse(JSON.stringify(value));
  if (props.componentData.type === "page") {
    const pathName = path.indexOf("['name']") !== -1 ? ["name"] : path;
    updatePageById(id, (pageData) => {
      set(pageData, pathName, newValue);
    });
  } else if (path.indexOf("['name']") !== -1) {
    const pathName = ["name"];
    updateCompnentById(id, (componentData) => {
      set(componentData, pathName, newValue);
    });
  } else {
    if (path && path.indexOf("['group']") !== -1) {
      if (value == "consist") {
        // consistComponent()
      } else {
      }
    }
  }
};
</script>

<style scoped lang="scss">
.setting {
  width: 18%;
  height: 100vh;
  background-color: #fff;
  padding: 10px;
}
</style>
