const { where } = require('sequelize');
const Repair = require('../models/repair.model');

exports.findAllRepair = async (req, res) => {
  try {
    const repairs = await Repair.findAll({
      where: {
        status: 'pending',
      },
    });
    return res.status(200).json({
      status: 'success',
      messagge: 'user retrieved successfully',
      result: repairs.length,
      repairs,
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
exports.findOneRepair = async (req, res) => {
  try {
    const { repair } = req;
    return res.status(200).json({
      status: 'success',
      messagge: 'user retrieved successfully',
      repair,
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

exports.updateRepair = async (req, res) => {
  try {
    const { repair } = req;
    const { status } = req.body;

    await repair.update({ status });

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

exports.deleteRepair = async (req, res) => {
  try {
    const { repair } = req;
    await repair.update({ status: 'cancelled' });

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

exports.createDate = async (req, res) => {
  try {
    const { date, userid } = req.body;
    const repairss = await Repair.create({
      date,
      userid,
    });
    res.status(201).json({
      status: 'success',
      message: 'User created successfully!',
      repairss,
    });
  } catch (error) {
    return res.status(500).json({
      status: 'fail',
      messagge: 'Somethnig went very wrong!',
      error,
    });
  }
};
