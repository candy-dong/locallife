// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    // 编程式导航
    // tab页面
    gotoMessage(){
        wx.switchTab({
          url: '/pages/message/message',
        })
    },
    // 非tab页面
    gotoInfo(){
        wx.navigateTo({
          url: '/pages/info/info',
        })
    },
    gotoInfo2(){
      wx.navigateTo({
        url: '/pages/info/info?name=ls&gender=男',
      })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
      console.log('触发了刷新')
      // wx.stopPullDownRefresh({
      //   success: (res) => {},
      // })
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})