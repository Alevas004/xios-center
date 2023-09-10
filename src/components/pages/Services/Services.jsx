import { Beautyandstetic } from "../../Cards/Beautyandstetic/Beautyandstetic";
import { MassageCards } from "../../Cards/MassageCards/MassageCards";
import { TherapyCards } from "../../Cards/TherapyCards/TherapyCards";
import { NavBar } from "../../NavBar/NavBar";
import { Footer } from "../Home/Footer/Footer";
import "./Services.css";

export const Services = () => {
  return (
    <section className="section-masaje">
      <NavBar />
      <div className="services-main">
        <div className="section-masajes">
          <MassageCards />
        </div>


        <TherapyCards />

        {/* <Beautyandstetic /> */}
      </div>
      <Footer />
    </section>
  );
};
