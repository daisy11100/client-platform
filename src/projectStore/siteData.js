import { computed } from "vue";
import projectStore from "./projectStore";


export  const focusFixedDataRef=computed(()=>{
  const activeId=projectStore.siteOptions.activeFixed;
  return projectStore.site.fixedData.find((item)=>item.id===activeId)
})

export  const focusPageDataRef=computed(()=>{
  const activeId=projectStore.siteOptions.activePage;
  console.log(projectStore)
  return projectStore.siteData.pageData.find((item)=>item.id===activeId)
})