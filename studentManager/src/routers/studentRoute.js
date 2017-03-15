"use strict";

const express = require("express");
const path = require("path");

const studentRoute = express.Router();

const studentCtrl = require(path.join(__dirname,"../controllers/studentController.js"));

studentRoute.get("/list",studentCtrl.getStudentList);
studentRoute.get("/add",studentCtrl.getAddPage);
studentRoute.post("/add",studentCtrl.addStudent);
studentRoute.get("/edit/:studentId",studentCtrl.getEditPage);
studentRoute.post("/edit/:studentId",studentCtrl.editStudent);
studentRoute.get("/delete/:studentId",studentCtrl.deleteStudent);


module.exports = studentRoute;