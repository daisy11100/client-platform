<template>
  <div class="material">
      <div class="material-item" v-for="(item,index) in componentData" :key="index">
        <drag-block @add-component="(data)=>{$emit('add-component',data)}" :component-item="item">
          <template #content>
              <img class="material-item-img" :src="item.avatar"/>
          </template>
        </drag-block>
      </div>
  </div>
</template>
  
<script setup>
import dragBlock from './dargBlock.vue'
const props=defineProps({
  componentData:Object,
})

</script>
  
<style scoped lang="scss">
.material{
  width: 18%;
  height: 100vh;
  background-color: #fff;
  // display: flex;
  // flex-wrap: wrap;
  box-sizing: border-box;
  padding: 10px 0 10px 10px;
  &-item{
    width: 100px;
    height: 50px;
    box-sizing: border-box;
    padding: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    display: inline-block;
    &-img{
      width: 100%;
      height: 100%;
    }
  }
}
</style>