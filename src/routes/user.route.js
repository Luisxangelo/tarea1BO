const express = require('express');
const router = express.Router();
const userController = require('./../controllers/user.controller');
const userMiddleware = require('./../middlewares/user.middleware');
const validationMiddleware = require('./../middlewares/validation.middelware.');
const authController = require('../controllers/auth.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post(
  '/login',
  validationMiddleware.loginUserValidation,
  authController.signIn
);
router.post(
  '/singUp',
  validationMiddleware.loginUserValidation,
  authController.singUp
);

router.use(authMiddleware.protect);
router.post(
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
