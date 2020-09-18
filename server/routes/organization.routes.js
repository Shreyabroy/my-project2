module.exports = app => {
  const organizations = require("../controllers/organization.controller");

  var router = require("express").Router();

  // Create a new organization
  router.post("/", organizations.create);

  app.use('/api/organizations', router);
};