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

exports.userCreateValidation = [
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

exports.repairsCreateValidation = [
  body('date').notEmpty().withMessage('date is Requered'),
  body('motorsNumber')
    .notEmpty()
    .withMessage('motorsNumber is requered')
    .isLength({ min: 10 })
    .withMessage('Description must be at least 10 characers long'),
  body('description').notEmpty().withMessage('motorsNumberis requered'),
  validFields,
];

exports.loginUserValidation = [
  body('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Email must be a correct format'),
  body('password')
    .isLength({ min: 8 })
    .withMessage('Password must have a least 8 characters')
    .matches(/[a-zA-Z]/)
    .withMessage('Password must have cotain a least one letter'),
  validFields,
];
