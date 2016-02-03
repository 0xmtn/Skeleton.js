var db = require("../conf/neo4j");

function someFunction(_clb){
  var params = {userID: someUserID};
  var query_str = [          
    "MATCH (person {userID: {userID}})-[r:HAS_INTEREST]->m",
    "RETURN m.name as name"  
    ].join("\n");            

    db.query(query_str, params, function(err, result){
      if(err) throw err;       

      if(!result.length || !result){  
        return _clb(false);    
      }
      else{
        return _clb(result);
      }
    });
}

module.exports = someFunction;
