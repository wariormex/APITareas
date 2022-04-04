require('dotenv').config();
const cors = require('cors')
const express = require ('express');
const mongoose = require('mongoose');

//Creacion del server
const app = express();
const port = 4000;

//Coneccion a la db
mongoose.connect(process.env.DATABASE_URL_CLOUD, {useNewUrlParser: true});
const db = mongoose.connection;

//Manejo de eventos
db.on('error', (error) => console.error(error));
db.once('open', () => console.log("Conectado a la base de datos"));

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Rutas
app.use('/tareas', require('./routes/tareas-routes'));

//Inciar el server
app.listen(port,() => console.log("Server is listening..."));