// 标注输出 WriteabLeStream

// SIGINT   捕获当前进程接收到的信号   获取按键信息到应用程序中 =》java   Scanner

process.on("SIGINT",function(){
    console.log("确定要退出吗?")
})

console.log("按一下g")

setTimeout(() => {
    console.log("结束");
  },5000);