### low code

组件区域+编辑区+配置区

组件区使用mockData 实现组件的渲染  
编辑区每次监听到拖拽后，发出请求，请求组件资源  
配置区 开发一系列 配置组件

组件区实现拖拽，一个组件模块创建两个div元素，一个固定定位，一个相对定位，当监听到对每个组件初始化一个draggable的模块，当拖拽时相对定位，然后 在编辑区使用Interactjs的dropzone，监听目标元素的drop，监听到后实现数据变化。

render根据传递过去的数据(pageData)这种去渲染样式的。  
但是组件资源都需要通过服务端更新到加载到模版上

所以为啥 使用iframe嵌入render，拖入组件就能渲染  
client和iframe通信也只是传递了(pageData)，并没有资源啊
解答：Render上通过传过来的PageData获取组件列表，然后再通过接口获取组件对应的资源，插入到document上。  
但是client和iframe的这种通信只在iframe加载时候传过数据 所以当drop进一个组件进入画布区的时候，更新了本地的pageData外，Render上又是怎么动态加载组件资源的  
还是通过接口修改了window.DATA;
解答：因为传的对象是响应式的，所以每次drop一个组件后，都会修改pageData,因此传递到render的数据也会发生改变

✅ 组件拖拽
✅ 拖拽到画布区显示，render实时更新资源
❎ meta
❎ 种子工程，开发几个组件试试，组件资源需要cdn
