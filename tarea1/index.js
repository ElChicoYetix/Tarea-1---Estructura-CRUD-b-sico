// app.js

const express = require('express');
const app = express();
const userRoutes = require('./src/routes/userRoutes');

app.use(express.json());

// Rutas de usuarios
app.use('/api', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
