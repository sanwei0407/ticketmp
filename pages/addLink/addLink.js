Page({
  data: {
    showTypeChoose:false,
    types:[
      { name: '身份证'},
      { name: '户口被'}
    ]
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
    };
  },
  stc(){
    console.log('abc')
    this.setData({
      showTypeChoose:true
    })
  },
  onCancel(){
    this.setData({
      showTypeChoose:false
    })
  },
  onConfirm(ev){
    console.log('ev',ev)
    this.onCancel()

  }
});