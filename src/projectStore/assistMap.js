import projectStore from "./projectStore";


const pageMap=new Map();
const componentsMap=new Map();

const groupToMap=(component)=>{
  component.children.forEach((com)=>{
    if(com.type==='group'){
      groupToMap(com)
    }else{
      componentsMap.set(com.id,com)
    }
  })
}

const handleData=(pageData)=>{
  pageData.forEach((page)=>{
    pageMap.set(page.id,page);
    page.components.forEach((com)=>{
      if(com.type==='group'){
        groupToMap(com)
      }else{
        componentsMap.set(com.id,com)
      }
    })
  })
}

export const initMap=()=>{
  pageMap.clear();
  componentsMap.clear();
  handleData(projectStore.siteData.pageData||[]);
  handleData(projectStore.siteData.fixedData||[]);
}

export const  testPageMap=()=>{
  console.log('test',pageMap.get('page1'))
}

export const updatePageById=(pageId,fn)=>{
  console.log(1111,pageMap.get('page1'))
  const pageData=pageMap.get(pageId);
  if(!pageId||!pageData){
    throw new Error('id is invalid')
  } 

  fn(pageData)
  console.log(2222,pageMap.get('page1'))
  pageData.components.forEach((com)=>{
    if(com.type==='group'){
      groupToMap(com)
    }else{
      componentsMap.set(com.name,com)
    }
  })
}


export const updateCompnentById=(comId,fn)=>{
  const componentData=componentsMap.get(comId);
  fn(componentData);
}
