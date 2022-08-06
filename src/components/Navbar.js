import "./Navbar.css"
import { Link, NavLink } from "react-router-dom"


const Navbar = () => {
  return (
    <nav>
      <h1>Loja</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">Adicionar Produto</NavLink>
    </nav>
  )
}

export default Navbar