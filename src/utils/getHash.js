const getHash = () =>
// El hash es el contenido de una URL 
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';

export default getHash;

