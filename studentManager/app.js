"use strict";

//1.导包
const express = require("express");
const path = require("path");
const app = express();


const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,"./src/statics")));


//2.导入路由
const accountRoute = require(path.join(__dirname, "./src/routers/accountRoute.js"));
const studentRoute = require(path.join(__dirname, "./src/routers/studentRoute.js"));

//3.处理数据
app.use("/account",accountRoute);
app.use("/studentmanager",studentRoute);

//4.监听
app.listen(8899, "localhost", (err) => {
	if(err) {
		console.log(err);
	} else {
		console.log("Start Success!");
	}
})