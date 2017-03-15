"use strict";

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let mydb = null;

const url = "mongodb://localhost:27017/it-test";
MongoClient.connect(url,(err,db) => {
	mydb = db;
	console.log("Database Started!");
});

exports.ObjectId = mongodb.ObjectId;

exports.findOne = (collectionName,collectionCondition,callback) => {
	mydb.collection(collectionName).findOne(collectionCondition,(err,doc) => {
		if(err) {
			console.log(err);
		} else {
			callback(err,doc);
		};
	});
};

exports.find = (collectionName,collectionCondition,callback) => {
	mydb.collection(collectionName).find(collectionCondition).toArray((err,doc) => {
		if(err) {
			console.log(err);
		} else {
			callback(err,doc);
		};
	});
};

exports.insertOne = (collectionName,collectionCondition,callback) => {
	mydb.collection(collectionName).insertOne(collectionCondition, (err,result) => {
		if(err) {
			console.log(err);
		} else {
			callback(err,result);
		};
	});
};

exports.updateOne = (collectionName,collectionCondition,collectionObj,callback) => {
	mydb.collection(collectionName).updateOne(collectionCondition,{$set : collectionObj},(err,result)=>{
	     if (err) {
	        console.log(err);
	      }
	      callback(err,result);
     });
};

exports.deleteOne = (collectionName,collectionCondition,callback) => {
	mydb.collection(collectionName).deleteOne(collectionCondition,(err,result)=>{
	     if (err) {
	        console.log(err);
	      } else {
	     	 callback(err,result);
	      };
     });
};
