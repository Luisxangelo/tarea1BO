const { where } = require('sequelize');
const User = require('../models/user.model');

exports.findAllUser = async (req, res) => {
  try {
    const users = await User.findAll({
      where: {
        status: 'available',
      },
    });
    return res.status(200).json({
      status: 'success',
      messagge: 'user retrieved successfully',
      result: users.length,
      users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      messagge: 'Somethnig went very wrong!',
      error,
    });
  }
};

exports.findOneUser = async (req, res) => {
  try {
    const { user } = req;
    return res.status(200).json({
      status: 'success',
      messagge: 'user retrieved successfully',
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      messagge: 'Somethnig went very wrong!',
      error,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { user } = req;
    const { name, email } = req.body;

    await user.update({ name, email });

    return res.status(200).json({
      status: 'success',
      messagge: 'user update successfully',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      messagge: 'Somethnig went very wrong!',
      error,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { user } = req;
    await user.update({ status: 'not_available' });

    return res.status(200).json({
      status: 'success',
      messagge: 'user delete successfully',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      messagge: 'Somethnig went very wrong!',
      error,
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const userr = await User.create({
      name,
      email,
      password,
      role,
    });
    res.status(201).json({
      status: 'success',
      message: 'User created successfully!',
      userr,
    });
  } catch (error) {
    return res.status(500).json({
      status: 'fail',
      messagge: 'Somethnig went very wrong!',
      error,
    });
  }
};
