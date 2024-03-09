const router = require('express').Router();
const path = require('path');
const axios = require('axios');
const passport = require('passport'); // Requiere Passport

// Ruta raíz para mostrar el campo de búsqueda
router.get('/', (req, res) => {
    res.render('home', {
        title: 'Titulo dinamico'
    });
});

router.post('/search', (req, res) => {
  const query = req.body.query; 
  const date = new Date();
  date.setDate(date.getDate() - 1);
  const dateString = date.toISOString().split('T')[0];
  const url = 'https://newsapi.org/v2/everything?' +
              'q=' + query + '&' +
              'from=' + dateString + '&' +  // Agrega esta línea
              'sortBy=popularity&' +
              'apiKey=' + process.env.NEWS_API_KEY;

  axios.get(url)
      .then(response => {
          res.render('news', { articles: response.data.articles });
      })
      .catch(error => {
          console.log(error);
      });
});

// Ruta para la página "Acerca de"
router.get('/about', (req, res) => {
    res.render('about');
});

// Ruta GET para la página de inicio de sesión
router.get('/login', (req, res) => {
    res.render('login');
});

// Ruta POST para manejar el inicio de sesión
router.post('/login', passport.authenticate('local', {
    successRedirect: '/', // Redirige a la página de inicio si el inicio de sesión es exitoso
    failureRedirect: '/login' // Redirige de nuevo a la página de inicio de sesión si el inicio de sesión falla
}));

// Ruta GET para la página de registro
router.get('/register', (req, res) => {
  res.render('register');
});

// Ruta POST para manejar el registro
router.post('/register', (req, res) => {
  // Aquí va la lógica para manejar el registro
});


/*
router.get('/login-success', (req, res) => {
    res.render('login-success');
});
*/
// Ruta POST para manejar el inicio de sesión
router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      // Aquí puedes manejar el error, el usuario y la información como prefieras
      res.redirect('/login-success'); // Redirige a la página de éxito del inicio de sesión
    })(req, res, next);
  });

module.exports = router;
