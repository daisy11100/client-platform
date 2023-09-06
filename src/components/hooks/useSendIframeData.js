import { watch } from "vue";
const useSendIframeData=(renderRef,props,pageDataRef)=>{
  const sendDataToRender=()=>{
    const originData={
      type:'updateSiteData',
      pageData:pageDataRef.value,
      canvasOptions:{backgound:'transparent'}
    }
    const data=JSON.parse(JSON.stringify(originData));
    renderRef.value?.contentWindow.postMessage(data,'*');
  }

  const sendComponentsUpdate=(updateList)=>{
    const originData={
      type:'updateComponentData',
      component:updateList
    }
    const data=JSON.parse(JSON.stringify(originData));
    renderRef.value?.contentWindow.postMessage(data,'*')
  }

  watch(
    pageDataRef,
    ()=>{
      sendDataToRender();
    },
    {
      deep:true,
      immediate:true
    }
  )

  return {sendDataToRender,sendComponentsUpdate}
}
export default useSendIframeData;