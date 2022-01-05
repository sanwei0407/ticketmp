const { formatTime  } = require('../../utils/util')
import dayjs from 'dayjs'
Page({
  data: {
      curDate:dayjs(),
      curDateTxt:''
  },
  onLoad(options) {

  },
  onReady() {
  
    },
  onShow() {
    this.setData({
      curDate: dayjs(),
      curDateTxt:  dayjs().format('YYYY-MM-DD')
    })
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
  predate(){
   
    const curDate =this.data.curDate.subtract(1,'day')
    this.setData({
      curDate,
      curDateTxt: curDate.format('YYYY-MM-DD')
    })
  },
  nextdate(){
   
    const curDate = this.data.curDate.add(1,'day')
    this.setData({
      curDate,
      curDateTxt: curDate.format('YYYY-MM-DD')

    })
  }
});