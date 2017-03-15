"use strict";

//1.导包
const express = require("express");
const path = require("path");
const session = require("express-session");
const app = express();


const bodyParser = require("body-parser");

app.use(session({ secret: "keyboard cat", cookie: { maxAge: 60000 }})); //req.session

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,"./src/statics")));

app.all("/*",(req,res,next) => {
	if(req.url === "/account/login" || req.url === "/account/register"){
		next();
	} else {
		if(req.session.username != null) {
			next();
		} else {
			res.end("<script>alert('您还没有登录，请先登录！');window.location.href='/account/login';</script>")
		};
	};
});

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