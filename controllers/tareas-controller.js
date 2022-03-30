const Tarea = require('../models/tarea');

function createTarea(req, res) {
    console.log('Creando tarea...');
    console.log(req.body);
    let tarea =  new Tarea({
        id: req.body.id,
        name: req.body.name,
        puntos: req.body.puntos,
        materia: req.body.materia,
        fechaEntrega: req.body.fechaEntrega
    });
    tarea.save((error, result) => {
        if(error) {
            return res.status(500).json({
                error: true,
                message: "Server Down",
                code: 0
            });
        }
        if(!result){
            return res.status(400).json({
                error: true,
                message: "Client Error",
                code: 10
            });
        }
        return res.status(200).json({
            error: false,
            message: "OK",
            code: 20,
            data: result
        });
    });
}

function retrieveTarea(req, res) {
    
}

function findAllTareas(req, res) {
    console.log('Buscando todas las tareas...');
    console.log(req.body);
    
    Tarea.find({}, (error, result) => {
        if(error) {
            return res.status(500).json({
                error: true,
                message: "Server Down",
                code: 0
            });
        }
        if(!result){
            return res.status(400).json({
                error: true,
                message: "Client Error",
                code: 10
            });
        }
        return res.status(200).json({
            error: false,
            message: "OK",
            code: 20,
            data: result
        });
    });
}

function updateTarea(req, res) {
    console.log('Actualizando tarea...');
    console.log(req.body);

    const tareaId = req.params.id;
    const newTarea = req.body;

    Tarea.findByIdAndUpdate(tareaId, newTarea, {new: true}, (error, result) => {
        if(error) {
            return res.status(500).json({
                error: true,
                message: "Server Down",
                code: 0
            });
        }
        if(!result){
            return res.status(400).json({
                error: true,
                message: "Client Error",
                code: 10
            });
        }
        return res.status(200).json({
            error: false,
            message: "OK",
            code: 20,
            data: result
        });
    });
    
}

function deleteTarea(req, res) {

}

module.exports = {createTarea, retrieveTarea, findAllTareas, updateTarea, deleteTarea};