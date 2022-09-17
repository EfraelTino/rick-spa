import router from './routes';

// Escuchamos nuestra app
window.addEventListener('load', router);

// Escuchamos a nuestra ruta en este caso el hash

window.addEventListener('hashchange', router)