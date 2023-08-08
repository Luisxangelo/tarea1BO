const express = require('express');
const router = express.Router();
const userController = require('./../controllers/user.controller');
const userMiddleware = require('./../middlewares/user.middleware');
const validationMiddleware = require('./../middlewares/validation.middelware.');
router
  .get('/', userController.findAllUser)
  .post('/', validationMiddleware.CreateValidation, userController.createUser);
router
  .use('/:id', userMiddleware.validUser)
  .route('/:id')
  .get(userController.findOneUser)
  .patch(validationMiddleware.updateUserValidation, userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
