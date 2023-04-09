'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      booking.belongsTo(models.user);
      booking.belongsTo(models.seminar);
      booking.belongsToMany(models.seat, {
        through: 'seat_booking'
      });
    }
  }
  booking.init({
    b_date: DataTypes.DATE,
    b_quantity: DataTypes.INTEGER,
    b_total: DataTypes.DECIMAL(10,2),
    b_status: DataTypes.BOOLEAN,
    user_u_id: DataTypes.INTEGER,
    seminar_ss_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'booking',
  });
  return booking;
};