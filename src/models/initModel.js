const User = require('./user.model');
const Repair = require('./repair.model');

const initModel = () => {
  User.hasMany(Repair);
  Repair.belongsTo(User);
};

module.exports = initModel;
