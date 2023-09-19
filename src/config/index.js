export const defaultProjectData = {
  // 核心站点渲染数据
  siteData: {
      // name: '站点模版',
      desc: '',
      options: {
          basic: {
              customJS: [],
              trackLog: { page_type: '' },
              logParams: {
                  P1: 'zpsubbiz_zpgj',
                  P2: '${_url.id}',
                  P3: '${_url.tjfrom}',
                  P4: '${_url.pagefrom}',
                  P5: '${_url.source_from}',
              }
          },
          style: {
              width: '375',
              // temp
              rect: { width: '375' },
              background: {
                  color: 'transparent',
                  image: '',
                  repeat: 'no-repeat',
                  size: 'cover',
                  position: 'center',
                  origin: ''
              }
          }
      },
      // 页面数据（块）
      pageData: [
          // 数组数据决定层级
          {
              id: 'page1',
              name: 'page1',
              options: {
                  basic: {
                      // 布局方式，分为定位布局 postion 、流式布局 static 、固定布局 fixed
                      layoutType: 'postion'
                  },
                  style: {
                      height: '667',
                      background: {
                          color: '#ffffff',
                          image: '',
                          repeat: 'no-repeat',
                          size: 'cover',
                          position: 'center',
                          origin: ''
                      }
                  },
                  animation: {}
              },
              components: []
          }
      ],
      fixedData: [
          {
              id: 'fixed1',
              name: 'fixed page',
              options: {
                  basic: { layoutType: 'fixed' },
                  style: {
                      height: '667',
                      background: {
                          color: 'transparent',
                          image: '',
                          repeat: 'no-repeat',
                          size: 'cover',
                          position: 'center',
                          origin: ''
                      }
                  },
                  animation: {}
              },
              components: []
          }
      ],
      shareData: {
          title: '',
          desc: '',
          link: '',
          imgUrl: '',
          // 预留，成功后处理
          successFunc: ''
      }
  },
  // 辅助配置数据，如当前选择组件等
  siteOptions: {
      activePage: 'page1',
      activeFixed: '',
      activeComponents: [],
      baseGuideLines: []
  },
  publishConfig: {}
};

export const newPageData = {
    name: 'page',
    options: {
        basic: {
            // 布局方式，分为定位布局position、流式布局relative、固定布局fixed
            layoutType: 'postion'
        },
        style: {
            height: '667',
            background: {
                color: '#ffffff',
                image: '',
                repeat: 'no-repeat',
                size: 'cover',
                position: 'center',
                origin: ''
            }
        },
        animation: {}
    },
    components: []
};

export const defaultComponentData = {
  show: true,
  lock: false,
  name: '组件',
  style: {
      rect: {
          x: 0,
          y: 0,
          w: 100,
          h: 20,
          a: 1,
          r: 0,
          l: 0,
          b: 0,
          t: 0
      }
  }
};

export const defaultComponentMeta = {
  style: [
      {
          type: '@rect',
          label: '位置',
          key: 'rect'
      },
      {
          type: '@paddingAndMargin',
          label: '边距',
          key: 'paddingAndMargin'
      },
      {
          type: '@border',
          label: '边框',
          key: 'border'
      },
      {
          type: '@shadow',
          label: '阴影',
          key: 'shadow'
      },
      {
          type: '@background',
          label: '背景设置',
          key: 'background'
      }
  ],
  animation: [{ visible: true }],
  // action: [
  //     {
  //         type: '@action',
  //         label: '事件配置',
  //         key: 'action'
  //     }
  // ]
  action: {
      publisher: {
          params: [],
          events: []
      },
      handlers: []
  }
};

export const fixedMeta={
    title:'固定页面',
    basic:[],
    style:{
        type: '@background',
        label: '背景设置',
        key: 'background'
    },
    action:false
}
export const pageMeta={
    title:'页面',
    basic:[
        {
            type:'@pageLayout',
            label:'布局方式',
            lablePosition:'top',
            key:'layoutType',
            options:[
                {
                    label:{
                        value:'自由布局',
                        intro:{
                            title:'自由布局',
                            desc:'元素可以任意叠加',
                            src:''
                        }
                    },
                    value:'position',
                    src:''
                },
                {
                    label:{
                        value:'流式布局',
                        intro:{
                            title:'流式布局',
                            desc:'元素按顺序罗列',
                            src:''
                        }
                    },
                    value:'static',
                    src:''
                }
            ]
        }
    ]
}

export const smartGroupMeta={
    basic:{
        type:'Button',
        key:'group',
        label:'',
        handler:''
    },
    action:false
}



