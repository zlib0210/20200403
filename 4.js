// Events
// 定义:
// Events是nodejs  中发布(publish)和订阅(subscribe)模式


//作用
//传递信息

var  EventEmitter=require("events").EventEmitter
var emitter=new EventEmitter


//on    监听事件，如果触发就调用回调函数
//once  监听事件但是回调函数只执行一次
//emit  发送通知，传递信息

emitter.on("fn",function(){
    console.log("触发")
})



//emit  将指定的事件对应的处理函数依次执行

emitter.emit("fn")