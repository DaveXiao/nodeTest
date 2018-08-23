var testFunction = function (msg) {
    console.log(msg)
}
//setInterval函数每隔多少秒回调一次函数，第一个参数是回调函数，第二个参数是时间，第三个是回调函数传入的参数
var timer = setInterval(testFunction,1000,"testFunction function executed.")

//使用clearInterval函数取消对testFunction回调函数的调用
clearInterval(timer)