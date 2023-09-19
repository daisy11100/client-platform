// 在组件管理平台上传数据格式
export const materialData=[
  {
    name:'test-img1',  //组件名称
    img:'1111',  //图片地址
    // img:'//cdn-cnc.17zuoye.cn/fs-resource/64ec06338fd9d164fd800ddd.png',   //组件缩略图
    lib:'',   //组件资源
    meta:{},  //组件的meta配置
    config:{
      basic: {
        cityTitle: "我是一个城市名字",
        componentType: "one",
        // url: "https://hapi.58corp.com/mock/6279cbdfe7fb5304141ee49e?cateid=606",
        url:'https://baidu.com',// 资源
        showCity: false,
        loadingColor: "#FFC7C7",
      },
      show: true,
      lock: false,
      name: "超职季-工具类",
      style: {
        rect: {
          x: 0,
          y: 0,
          w: 375,
          h: 100,
          a: 1,
          r: 0,
          l: 0,
          b: 0,
          t: 0,
        },
        background: {
          image: "",
          color: "rgba(37,195,138,1)",
          repeat: "no-repeat",
          size: "",
          position: "",
          imageType: "image",
          gradientColorArray: ["transparent", "transparent"],
          gradientDirection: "180deg",
        },
      }
    } 
  },
  {
    name:'test-img2',  //组件名称
    img:'1111', 
    // img:'//cdn-cnc.17zuoye.cn/fs-resource/64a699757812544608eddf16.png',   //组件缩略图
    lib:'',   //组件资源
    meta:{},  //组件的meta配置
    config:{
      basic: {
        cityTitle: "我是一个城市名字",
        componentType: "one",
        url:'https://baidu.com',// 资源
        // url: "https://hapi.58corp.com/mock/6279cbdfe7fb5304141ee49e?cateid=606",
        showCity: false,
        loadingColor: "#FFC7C7",
      },
      show: true,
      lock: false,
      name: "超职季-工具类",
      style: {
        rect: {
          x: 0,
          y: 0,
          w: 375,
          h: 100,
          a: 1,
          r: 0,
          l: 0,
          b: 0,
          t: 0,
        },
        background: {
          image: "",
          color: "rgba(37,195,138,1)",
          repeat: "no-repeat",
          size: "",
          position: "",
          imageType: "image",
          gradientColorArray: ["transparent", "transparent"],
          gradientDirection: "180deg",
        },
      }
    }
  },
  {
    name:'test-img3',  //组件名称
    img:'1111', 
    // img:'//cdn-cnc.17zuoye.cn/fs-resource/64ec0633bc95b9016ae426e5.png',   //组件缩略图
    lib:'',   //组件资源
    meta:{},  //组件的meta配置
    config:{
      basic: {
        cityTitle: "我是一个城市名字",
        componentType: "one",
        url:'https://baidu.com',// 资源
        // url: "https://hapi.58corp.com/mock/6279cbdfe7fb5304141ee49e?cateid=606",
        showCity: false,
        loadingColor: "#FFC7C7",
      },
      show: true,
      lock: false,
      name: "超职季-工具类",
      style: {
        rect: {
          x: 0,
          y: 0,
          w: 375,
          h: 100,
          a: 1,
          r: 0,
          l: 0,
          b: 0,
          t: 0,
        },
        background: {
          image: "",
          color: "rgba(37,195,138,1)",
          repeat: "no-repeat",
          size: "",
          position: "",
          imageType: "image",
          gradientColorArray: ["transparent", "transparent"],
          gradientDirection: "180deg",
        },
      }
    } 
  },
  {
    name:'test-img4',  //组件名称
    img:'1111', 
    // img:'//cdn-cnc.17zuoye.cn/fs-resource/64ec06338fd9d164fd800ddd.png',   //组件缩略图
    lib:'',   //组件资源
    meta:{},  //组件的meta配置
    config:{
      basic: {
        cityTitle: "我是一个城市名字",
        componentType: "one",
        url:'https://baidu.com',// 资源
        // url: "https://hapi.58corp.com/mock/6279cbdfe7fb5304141ee49e?cateid=606",
        showCity: false,
        loadingColor: "#FFC7C7",
      },
      show: true,
      lock: false,
      name: "超职季-工具类",
      style: {
        rect: {
          x: 0,
          y: 0,
          w: 375,
          h: 100,
          a: 1,
          r: 0,
          l: 0,
          b: 0,
          t: 0,
        },
        background: {
          image: "",
          color: "rgba(37,195,138,1)",
          repeat: "no-repeat",
          size: "",
          position: "",
          imageType: "image",
          gradientColorArray: ["transparent", "transparent"],
          gradientDirection: "180deg",
        },
      }
    } 
  }
]
export const componentsList=[];
(function transformComponent(){
  materialData.forEach(item=>{
    const {name,img,lib,meta,config}=item;
    const formatVal={
      name,
      meta,
      data:config,
      title:name,
      avatar:img,
      lib
    }
    componentsList.push(formatVal)
  })
})();

// 接口返回全部组件的数据格式
export const mockAllComponent=[
  {
    name:'test1',
    meta:'meta1',
    data:{basic:111},  // 组件实际内容
    title:'test1',
    avatar:'1111', 
    // avatar:'//cdn-cnc.17zuoye.cn/fs-resource/64ec0633bc95b9016ae426e5.png'
  },
  {
    name:'test2',
    meta:'meta2',
    data:{basic:2222},  // 组件实际内容
    title:'test2',
    avatar:'1111', 
    // avatar:'//cdn-cnc.17zuoye.cn/fs-resource/64ec0633bc95b9016ae426e5.png'
  },
  {
    name:'test3',
    meta:'meta3',
    data:{basic:333},  // 组件实际内容
    title:'test3',
    avatar:'1111', 
    // avatar:'//cdn-cnc.17zuoye.cn/fs-resource/64ec0633bc95b9016ae426e5.png'
  },
  {
    name:'test4',
    meta:'meta4',
    data:{basic:444}, // 组件实际内容
    title:'test4',
    avatar:'1111', 
    // avatar:'//cdn-cnc.17zuoye.cn/fs-resource/64ec0633bc95b9016ae426e5.png'
  }
]
