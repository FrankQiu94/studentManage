"use strict";

const fs = require("fs");
const path = require("path");
const MongoClient = require("mongodb").MongoClient;

exports.getLoginPage = (req, res) => {
	fs.readFile(path.join(__dirname,"../views/login.html"),(err,data) => {
		if(err) {
			console.log(err);
		} else {
			res.setHeader("Content-Type","text/html;charset=utf-8");
			res.end(data.toString());
		};
	});
};

exports.login = (req,res) => {
	const url = "mongodb://127.0.0.1:27017/it-test";
	MongoClient.connect(url, (err, db) => {
		console.log(db);
		db.collection("account").findOne({
			//多个条件用逗号隔开
			username:req.body.uname,
			password:req.body.pwd,
			status:0
		}),(err, doc) => {
			console.log(doc);
			if(doc != null) {
				//登录成功
				res.end("登录成功！");
			} else {
				res.end("<sciprt>alert('账号或密码错误');window.location.href='/account/login';</sciprt>");
			}
		}
	})
};