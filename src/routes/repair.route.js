const express = require('express');
const router = express.Router();
const dateController = require('./../controllers/repair.controller');
const dateMiddleware = require('./../middlewares/repair.middleware');

router
  .get('/', dateController.findAllRepair)
  .post('/', dateController.createDate);
router
  .use('/:id', dateMiddleware.validRepair)
  .route('/:id')
  .get(dateController.findOneRepair)
  .patch(dateController.updateRepair)
  .delete(dateController.deleteRepair);

module.exports = router;
