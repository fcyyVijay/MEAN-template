var User= require('../models/user').users;
var env = process.env.NODE_ENV || 'development';
var config = require('../config/config')[env];


exports.sendUser=function(req,res){
	var username="vijay"
	res.send(username);
 };

