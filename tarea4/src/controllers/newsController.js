// newsController.js
const axios = require('axios');

// Función para obtener noticias según la búsqueda
async function getNews(query) {
  try {
    const apiKey = process.env.NEWS_API_KEY; // Obtén tu API KEY desde .env
    const apiUrl = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;
    const response = await axios.get(apiUrl);
    return response.data.articles; // Devuelve los artículos
  } catch (error) {
    console.error('Error al obtener noticias:', error.message);
    return []; // Maneja el error adecuadamente en tu aplicación
  }
}

module.exports = { getNews };
