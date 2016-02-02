var mongoose = require('mongoose');
var mongo_conn = require('../conf/mongo');

SampleSchema = mongoose.Schema({ 
  sampleData:  String,          
  sampleArray: Array  
});

var SampleDB = mongo_conn.model("SampleDB", SampleSchema);
module.exports = SampleDB;
