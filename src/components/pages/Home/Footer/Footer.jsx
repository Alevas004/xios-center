import "./Footer.css";
import LOGOWEBNAV from "../../../../images/LOGOWEBNAV.png";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <div className="div-father">
        <div className="f-img">
          <NavLink to={"/servicios"}>
            <img src={LOGOWEBNAV} alt="logo xio" />
          </NavLink>
        </div>
        <div className="f-navbar">
          <ul>
            <NavLink to={"/"}>
              <li>Inicio</li>
            </NavLink>
            <NavLink to={"/servicios"}>
              <li>Servicios</li>
            </NavLink>
            <NavLink to={"/tienda"}>
              <li>Tienda</li>
            </NavLink>
          </ul>
        </div>

        <div className="f-times">
          <h4>Horarios</h4>
          <ul>
            <li>Servicios</li>
            <li>Despachos</li>
          </ul>
        </div>
        <div className="f-social">
          <div>
          <h4>Encuentranos en:</h4>
          </div>
          <div className="social-icons">
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
        </div>
      </div>
    </footer>
  );
};
