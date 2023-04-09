'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class seat_booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  seat_booking.init({
    seat_s_id: DataTypes.INTEGER,
    booking_b_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'seat_booking',
  });
  return seat_booking;
};