const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/usersModels')

const protect = asyncHandler(async (req, res, next) => {
    let token 

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            //obtenemos el token 
            token = req.headers.authorization.split(' ')[1]

            //verificamos el token para que sea valido (firma, caducidad)
            const decoded = jwt.verify(token, processenv.JWT_SECRET)

            //datos del usuario del token a traves del id usuario que esta en el paylod
            //para que cualquier endpoint que use prote tenga acceso a esos datos
            req.user = await User.findById(decoded.id_usuario)

            //contunuamos con un next 
            next()


        }catch(error){
            console.log(error)
            res.status(401)
            throw new Error('Acceso no autorizado')
        }
    }

    if(!token){
        res.status(401)
        throw new Error('acceso no autorizado, no se proporciono el token')
    }
})

module.exports = protect