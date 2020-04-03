//exit

//当进程退出时触发，固定时间去执行。注意exit的回调结束后，主事件不在执行，所以计时器会失效
process.on('exit', (code) => {
    setTimeout(() => {
      console.log('此处不会运行');
    }, 0);

    console.log("退出当前程序")
  });

  setTimeout(() => {
    console.log(11111);
  }, 0);