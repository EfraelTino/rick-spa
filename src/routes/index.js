import Header from "../templates/Header";
import Home from "../page/Home";
import Character from "../page/Character";
import Error404 from "../page/Error404";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";
import Footer from "../templates/Footer";

const routes = {
    '/' :Home,
    '/:id': Character,
    '/Contact' : 'Contact',

}

const router  = async () =>{
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');
    const footer = null || document.getElementById('footer');

    header.innerHTML = await Header();
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes [route] ? routes[route] : Error404;
    content.innerHTML = await render ();
    footer.innerHTML = await Footer();
}

export default  router;