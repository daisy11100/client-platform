export const recursionCo=(data,handler,path)=>{
  for(let i=0;i<data.length;i++){
    if(data[i].type==='group'){
      recursionCo(data[i].children,handler,path.concat(data[i].id))
    }else{
      handler(data[i],path)
    }
  }
}