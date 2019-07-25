var express = require('express')
var proxy = require('http-proxy-middleware')
var path = require('path')

var app = express()
// 静态资源访问限制
app.use(express.static(path.join(__dirname, 'public')));

var options = {
  target: 'http://www.example.org', //转发到的地址
  changeOrigin: true, // needed for virtual hosted sites
  ws: true, // 代理websocket
  pathRewrite: {
    '^/api': '', // rewrite path
  },
  router: {
    // 当请求localhost:3000/api时，会转发到http://localhost:8080,
    'localhost:3000/api': 'http://localhost:8080'
  }
}

app.use('/api', proxy(options))
app.get('/index.html', function(req,res){
  res.sendFile(__dirname+'/public/index.html');
});

app.listen(3000, function(){
  console.log('服务启动3000端口')
})