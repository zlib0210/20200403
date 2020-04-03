//once  on

var  EventEmitter=require("events").EventEmitter

var emitter=new EventEmitter

emitter.once("fn",function(){
    console.log("fn")
})
emitter.emit("fn")
emitter.emit("fn")

console.log("************************************")


emitter.on("fn1",function(){
    console.log("fn1")
})
emitter.emit("fn1")
emitter.emit("fn1")