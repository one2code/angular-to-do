var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/toDoList');
var db = mongoose.connection;

db.on('error', function(error){
	console.log(error)
});

db.once('open', function(){
	console.log("We got a database!!!")
});

module.exports = db;