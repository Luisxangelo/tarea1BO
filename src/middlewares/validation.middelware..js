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

exports.CreateValidation = [
  body('name').notEmpty().withMessage('Name is Requered'),
  body('email')
    .notEmpty()
    .withMessage('Email is requered')
    .isEmail()
    .withMessage('email must be a correct format'),
  body('currentPassword')
    .isLength({ min: 8 })
    .withMessage('Password must have a least 8 characters')
    .matches(/[a-zA-Z]/)
    .withMessage('Password must have cotain a least one letter'),
  validFields,
];
