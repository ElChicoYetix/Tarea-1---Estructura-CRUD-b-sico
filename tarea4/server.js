require('dotenv').config(); // Esta línea carga las variables de entorno

const express = require('express');
const mongoose = require('mongoose');
const { engine } = require('express-handlebars');
const path = require('path');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session'); // Asegúrate de tener instalado express-session

const routes = require('./src/routes');
const User = require('./src/models/User'); // Requiere tu modelo de usuario

const app = express();

// Configura Handlebars como el motor de plantillas
app.engine('handlebars', engine({
  layoutsDir: path.join(__dirname, 'src', 'views', 'layouts'),
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'src', 'views', 'partials'));

// Parsea los cuerpos de las solicitudes entrantes en formato URL-encoded
app.use(express.urlencoded({ extended: true }));

// Configura el middleware de sesión de Express
app.use(session({
  secret: 'tu secreto aquí', // Reemplaza 'tu secreto aquí' con una cadena de texto secreta para tu aplicación
  resave: false,
  saveUninitialized: true
}));

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conexión a MongoDB exitosa'))
  .catch(err => console.error('Error al conectar a MongoDB', err));

// Configura middleware y rutas aquí
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

// Inicializa Passport y la sesión de Passport
app.use(passport.initialize());
app.use(passport.session());

// Configura la estrategia local de Passport
passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username })
      .then(user => {
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (user.password !== password) { // Aquí deberías verificar la contraseña de manera segura
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      })
      .catch(err => done(err));
  }
));

const port = process.env.PORT || 3000; // Puerto para el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
