const express = require('express');
const router = express.Router();

const entityController = require('../controllers/entity.controller');

router.get('', entityController.getAllEntities);
router.get('/:id', entityController.getEntityById);
router.post('', entityController.addEntity);
router.put('/:id', entityController.updateEntity);
router.delete('/:id', entityController.deleteEntity);

module.exports = router;