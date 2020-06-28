module.exports = (sequelize, Sequelize) => {
    const Public = sequelize.define("public", {
      firstname: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      gender: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      pincode: {
        type: Sequelize.INTEGER
      },
      contactnumber: {
        type: Sequelize.INTEGER
      },
      usertype: {
        type: Sequelize.STRING
      },
      authmethod: {
        type: Sequelize.STRING
      },
    });
  
    return User;
  };