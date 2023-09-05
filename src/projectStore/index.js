import { readonly,provide } from "vue";
import projectStore,{setPorjectStore,resetProjectStore} from "./projectStore";
import { updateCompnentById,updatePageById } from './assistMap';

const initStore=()=>{
  provide('resetProjectStore',resetProjectStore);
  provide('updateCompnentById',updateCompnentById);
  provide('updatePageId',updatePageById);
}


const readonlyStore=readonly(projectStore)


export {
  readonlyStore,
  setPorjectStore,
  resetProjectStore,
  updateCompnentById,
  updatePageById
}
export default initStore;