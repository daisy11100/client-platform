import { reactive } from "vue";
import { defaultComponentData } from "../../config/index"
import { merge } from "lodash-es";
import { componentsList } from "../../data/mockMaterialData";
// 加载所有组件、创建所有组件数据map、添加组件数据
const useComponent=(projectStore,updatePageById)=>{
  const componentData=reactive({})

  const loadComponent=()=>{
    componentsList.forEach((item)=>{
      componentData[item.name]={
        type:item.name,
        meta:item.meta,
        defaultValue:item.data,
        avatar:item.avatar,
        title:item.title,
        name:item.name
      }
    })
  }

  const addComponent=(originData)=>{
    const data=JSON.parse(JSON.stringify(originData));
    const newData=merge(
      defaultComponentData,
      data,
    )
    newData.type=data.type;
    const activePageId=projectStore.siteOptions.activeFixed?projectStore.siteOptions.activeFixed:projectStore.siteOptions.activePage; 

    updatePageById(activePageId,(pageData)=>{
      if(pageData.options.basic.layoutType==='static'){
        newData.defaultValue.style.rect.w='375';
        newData.defaultValue.style.rect.h=newData.defaultValue.style.rect.w / ratio
      }
      pageData.components.push(newData);
    })
  }

  return {addComponent,loadComponent,componentData}
}

export default useComponent