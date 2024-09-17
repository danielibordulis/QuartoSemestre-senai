import { Link } from "react-router-dom"
import './NavBar.css'


function NavBar() {
  return (
    <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/musicas">Musicas</Link>
        <Link to="/filmes">Filmes</Link>
        <Link to="/seriados">Seriados</Link>
    </nav>
  )
}

export default NavBar
