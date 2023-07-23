const Repair = require('../models/repair.model');

exports.validRepair = async (req, res, next) => {
  try {
    const { id } = req.params;
    const repair = await Repair.findOne({
      where: {
        id,
        status: 'pending',
      },
    });
    if (!user) {
      return res.status(404).json({
        status: 'error',
        messagge: `user with id ${id} not found!`,
      });
    }
    req.repair = repair;
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      messagge: 'Somethnig went very wrong!',
      error,
    });
  }
};
