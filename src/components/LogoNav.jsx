import "../styles/Navbar.css"
import logo from "../assets/images/logo.webp"

function LogoNav (){
  return (
    <>
    <nav className="logonav-container">
      <div className="nav-logo-container">
        <img className="navbar-logo" src={logo} alt="logo"/>
      </div>
    </nav>
    </>
  )
}

export default LogoNav;