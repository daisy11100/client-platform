import { get,set } from "lodash-es";

// 校验赋值路径的上一级是否存在
function checkPath(target, path) {
  // eslint-disable-next-line no-useless-escape
  const pathArr = path.match(/[^\[\]\.]+|\[\d+(?=\])/g);
  // 路径只有一级直接通过
  if (pathArr.length === 1) {
      return true;
  }
  const targetPath = pathArr.slice(0, pathArr.length - 1);
  return get(target, targetPath, 'unable') !== 'unable';
}

const updatebyPath=(root,path,data)=>{
  if(typeof path !=='string' || data==='undefined' ){
    throw new Error('params error')
  }

  try {
    if(checkPath(root,path)){
      set(root,path,data)
    }
  } catch (error) {
    throw new Error(error)
  }
}

const reducer=(root,key)=>(params,newData)=>{
  const target=key?root[key]:root;
  switch(typeof params){
    case 'string':
      updatebyPath(target,params,newData);
      break;
    case "object":
      Object.assign(target,params);
      break;
    case 'function':
      params(target)
      break;
    default:
      break;
  }
}


export default reducer;