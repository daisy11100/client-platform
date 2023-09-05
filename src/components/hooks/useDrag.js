import interact from "interactjs";
import {computed,reactive} from 'vue'

const useDrag=(dragBlockWrapRef,componentDataRef,emit)=>{
  const dragObj=reactive({
    top:0,
    left:0,
    draging:false,
    clientX:null,
    clientY:null
  })

  const WrapStyleRef=computed(()=>({position:dragObj.draging?'static':'relative'}));
  const dragStyleRef=computed(()=>{
    let rect={};
    if(dragBlockWrapRef.value){
      rect=dragBlockWrapRef.value.getBoundingClientRect();
    }
    return {
      top:`${dragObj.draging?dragObj.top+rect.y:0}px`,
      left:`${dragObj.draging?dragObj.left+rect.x:0}px`,
      opacity:dragObj.draging?'1':'0'
    }
  })

  const initInteract=(element)=>{
    interact(element).draggable({
      inertia:false,
      modifiers:[],
      onstart:dragStart,
      onend:dragEnd,
      onmove:drag,
    })
  }

  const mouseDown=(e)=>{
    dragObj.clientX=e.clientX;
    dragObj.clientY=e.clientY;
  }

  const mouseUp=(e)=>{
    // 点击组件时触发app-component
    if(e.clientX===dragObj.clientX&&e.clientY===dragObj.clientY){
      emit('add-component',componentDataRef.value)
    }
  }

  const dragStart=()=>{
    dragObj.draging=true;
  }

  const drag=(event)=>{
    dragObj.top += event.dy,
    dragObj.left+=event.dx
  }

  const dragEnd=()=>{
    dragObj.top=0;
    dragObj.left=0;
    dragObj.draging=false;
  }

  return {
    WrapStyleRef,
    dragStyleRef,
    mouseDown,
    mouseUp,
    initInteract
  }

}

export default useDrag;