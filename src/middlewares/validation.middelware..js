const { body, validationResult } = require('express-validator');

const validFields = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(404).json({
      status: 'error',
      errors: errors.mapped(),
    });
  }
  next();
};
exports.updateUserValidation = [
  body('name').notEmpty().withMessage('Name is Requered'),
  body('email').notEmpty().withMessage('Email is Required'),
  validFields,
];
