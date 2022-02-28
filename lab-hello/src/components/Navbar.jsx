import logo from "../../src/images/ironhack-logo-xs.png"
import menu from "../../src/images/menu-top-xs.png"

export default function Navbar() {
    return(
        <nav>
            <div className="nav-bar">
             <img src={logo} alt="logo"></img>
             <img src={menu} alt="menu"></img>
            </div>
        </nav>
    )
}