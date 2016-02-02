var mongoose = require('mongoose');
var env = process.env.NODE_ENV || 'development';
var mongo_config = require('../config').config[env].server_conf.mongo;

//Get Connection id to do all the db processes on
var con_url = "mongodb://"+ mongo_config.dbuser + ":" + mongo_config.dbpass + "@" + mongo_config.ip + ":" + mongo_config.port + "/" + mongo_config.db;

var mongo_dbconn = mongoose.connect(con_url);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback(){
    console.log("CONNECTED TO MONGODB");
});

module.exports = mongo_dbconn;
