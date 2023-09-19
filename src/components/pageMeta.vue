<template>
  <div class="pageMeta">
    <el-tabs
      v-model="activeKeyRef"
      :tab-bar-style="{ padding: '0px', textAlign: 'center' }"
      tab-position="top"
    >
      <template v-for="(item, index) in Object.keys(basicSetting)" :key="index">
        <el-tab-pane :label="basicSetting[item]" :name="item">
          <!-- <template v-if="Array.isArray(componentData.meta[item])">
            <component
              :is="item"
              :key="item"
              :meta="componentData.meta[item]"
              :path="`['${item}']`"
              :forms="getFormValue(item)"
              :component-type="defaultObjRef['type']"
            ></component>
          </template> -->
          <component :is="list[item]" :meta="componentMeta[item]"></component>
        </el-tab-pane>
      </template>
    </el-tabs>
  </div>
</template>
<script setup>
import { basicSetting } from "../config/basicSetting";
import { computed, reactive, ref, shallowRef } from "vue";
import { componentMeta } from "../data/mockPageData";
import basic from "./basicConfig.vue";
import style from "./styleConfig.vue";
const props = defineProps({
  componentData: Object,
  componentList: Array,
  componentId: String,
});

const activeKeyRef = ref("basic");
const defaultObjRef = computed(() => {
  return props.componentData.defaultValue;
});

const list = reactive({
  basic: shallowRef(basic),
  style: shallowRef(style),
});

const getFormValue = (item) => {
  // if (item === "basic") {
  //   const nameValue = { name: defaultObjRef.value["name"] };
  //   defaultObjRef.value =
  //     defaultObjRef.value["basic"] &&
  //     Object.assign(defaultObjRef.value["basic"], nameValue);
  // }
  // return defaultObjRef.value[item];
};
</script>
