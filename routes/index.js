
/*
 * Index Router - http://SERVER:PORT/
 */


module.exports = function(router){
  router.get("/", function(req, res){
  
    res.render("index", {title: "Skeleton.js"})
  
  });

  return router;
}
