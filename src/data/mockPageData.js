const mockSettingData={
  id:'page1',
  type:'page',
  meta:{
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
                            src:'https://baidu.com' //待添加
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
                            src:'https://baidu.com' //待添加
                        }
                    },
                    value:'static',
                    src:''
                }
            ]
        }
    ]
  },
  defaultValue:{
    id:'page1',
    name:'page1',
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
  }
}

export const componentMeta={
  basic:[
    {
      type:'input', //array,object
      label:'接口地址'
    },
    {
      type:'select', //array,object
      label:'模版选择',
      options:[
        {
          label:'模版一',
          value:'one'
        },
        {
          label:'模版二',
          value:'two'
        }
      ]
    }
  ],
  style:[
    'Rect',
    'Padding',
    'Font',
    'Shadow',
    'Border',
    'Background',
    'BorderRadius'
  ]
}

