//2 - links com react router
import "./NavBar.css"
import { Link, NavLink } from "react-router-dom"
const NavBar = () => {
  return (
    <nav>
        {/*<Link to="/" >Home</Link>
        <Link to="/about" >Sobre</Link>*/}
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/about" >Sobre</NavLink>
    </nav>
  )
}

export default NavBar