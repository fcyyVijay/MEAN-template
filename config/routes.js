var user = require('../controllers/user');


module.exports= function(app,config){
var apiPrefix = '/api';
	//users
app.get(apiPrefix+'/user',user.sendUser);

};