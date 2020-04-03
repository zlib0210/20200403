//addListener 监听事件 removeListener 移除事件 listeners 返回所有数组成员是一个事件

var  EventEmitter=require("events").EventEmitter

var emitter=new EventEmitter

var result=function(){
    console.log("result")
}

emitter.addListener("fn",result)


setInterval(function(){
    emitter.emit("fn")
},20)

setTimeout(function(){
    emitter.removeListener("fn",result)
},200)