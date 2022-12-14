import getData from "../utils/getData";
import getHash from "../utils/getHash";
const Character = async () =>{

    const id = await getHash ();
    const character = await getData(id);

    const view = `
        <div class="Characters-inner">
            <article class="Characters-card"> 
                <img src="${character.image}" alt="${character.name}">
                <h2>${character.name}</h2>
            </article>
            <article class="Characters-card">
                <h3><strong>Episodes: </strong><span>${character.episode.length}</span></h3>
                <h3><strong>Status:       </strong>   <span>${character.status}</span></h3>
                <h3><strong>Species:      </strong>  <span>${character.species}</span></h3>
                <h3><strong>Gender:       </strong>   <span>${character.gender}</span></h3>
                <h3><strong>Origin:       </strong>   <span>${character.origin.name}</span></h3>
                <h3><strong>Last Location:</strong><span>${character.location.name}</span></h3>
            </article>
        </div>
    `;
    return view;
}

export default Character;
