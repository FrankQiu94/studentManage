"use strict";
//1.导包
const express = require("express");
const path = require("path");
const accountRoute = express.Router();


const accountCtrl = require(path.join(__dirname,"../controllers/accountController.js"));

//2.get请求页面
accountRoute.get("/login",accountCtrl.getLoginPage);
accountRoute.post("/login",accountCtrl.login);

//3.导出
module.exports = accountRoute;