import { MassageCards } from "../../Cards/MassageCards/MassageCards";
import { TherapyCards } from "../../Cards/TherapyCards/TherapyCards";
import { NavBar } from "../../NavBar/NavBar";
import { SectionA } from "./FirstSection/SectionA";
import { Footer } from "./Footer/Footer";
import "./Home.css";
import Newsletter from "./Newsletter/Newsletter";
import { Reviews } from "./Reviews/Reviews";
import home from "../../../images/TEXTURAS/home_new.png"
export const Home = () => {
  return (
    <>
      <main className="main-home">
        <NavBar />
        <section className="section1">
          <img className="img-bg" src={home} alt="" />
          <div className="mejor-mes">
            <h2>MEJOR DEL MES</h2>
            <p>¡Conoce todos los beneficios de este maravilloso masaje y date cuenta de porque es el favorito de muchos!
            </p>
            <button><a href="https://api.whatsapp.com/send/?phone=573135058584&text=Hola%2C+quiero+agendar+un+masaje:+Fluidez+Linfoenergético,+gracias.&type=phone_number&app_absent=0" target="_blank">¡Agendar!</a></button>
          </div>
          <div className="firstSection">
            <SectionA />
            {/* <SectionB /> */} 
          </div>
        </section>
        <section className="section-masaje">
          <div className="services-main">
            <div className="section-masajes">
              <MassageCards />
            </div>

            <TherapyCards />

            {/* <Beautyandstetic /> */}
          </div>
        </section>

        <section className="section2">
          <Reviews />
        </section>

        <div className="newsletter">
          <Newsletter />
        </div>
      </main>

      <Footer />
    </>
  );
};
