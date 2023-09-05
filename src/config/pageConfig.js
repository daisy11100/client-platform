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
                  P7: '58_zp_active'
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