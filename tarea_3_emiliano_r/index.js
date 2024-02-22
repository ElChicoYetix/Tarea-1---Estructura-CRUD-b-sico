const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();

const app = express();
app.use(express.json());

// Rutas
app.use('/api', require('./src/routes'));

// Puerto
const PORT = process.env.PORT || 3000;

// Conexión a la base de datos y inicio del servidor
async function start() {
    try {
        await mongoose.connect(process.env.DATASET);
        app.listen(PORT, () => {
            console.log('Conectado y corriendo en el puerto ' + PORT);
        });
    } catch (error) {
        console.error('Error al conectarse a la base de datos:', error);
    }
}

start();
