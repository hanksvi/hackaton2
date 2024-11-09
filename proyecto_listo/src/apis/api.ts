import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:8080", // usa la URL de la API definida en .env
  headers: {
    "Content-Type": "application/json",
},
});

// Opcional: Puedes agregar interceptores o configuraciones adicionales aquí si lo necesitas

export default api;