import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Musica from "../pages/Musica";
import Filmes from "../pages/Filmes";
import Seriados from "../pages/Seriados";

const router = createBrowserRouter([
    {path: "/",element: <Home/>},
    {path: "/musicas",element: <Musica/>},
    {path: "/filmes",element: <Filmes/>},
    {path: "/seriados",element: <Seriados/>},
])

export default router;