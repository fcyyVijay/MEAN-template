var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var userSchema= new Schema({
	
});

exports.users=mongoose.model('users',userSchema);