'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class seminar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // seminar.hasMany(models.booking, {
      //   foreignKey: "seminar_ss_id"
      // });
      seminar.hasMany(models.booking);
    }
  }
  seminar.init({
    sm_date: DataTypes.DATE,
    sm_title: DataTypes.STRING,
    sm_price: DataTypes.DECIMAL(8,2),
    sm_venue: DataTypes.STRING,
    sm_total_seat: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'seminar',
  });
  return seminar;
};