// components/test4/test2.js
Component({
    options: {
        multipleSlots:true//启用多个slot插槽
    },
    /**
     * 组件的属性列表
     */
    properties: {
        count: Number
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        addCount(){
            this.setData({
                count:this.properties.count + 1
            })
            // 触发自定义事件,传递给父组件
            this.triggerEvent('sync',this.properties.count)
        }
    }
})
