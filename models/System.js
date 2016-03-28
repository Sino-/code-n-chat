var config = require('./CONFIGS');
var db = require('./Database.js');


var System = function(req){
	
};


System.prototype.hello = function(){
	return this.db.hello;
};



module.exports = System;