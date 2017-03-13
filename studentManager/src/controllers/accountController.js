"use strict";

const fs = require("fs");
const path = require("path");

exports.getLoginPage = (req, res) => {
	fs.readFile(path.join(__dirname,"../views/login.html"),(err,data) => {
		if(err) {
			console.log(err);
		} else {
			req.setHeader("Content-Type","text/html;charset=utf-8");
			req.end(data.toString());
		};
	});
};