module.exports = app => {
    const publics = require("../controllers/public.controller");
  
    var router = require("express").Router();
  
    // Create a new User
    router.post("/", publics.create);
  
    app.use('/api/publics', router);
  };