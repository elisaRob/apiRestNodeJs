const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact.controller')

router.post('/',contactController.create);
router.get('/',contactController.getAll);
router.get('/:idContact',contactController.getById);
router.patch('/:id',contactController.updateId);
router.delete('/delete/:id',contactController.deleteId)

module.exports = router