import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import LOGOWEB from "../../images/LOGOWEBNAVWHITE2.png";

export const NavBar = () => {
  return (
    <div className="navbar-bg">
      <header className="header-main">
        <div className="logo-navbar">
          <Link to={"/"}>
            <img src={LOGOWEB} alt="Xio's" />
          </Link>
        </div>
        <input type="checkbox" id="menu-bar"></input>
        <label htmlFor="menu-bar">
          <i className="bx bx-menu"></i>
        </label>
        <nav className="nav-position">
          <ul className="nav-options">
            <il className="lis">
              <NavLink to={"/"} className="links">
                <h4>Inicio</h4>
              </NavLink>
            </il>
            {/* <il className="lis">
              <NavLink to={"/servicios"}>
                <h4>Servicios</h4>
              </NavLink>
            </il> */}
            <il className="lis">
              <NavLink to={"/tienda"}>
                <h4>Tienda</h4>
              </NavLink>
            </il>
            <il className="lis">
              {/* <NavLink to={"/contactanos"}>
                <h4>Contáctanos</h4>
              </NavLink> */}
              {/*//! TEMPORAL */}
              <a
                href="https://api.whatsapp.com/send/?phone=573135058584&text=Hola%2C+tengo+una+duda+acerca+de+ +"
                target="_blanc"
              >
                {" "}
                <h4>Contáctanos</h4>
              </a>
            </il>
            {/* <il className="lis">
              <NavLink to={"/acercadenosotros"}>
                <h4>Conocenos</h4>
              </NavLink>
            </il> */}
          </ul>
        </nav>
        <div className="social-navbar">
        <a
              href="https://www.instagram.com/xiomarasanchezterapeuta/?hl=es"
              target="_blanc"
            >
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="https://api.whatsapp.com/send/?phone=573135058584&text=Hola%2C+tengo+una+duda+acerca+de+%20+" target="_blanc">
            <i class='bx bxl-whatsapp'></i>
            </a>
        </div>
      </header>
    </div>
  );
};
