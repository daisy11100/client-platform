import interact from "interactjs";

const createInteract=(type,dom,ops)=>{
  let dropZone=null;
  switch(type){
    case "dropzone":
      dropZone=interact(dom).dropzone(ops);
      break;
    case "dargable":
      interact(dom).draggable(ops);
      break;
    case "unset":
      dropZone=interact(dom).unset();
      break;
    case "resizable":
      interact(dom).resizable(ops);
    default:
      dropZone=''
  }
  return {dropZone}
}

export default createInteract;