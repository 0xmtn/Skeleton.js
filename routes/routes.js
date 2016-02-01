/*
 * Main Router
 */


module.exports = function(app, routers, passport){
  var rt_index = require('./index')(routers['index']);
  var rt_user = require('./user')(routers['user']);
  
  app.use('/', rt_index);
  app.use("/user", rt_user);
};
