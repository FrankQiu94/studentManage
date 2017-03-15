"use strict";

const xtpl = require("xtpl");
const path = require("path");
// const MongoClient = require("mongodb").MongoClient;
const databaseManager = require(path.join(__dirname,"../tool/databaseManager.js"));


exports.getStudentList = (req,res) => {
	// const url = "mongodb://localhost:27017/it-test";
	// MongoClient.connect(url, (err,db) => {
	// 	db.collection("studentinfo").find({}).toArray((err, docs) => {
	// 		xtpl.renderFile(path.join(__dirname,"../views/studentList.html"),{studentlist:docs},(err,content) => {
	// 			if(err) {
	// 				console.log(err);
	// 			} else {
	// 				res.setHeader("Content-Type","text/html;charset=utf-8");
	// 				res.end(content);
	// 			}
	// 		})
	// 	})
	// })
	const keyWord = req.query.keyword || "";

	databaseManager.find("studentinfo",{name:{$regex:keyWord}},(err,docs) => {
		xtpl.renderFile(path.join(__dirname,"../views/studentList.html"),{studentlist:docs, keyword:keyWord, loginedname:req.session.username},(err,content) => {
			if(err) {
				console.log(err);
			} else {
				res.setHeader("Content-Type","text/html;charset=utf-8");
				res.end(content);
			};
		});
	});

};

exports.getAddPage = (req,res) => {
	xtpl.renderFile(path.join(__dirname,"../views/add.html"),{loginedname:req.session.username},(err,content) => {
		if(err) {
			console.log(err);
		} else {
			res.setHeader("Content-Type","text/html;charset=utf-8");
			res.end(content);
		};
	});
};

exports.addStudent = (req,res) => {
	const collectionInfo = {
		name: req.body.name,
		age: req.body.age,
		gender: req.body.sex,
		phone: req.body.phone,
		address: req.body.address,
		description: req.body.introduction
	};
	databaseManager.insertOne("studentinfo",collectionInfo,(err,docs) => {
		if(docs != null) {
			res.end("<script>window.location.href='/studentmanager/list';</script>")
		} else {
			res.end("<script>alert('信息添加失败');</script>")
		};
	});
};

exports.getEditPage = (req,res) => {
	//获取学生Id
    const studentId = req.params.studentId;
    console.log(1233);
	databaseManager.findOne("studentinfo",{_id:databaseManager.ObjectId(studentId)},(err,docs) => {
		xtpl.renderFile(path.join(__dirname,"../views/edit.html"),{studentInfo:docs,loginedname:req.session.username},(err,content) => {
			if(err) {
				console.log(err);
			} else {
				res.setHeader("Content-Type","text/html;charset=utf-8");
				res.end(content);
			};
		});
	});
};

exports.editStudent = (req,res) => {
	//获取学生Id
    const studentId = req.params.studentId;
    //要修改的条件
    const collectionObj = {
            name:req.body.name,
            age:req.body.age,
            gender:req.body.sex,
            phone:req.body.phone,
            address:req.body.address,
            description:req.body.introduction
     };
     databaseManager.updateOne("studentinfo",{_id:databaseManager.ObjectId(studentId)},collectionObj,(err,result) => {
		if(result != null) {
			res.end("<script>window.location.href='/studentmanager/list';</script>")
		} else {
			res.end("<script>alert('更新失败！');</script>")
		};
	});
};

exports.deleteStudent = (req,res) => {
	//获取学生Id
    const studentId = req.params.studentId;
    console.log(studentId);
    const resultObj = {status:1,message:"删除成功"};
    databaseManager.deleteOne("studentinfo",{_id:databaseManager.ObjectId(studentId)},(err,result) => {
		if (result == null) {
            resultObj.status = 0;
            resultObj.message = "删除失败";
        }
     	//设置响应头
      	res.setHeader("Content-Type","application/json;charset=utf-8");
      	//res.end(JSON.stringify(resultObj));
      	res.json(resultObj);
	});
};