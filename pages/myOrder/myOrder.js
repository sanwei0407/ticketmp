Page({
  data: {
    active:1
  },
  onLoad(options) {

  },
  onReady() {

  },
  onShow() {

  },
  onHide() {

  },
  onUnload() {

  },
  onShareAppMessage() {
    return {
      title: '',
      active: 0
    };
  },
  onChange(){

  },
  toDetail(){
    wx.navigateTo({
      url: '/pages/orderDetail/orderDetail',
    })
  }
});