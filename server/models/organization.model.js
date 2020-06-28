module.exports = (sequelize, Sequelize) => {
    const Organization = sequelize.define("organization", {
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
      type: {
        type: Sequelize.STRING
      },
      department: {
        type: Sequelize.STRING
      },
      position: {
        type: Sequelize.STRING
      },
      username: {
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
      }
    });
  
    return Organization;
  };