// pages/shoplist/shoplist.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        query:{},
        shopList:[],
        page:1,
        pageSize:10,
        total: 0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            query: options
        })
        this.getShopList()
    },

    getShopList(){
        console.log(this.data.query.id)
        wx.request({
        //   url: 'https://www.escook.cn/categories/${this.data.query.id}/shops',
          url: 'https://www.escook.cn/categories/1/shops',
          method: 'GET',
          data: {
              _page: this.data.page,
              _limit:this.data.pageSize
          },
          success: (res)=>{
              console.log(res)
              this.setData({
                  shopList: [...this.data.shopList,...res.data],
                  totle: res.header['X-Total-Count']-0
              })
          }


        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        wx.setNavigationBarTitle({
            title: this.data.query.title
        })
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