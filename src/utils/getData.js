// Crearemos la logica para traer la api
const API = 'https://rickandmortyapi.com/api/character/';

// Generar nuestra funcion para traer los datos de la api
// nuestra funcion tiene que tener un parametro de id para que lo traiga por el id si no lo traeria por defecto

const getData = async (id) => {
    const apiURL = id ? `${API}${id}` :API; 
    try{    
        const response = await fetch(apiURL);
        const data = await response.json();
        return data;
    }catch(error){
        console.log('Fetch error', error);
    }
};

export default getData;