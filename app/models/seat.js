'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      seat.belongsToMany(models.booking, {
        through: 'seat_booking'
      });
    }
  }
  seat.init({
    s_seat_code: DataTypes.CHAR(3)
  }, {
    sequelize,
    modelName: 'seat',
  });
  return seat;
};