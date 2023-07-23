const { DataTypes } = require('sequelize');
const { db } = require('./../database/config');

const Repair = db.define('repairs', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  userid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('pending', 'completed', 'cancelled'),
    allowNull: false,
    defaultValue: 'pending',
  },
});

module.exports = Repair;
