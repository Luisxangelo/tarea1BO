const express = require('express');
const router = express.Router();
const userController = require('./../controllers/user.controller');
const userMiddleware = require('./../middlewares/user.middleware');
const validationMiddleware = require('./../middlewares/validation.middelware.');
const authController = require('../controllers/auth.controller');

router.post(
  '/login',
  validationMiddleware.loginUserValidation,
  authController.signIn
);

router
  .get('/', userController.findAllUser)
  .post(
    '/',
    validationMiddleware.userCreateValidation,
    userController.createUser
  );
router
  .use('/:id', userMiddleware.validUser)
  .route('/:id')
  .get(userController.findOneUser)
  .patch(validationMiddleware.updateUserValidation, userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
