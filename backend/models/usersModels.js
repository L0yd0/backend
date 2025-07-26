const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'por favor teclea tu nombre']
    },
    email: {
        type: String,
        required: [true, 'por favor teclea tu email'],
        unique: true
    },
    password:{
    type:String,
    required: [true, 'por favor teclea tu password']
    },
    esAdministrador: {
        type: Boolean,
        default: false
    }
}, {
        timestamps: true
})

module.exports = mongoose.model('User', userSchema)