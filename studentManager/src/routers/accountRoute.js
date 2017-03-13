"use strict";
//1.导包
const express = require("express");
const path = require("path");
const accountRoute = express.Router();

console.log(123);
const accountCtrl = require(path.join(__dirname,"../controllers/accountController.js"));

const app = express();
//2.get请求页面
app.get("/login",accountCtrl.getLoginPage);

//3.导出
module.exports = accountRoute;