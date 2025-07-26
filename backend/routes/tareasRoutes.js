const express = require('express');
const router = express.Router();
const {getTareas, createTareas, updateTareas, deleteTareas} = require('../controllers/tareascontrollers');    
const protect = require('../middleware/autMiddleware')

router.get('/', protect, getTareas); 
router.post('/', protect, createTareas)

router.put('/:id', protect, updateTareas)
router.delete('/:id', protect, deleteTareas)

module.exports = router;