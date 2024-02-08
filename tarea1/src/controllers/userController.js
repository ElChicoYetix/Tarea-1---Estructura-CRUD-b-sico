// controllers/userController.js

const axios = require('axios');
require('dotenv').config();

const JSON_PLACEHOLDER_URL = process.env.JSON_PLACEHOLDER_URL;

// Obtener todos los usuarios
exports.getUsers = async (req, res) => {
  try {
    const response = await axios.get(`${JSON_PLACEHOLDER_URL}/users`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
};

// Obtener un usuario por su ID
exports.getUserById = async (req, res) => {
  try {
    const response = await axios.get(`${JSON_PLACEHOLDER_URL}/users/${req.params.id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuario' });
  }
};

// Crear un nuevo usuario
exports.createUser = async (req, res) => {
  try {
    const response = await axios.post(`${JSON_PLACEHOLDER_URL}/users`, req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear usuario' });
  }
};

// Actualizar un usuario existente
exports.updateUser = async (req, res) => {
  try {
    const response = await axios.put(`${JSON_PLACEHOLDER_URL}/users/${req.params.id}`, req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar usuario' });
  }
};

// Eliminar un usuario
exports.deleteUser = async (req, res) => {
  try {
    await axios.delete(`${JSON_PLACEHOLDER_URL}/users/${req.params.id}`);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar usuario' });
  }
};
