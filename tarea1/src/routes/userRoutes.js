// routes/userRoutes.js

// const express = require('express');
// const router = express.Router();
// const userController = require('../controllers/userController');

// Rutas para los usuarios
// router.get('/users', userController.getUsers);
// router.get('/users/:id', userController.getUserById);
// router.post('/users', userController.createUser);
// router.put('/users/:id', userController.updateUser);
// router.delete('/users/:id', userController.deleteUser);

// module.exports = router;

//
// src/routes/userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../tarea2/authMiddleware.js '); // Importa el middleware
// debería de funcionar con la siguiente ruta en authMiddleware
// A mi me funcionó con /Users/emmet/Documents/ITESO/PROGRAMACION_DE_APLICACIONES_DE_ESCRITORIO/Tarea-1---Estructura-CRUD-b-sico/tarea2/authMiddleware.js
// ../tarea2/authMiddleware.js 

router.get('/users', authMiddleware, userController.getUsers);
router.get('/users/:id', authMiddleware, userController.getUserById);
router.post('/users', authMiddleware, userController.createUser);
router.put('/users/:id', authMiddleware, userController.updateUser);
router.delete('/users/:id', authMiddleware, userController.deleteUser);

module.exports = router;
