var http = require('http')

var server = http.createServer(function (req,res) {
    res.writeHead(200,{'Content-type':'text/html'}) //写入头部信息
    // res.write('<h1>hello nodejs!</h1>')
    res.write('<head><meta charset="UTF-8"/></head>')
    if (req.url == '/index.html') {
        res.write('<h1>这里是首页</h1>')
        res.end
    } else if (req.url == '/test.html'){
        res.write('<h1>测试</h1>')
    } else {
        res.write('<h1>错误页面</h1>')
    }
    res.end() //结束响应
})


server.listen(3000,'localhost',function (err) {
    if (err)
        throw err
    console.log("服务启动成功...")
})