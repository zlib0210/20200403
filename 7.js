//setMaxListeners  设置最大事件回调  node默认可以指定最多10个
// EventEmitter 实例允许添加更多的监听器，但会向 stderr 输出跟踪警告，表明可能会导致内存泄漏。

var  EventEmitter=require("events").EventEmitter

var emitter=new EventEmitter

emitter.on("fn",function(){
    console.log(1)
})
emitter.on("fn",function(){
    console.log(2)
})
emitter.on("fn",function(){
    console.log(3)
})
emitter.on("fn",function(){
    console.log(4)
})
emitter.on("fn",function(){
    console.log(5)
})
emitter.on("fn",function(){
    console.log(6)
})
emitter.on("fn",function(){
    console.log(7)
})
emitter.on("fn",function(){
    console.log(8)
})
emitter.on("fn",function(){
    console.log(9)
})
emitter.on("fn",function(){
    console.log(10)
})
emitter.on("fn",function(){
    console.log(11)
})
emitter.on("fn",function(){
    console.log(12)
})

emitter.emit("fn")

emitter.setMaxListeners(20) //设置最大监听数


// on  为指定事件注册一个监听器，接受一个字符串 event 和一个回调函数。 
// emit  按监听器的顺序执行执行每个监听器，如果事件有注册监听返回 true，否则返回 false。
// oncer 为指定事件注册一个单次监听器，即 监听器最多只会触发一次，触发后立刻解除该监听器。 
// addListener 为指定事件添加一个监听器到监听器数组的尾部。
// removeListeners 移除指定事件的某个监听器，监听器必须是该事件已经注册过的监听器
// setMaxListeners   用于提高监听器的默认限制的数量。
// removeAllListeners 移除全部或指定 eventName 的监听器。

