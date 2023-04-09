'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.hasMany(models.booking);
    }
  }
  user.init({
    u_name: DataTypes.STRING(60),
    u_email: DataTypes.STRING,
    u_phone_number: DataTypes.STRING(60),
    u_domicile: DataTypes.STRING,
    u_information: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};