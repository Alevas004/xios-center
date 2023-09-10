import { NavBar } from "../../NavBar/NavBar";
import { Footer } from "../Home/Footer/Footer";
import "./ContactUs.css";

export const Contactus = () => {
  return (
    <>
      <NavBar />
      <h2>Contáctanos</h2>

      <div className="contact-bg">
        <div className="contact-main">
          <div className="contact-img">
            <img src="" alt="no sé algo" />
          </div>
          

          <form action="" className="form-main">
            <h3>¿Tienes una duda?</h3>
            <div>
              <label htmlFor="contact">Nombre</label>
              <input type="text" name="" id="contact" />
            </div>
            <div>
              <label htmlFor="email">Correo</label>
              <input type="email" name="" id="email" />
            </div>
            <div>
              <label htmlFor="text">Explicanos</label>
              <input type="" name="" id="text" />
            </div>

            <button type="button">Enviar</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};
