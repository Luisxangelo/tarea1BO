const express = require('express');
const router = express.Router();
const dateController = require('./../controllers/repair.controller');
const dateMiddleware = require('./../middlewares/repair.middleware');
const validationMiddleware = require('../middlewares/validation.middelware.');
const authMiddleware = require('../middlewares/auth.middleware');

router.post(
  '/',
  validationMiddleware.repairsCreateValidation,
  dateController.createDate
);
router.use(authMiddleware.restrictTo('employee'));
router
  .get('/', dateController.findAllRepair)
  .use('/:id', dateMiddleware.validRepair)
  .route('/:id')
  .get(dateController.findOneRepair)
  .patch(dateController.updateRepair)
  .delete(dateController.deleteRepair);

module.exports = router;
