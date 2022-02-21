// components/test/test.js
Component({
    options:{
        // styleIsolation: 'isolated'// 组件内外结构样式互不影响
        // styleIsolation: 'apply-shared'//外界影响组件，组件不影响外界
        styleIsolation: 'shared'//内外影响 
    },
    /**
     * 组件的属性列表
     */
    // vue中properties是可读不可写，小程序中可读可写
    // vue中data私有属性可读可写，小程序中可读可写
    // data倾向存储组件私有数据，properties更倾向于存储外界传递到组件中的数据

    properties: {
        // 第一种简化方式 max:10
        // 第二种方式：完整的定义方式
        max: {
            type:Number,
            value:10
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        n1:0,
        n2:0,
        sum:0
    },
    observers:{
        'n1,n2':function(newN1,newN2){
            this.setData({
                sum: newN1 + newN2
            })
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        addN1(){
            this.setData({
                n1:this.data.n1 + 1,
            })
        },
        addN2(){
            this.setData({
                n2:this.data.n2 + 1
            })
        },
    }
})
