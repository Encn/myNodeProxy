var express = require('express')

var app = express()

var server = app.listen(8080,function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log('应用实例，访问地址为 http://%s:%s',host,port);
})

app.get('/hello', function(req,res){
  let data = {}
  data["name"] = "lucy";
  data["age"] = "23";
  res.send(data);
});
