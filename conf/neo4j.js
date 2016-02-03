var neo4j = require('neo4j');
var env = process.env.NODE_ENV || 'development';
var neo4j_config = require('../config').config[env].server_conf.neo4j;
var con_url = "https://"+ neo4j_config.dbuser + ":" + neo4j_config.dbpass + "@" + neo4j_config.db + "." + neo4j_config.ip + ":" + neo4j_config.port;
var neo4j_db = new neo4j.GraphDatabase(con_url);
var db = neo4j_db;
module.exports = db;
