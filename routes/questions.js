const express = require('express');
const router = express.Router();

const questionsController = require('../controllers/questions_controller');

router.get('/', questionsController.viewAllQuestion);
router.get('/:id', questionsController.viewQuestion);
router.post('/create', questionsController.createQuestion);
router.post('/:id/options/create', questionsController.createOptions);
router.delete('/:id/delete', questionsController.deleteQuestion)

module.exports = router;
