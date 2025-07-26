const express = require('express');
const router = express.Router();
const {misDatos, login, registrar} = require('../controllers/usersController');    
const protect = require('../middleware/autMiddleware')

router.get('/datos',protect, misDatos); 
router.post('/login', login)
router.post('/', registrar)

module.exports = router;