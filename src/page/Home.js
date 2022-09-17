import getData from "../utils/getData";
import getHash from "../utils/getHash";

const Home = async () => {
    // Hacemos el llamado a la api
    const characters = await getData();
    const view = `
    
    <img src="../../src/img/Vector.svg" alt="curvas" width="100%">
    <img src="../../src/img/Img.svg" alt="rick-morty" width="100%">
    <h1 class="title">Series characters</h1>
    <div class="Characters"> 
    
    ${characters.results.map(character => `
    <article class="Characters-item"> 
            <a href="#/${character.id}/"> 
            <img src = ${character.image} alt=${character.name}>
            <h2>${character.name}</h2>
            </a>
    </article>
        `).join('')}
        
    </div>
    `;
    return view;
}

export default Home;