const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/usersModels')

const protect = asyncHandler(async (req, res, next) => {
  let token

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // obtenemos el token
      token = req.headers.authorization.split(' ')[1]

      // verificamos el token
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      // buscamos el usuario con el ID del payload
      req.user = await User.findById(decoded.id).select('-password')

      if (!req.user) {
        res.status(401)
        throw new Error('Usuario no encontrado')
      }

      next()
    } catch (error) {
      console.error('Error al verificar token:', error.message)
      res.status(401)
      throw new Error('Acceso no autorizado')
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('Acceso no autorizado, no se proporcionó token')
  }
})

module.exports = protect
