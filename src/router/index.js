import { createRouter,createWebHashHistory } from "vue-router";

const routes=[
  {path:'/',component:()=>import('../components/index.vue')}
]
export const router=createRouter({
  history:createWebHashHistory(),
  routes
})

