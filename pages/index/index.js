// index.js
// 获取应用实例
const app = getApp()

Page({
  data: { 
    topType:[
      '城际班车',
      '省际班车'
    ],
    curType:'城际班车'
    
  },
  setCurType(ev){
  
    const { type } = ev.target.dataset;
    this.setData({
      curType:type
    })
  }

})
