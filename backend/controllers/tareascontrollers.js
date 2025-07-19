const asyncHandler = require('express-async-handler');

const getTareas = asyncHandler(async(req, res) => {
    res.status(200).json({ message: 'Get Tareas' });
    });

const createTareas = asyncHandler(async(req, res) => {
    if (!req.body.descripcion) {
        res.status(400)
        throw new Error('por favor teclea una descrip' );
    }

res.status(201).json({ message: `$(req.body.descripcion)creada` });
});

const updateTareas = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `Tarea ${req.params.id}modificada` });
});

const deleteTareas = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `Tarea ${req.params.id}eliminada` });
});


module.exports = {
    getTareas,
    createTareas,
    updateTareas,
    deleteTareas
}

