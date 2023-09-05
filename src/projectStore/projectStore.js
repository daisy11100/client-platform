import {reactive} from 'vue';
import reducer from './reducer';
import { initMap } from './assistMap';

const projectStore=reactive({});
const upProjectStore=reducer(projectStore);


export const setPorjectStore=(data,param)=>{
  upProjectStore(data,param);
  initMap();
  console.log('projectStore',projectStore)
}

export const resetProjectStore=()=>{
  for(const key in projectStore){
    delete projectStore[key];
  }
}

export default projectStore; 


