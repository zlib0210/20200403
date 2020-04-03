//uncaughtException   捕获异常

process.on('uncaughtException', () => {
    console.log("捕获异常")
})
console.log('这里仍然会运行');

var c="qwe"
c.c()

console.log("不会执行")