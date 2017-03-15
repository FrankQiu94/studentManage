"use strict";
//1.导包
const express = require("express");
const path = require("path");
const accountRoute = express.Router();


const accountCtrl = require(path.join(__dirname,"../controllers/accountController.js"));

//2.get请求页面
accountRoute.get("/login",accountCtrl.getLoginPage);
//post传输数据
accountRoute.post("/login",accountCtrl.login);
accountRoute.get("/logout",accountCtrl.logout);
accountRoute.get("/register",accountCtrl.getRegisterPage);
accountRoute.post("/register",accountCtrl.register);
//3.导出
module.exports = accountRoute;