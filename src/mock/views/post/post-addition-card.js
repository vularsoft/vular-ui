export default {
  name:"VularFormCard",
  props:{
    title:"附加信息",
  },
  children:[
    {
      name:"vular-input",
      props:{
        rules:"required",
        field:"category",
        vInput:{
          name:"VularToManySelect",
          props:{
            "prepend-icon":"mdi-shopping-search",
          },
        },
      },
    },
    {
      name:"vular-input",
      props:{
        rules:"",
        field:"seo-dialog",
        vInput:{
          name:"VularHasOneDialog",
          props:{
            "icon":"mdi-trending-up",
            title:"搜索引擎优化",
          },
        },
      },
    },
    {
      name:"vular-input",
      props:{
        rules:"",
        field:"seo-dialog2",
        vInput:{
          name:"VularHasOneDialog",
          props:{
            "icon":"mdi-share-variant",
            title:"社交分享优化",
          },
        },
      },
    },
  ]

}
