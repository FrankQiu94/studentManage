# studentManage  
###What I have learned:
1.  NodeJS
2.  Express structure
3.  MongoDB
4.  ES6
5.  jQuery
6.  Bootstrap
7.  plug-MD5 based on jQuery

```bash
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");
const app = express();
...
```


###########目录结构描述  
├── README.md                   // help   
├── app.js                      // 应用  
├── src                         // 所有使用到的文件  
│   ├── controllers             // 路由导向的控制器  
│   ├── routers                 // 路由  
│   ├── tool                    // 数据库中间件  
│   ├── views                   // 路由导向的页面    
│   └── statics                 // 静态资源  
│       ├── css  
│       ├── js  
│       └── lib                 // 引用的库   
│           ├── md5.js          // md5加密文件     
│           ├── jquery.min.js  
│           └── bootstrap          
├── node_modules  
└── package.json  

开启方式: Terminal  cd到该文件夹，
```bash
node app.js
```
即可打开
