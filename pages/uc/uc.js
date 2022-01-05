
const app = getApp();
Page({
  data: {
     userInfo:null
  },
  onLoad(options) {

  },
  onReady() {
    console.log(app)
    this.userInfo = app.alobalData.userInfo;
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
    };
  },
});