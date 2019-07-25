```
本工程是前端跨域的本地代理解决方法之一，采用node + express + http-proxy-middleware请求代理

```
```
说明：
前提必须先安装nodejs, 去官网下载。
test-proxy.js ---------前端本地代理配置文件
test-8080.js ----------模拟转发到的地址（或被代理地址）服务配置文件

```
```
用法：
1. $git clone https://github.com/Encn/myNodeProxy.git
2. $cnpm i
3. $node test-8080.js 启动被代理服务，成功后浏览器输入http://localhost:8080/hello测试成功与否
4. $node test-proxy.js 启动代理，成功后浏览器输入http://localhost:3000/index.html测试代理成功与否
5. 页面及其他静态访问资源请放到public下

```
```
工程搭建步骤
1. npm init 生成package.json
2. cnpm i express http-proxy-middleware path -D 安装代理中间件
3. 配置代理文件 test-proxy.js，注意需要访问的静态资源路径配置
4. 启动服务器文件 node test-proxy.js
5. 浏览器访问http://localhost:3000/index.html查看能否代理成功

```

