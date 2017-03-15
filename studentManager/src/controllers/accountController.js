"use strict";

const fs = require("fs");
const path = require("path");
// const MongoClient = require("mongodb").MongoClient;
const databaseManager = require(path.join(__dirname,"../tool/databaseManager.js"));

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
	// const url = "mongodb://localhost/it-test";
	// MongoClient.connect(url, (err, db) => {
	// 	db.collection("account").findOne({
	// 		//多个条件用逗号隔开
	// 		username:req.body.uname,
	// 		password:req.body.pwd,
	// 		status:0
	// 	},(err, doc) => {
	// 		if(doc != null) {
	// 			//登录成功
	// 			res.end("<script>window.location.href='/studentmanager/list'</script>");
	// 		} else {
	// 			res.end("<sciprt>alert('账号或密码错误');window.location.href='/account/login';</sciprt>");
	// 		}
	// 	});
	// })
	databaseManager.findOne("account",{
			//多个条件用逗号隔开
			username:req.body.uname,
			password:req.body.pwd,
			status:0
		},(err,doc) => {
			if(doc != null) {
				//登录成功
				//登录成功之后在session中设置username=xxx
               	req.session.username = req.body.uname;
				res.end("<script>window.location.href='/studentmanager/list'</script>");
			} else {
				res.setHeader("Content-Type","text/html;charset=utf-8");
				res.end("<script>alert('账号或密码错误');window.location.href='/account/login';</script>");
			}
		})
};

exports.logout = (req,res) => {
	req.session.username = null;
	res.end("<script>window.location.href='/account/login';</script>");
};

exports.getRegisterPage = (req,res) => {
	fs.readFile(path.join(__dirname,"../views/register.html"),(err,data) => {
		if(err){
			console.log(err);
		} else {
			res.setHeader("Content-Type","text/html;charset=utf-8");
			res.end(data.toString());
		}
	});
};

exports.register = (req,res) => {
	databaseManager.insertOne("account",{
			//多个条件用逗号隔开
			username:req.body.uname,
			password:req.body.pwd,
			status:0
		},(err,result) => {
			const resultObj = {status:1,message:"注册成功"}
      		if (result!=null) {
          		res.json(resultObj);
	    	} else {
          		resultObj.status = 0;
          		resultObj.message = "注册失败";
          		res.json(resultObj);
      		};
		});
};