import {computed, ref,watch} from 'vue';
import { componentsMap } from '../../projectStore/assistMap';
import {recursionCo} from '../../util/tool';
import { fixedMeta,pageMeta,defaultComponentMeta,smartGroupMeta } from '../../config';

const useEditor=(projectStore,componentData,updateCompnentById,updatePageById,focusPageDataRef,focusFixedDataRef)=>{
  const designEditorDataRef=ref({});
  watch([()=>projectStore,()=>componentData],()=>{
    let newData={};
    if(!projectStore.siteOptions){
      return
    }
    const activePageId=projectStore.siteOptions.activeFixed ?projectStore.siteOptions.activeFixed:projectStore.siteOptions.activePage;
    const activePageData=projectStore.siteOptions.activeFixed?focusFixedDataRef.value:focusPageDataRef.value;
    if(!activePageData){
      return
    }

    let allGroupIds=activePageData.components.filter((item)=>(item.type==='group'&&projectStore.siteOptions.activeComponents.projectStore.siteOptions.activeComponents.includes(item.id))).map(item=>item.id);
    let realNums=allGroupIds.length;

    const activeComponents=projectStore.siteOptions.activeComponents;  // id
    // ??作用不理解
    recursionCo(activePageData.components,(co,groupPath)=>{
      if(projectStore.siteOptions.activeComponents.includes(co.id)){
        projectStore.siteOptions.activeComponents.includes(co.id)&&!groupPath.includes(co.id)&&realNums++;
      }
    })
    let groupMeta;
    switch(realNums){
      case 0:
        if(!activePageId){
          return 
        }
        updatePageById(activePageId,(pageData)=>{
          newData={
            type:'page',
            id:activePageId,
            defaultValue:{id:activePageId,...pageData.options,name:pageData.name},
            meta:projectStore.siteOptions.activeFixed?fixedMeta:pageMeta
          }
        },false)
        break;
      case 1:
        if(activeComponents.length){
          const id=activeComponents[0];
          updateCompnentById(id,(component)=>{
            if(component){
              newData={
                id:component,
                ...componentData[component.type],
                defaultValue:component
              }
              newData.meta={...defaultComponentMeta,...newData.meta};
              if(newData.meta.basic && allGroupIds.length && newData.meta.basic.every((item)=>item.key!=='group')){
                newData.meta.basic.unshift({
                  type: '@Button',
                  label: '拆分组',
                  key: 'group',
                  handler: 'cancelConsist'
                });
              }else if(newData.meta.basic && !allGroupIds.length && newData.meta.basic.some((item)=>item.key!=='group')){
                newData.meta.basic.unshift({
                  type: '@Button',
                  label: '拆分组',
                  key: 'group',
                  handler: 'cancelConsist'
                })
              }
            }
          },false)
        }else if(allGroupIds.length){
          groupMeta=JSON.parse(JSON.stringify(smartGroupMeta));
          groupMeta.basic[0].label='拆分组';
          groupMeta.basic[0].handler='cancelConsist';
          newData={
            meta:groupMeta,
            defaultValue:{name:'组合'}
          }
        }
        break;
      default:
        groupMeta=JSON.parse(JSON.stringify(smartGroupMeta));
        groupMeta.basic[0].label='成组';
        groupMeta.basic[0].handler='consist';
        newData={
          type:'group',
          meta:groupMeta,
          defaultValue:{name:'组合'}
        }
        break;
    }
    designEditorDataRef.value=newData;
    console.log("designEditorDataRef", newData);

  },{deep:true})

  const componentListRef=computed(()=>{
    const coList=[];
    if(Object.keys(componentData).length>0){
      ['pageData','fixedData'].forEach(item=>{
        projectStore.siteData[item].forEach(page=>{
          recursionCo(page.components,(co)=>{
            if(componentData[co.type]){
              coList.push({
                avatar:componentData[co.type].avatar,
                meta:componentData[co.type].meta,
                pageId:page.id,
                pageName:page.name,
                ...co
              })
            }
          })
        })
      })
    }
    return coList;
  })

  return {designEditorDataRef,componentListRef}
}

export default useEditor