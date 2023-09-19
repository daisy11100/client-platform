import { onMounted } from "vue";
import createInteract from "./useCreateInteract";

const useDropZone=(editorContainerRef,viewportRef,emits)=>{
  let dropZone=null;
  let dropTarget='.drag-block';

  const ondragenter=()=>{
    console.log('enter')
    // dragBlockFlagRef.value=true;
  }

  const ondragleave=()=>{
    // dragBlockFlagRef.value=false;
  }

  const ondrop=(event)=>{
    // dragBlockFlagRef.value=false;
    const currentTarget=event.currentTarget; // 拖入的目标范围
    const relatedTarget=event.relatedTarget; // 被拖拽元素

    const formatData=JSON.parse(relatedTarget.getAttribute('component-data'));
  
    const currentTargetRect=currentTarget.getBoundingClientRect();
    const relatedTargetRect=relatedTarget.getBoundingClientRect();
    const rect=editorContainerRef.value.getBoundingClientRect();
    const viewportRect=viewportRef.value.getBoundingClientRect();
    const offsetX=rect.left-viewportRect.left;
    const offsetY=rect.top-viewportRect.top;
    const x=Math.floor(relatedTargetRect.x-currentTargetRect.x+offsetX);
    const y=Math.floor(relatedTargetRect.y-currentTargetRect.y+offsetY);
    !formatData.defaultValue.style && (formatData.defaultValue.style = {});
    !formatData.defaultValue.style.rect && (formatData.defaultValue.style.rect={});
    formatData.defaultValue.style.rect.x=`${x}px`;
    formatData.defaultValue.style.rect.y=`${y}px`;
    emits('on-drop',formatData);
  }


  const dropZoneOpts={
    accept:dropTarget,
    overlap:0.5,
    ondragenter,
    ondragleave,
    ondrop
  }

  const unsetDropZone=()=>{
    dropZone&&dropZone.unset();
    dropZone=null;
  }

  const createDropZone=()=>{
    unsetDropZone();
    dropZone=createInteract('dropzone',editorContainerRef.value,dropZoneOpts);
  }

  onMounted(()=>{
    createDropZone();
  })

  return {createDropZone}
}

export default useDropZone;