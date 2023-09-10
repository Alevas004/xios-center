import { useModal } from "../../Hooks/useModal";
import { Modal } from "../../Modals/Modal";
import { Craneo } from "../../Modals/ServicesModals/CRANEO";
import { Gp } from "../../Modals/ServicesModals/GP";
import { Rp } from "../../Modals/ServicesModals/RP";
import { Watsu } from "../../Modals/ServicesModals/WATSU";
import "./TherapyCards.css";
import watsu from "../../../images/cards/watsu.png";
import gimnasiapasiva from "../../../images/cards/terapia_gimnasiapasiva.png";
import craneo from "../../../images/cards/terapia_craneofacial.png";
import podal from "../../../images/cards/terapia_reflexologiapodal.png";
import pasiva_hover from "../../../images/cards/terapia_gimnasiapasiva_hover.mp4";
import reflexodologia_hover from "../../../images/cards/terapia_reflexologiapodal_hover.mp4";
import watsu_hover from "../../../images/cards/watsu_hover.mp4";

export const TherapyCards = () => {
  const [isOpenGP, openModalGP, closeModalGP] = useModal();
  const [isOpenWATSU, openModalWATSU, closeModalWATSU] = useModal();
  const [isOpenRP, openModalRP, closeModalRP] = useModal();
  const [isOpenCRANEO, openModalCRANEO, closeModalCRANEO] = useModal();

  return (
    <section className="cards-section">
      <h2>Terapias</h2>
      <div className="cards-main">
        <div className="Card">
          <div className="div-separador_card">
            <h3>Gimnasia Pasiva</h3>
            <p className="subtitle">(Recuperación Funcional)</p>
            <div className="image">
              <img src={gimnasiapasiva} alt="imagen de la terapia" />
              <video src={pasiva_hover} autoPlay loop controls type="video/mp4"></video>
            </div>
            <div className="texts">
              <p>
                Experimenta una terapia de recuperación funcional que estimula y
                fortalece los músculos de forma suave y segura.
              </p>
              <p>
                <span>Duración: </span> 60 minutos aprox.
              </p>
              <p>
                <span>Domicilio: </span> <mark>Si</mark> / No
              </p>
            </div>
          </div>
          <div className="btn-div">
            <button>
              <a
                href="https://api.whatsapp.com/send/?phone=573135058584&text=Hola%2C+quiero+agendar+una+terapia de:+Gimnasia+Pasiva,+gracias.&type=phone_number&app_absent=0"
                target="_blanc"
              >
                Reservar
              </a>
            </button>
            <button onClick={openModalGP}>Más detalles</button>
          </div>
        </div>
        <Modal isOpen={isOpenGP} closeModal={closeModalGP}>
          <Gp />
        </Modal>
        <div className="Card">
          <div className="div-separador_card">
            <h3>Terapia Agua</h3>
            <p className="subtitle">(Terapia Watsu)</p>
            <div className="image">
              <img src={watsu} alt="imagen de la terapia" />
              <video src={watsu_hover} autoPlay loop controls type="video/mp4"></video>
            </div>
            <div className="texts">
              <p>
                Experimenta una terapia acuática relajante que combina
                movimientos y estiramientos suaves.
              </p>
              <p>
                <span>Duración: </span>60 minutos
              </p>
              <p>
                <span>Domicilio: </span> <mark>Si</mark> / No
              </p>
            </div>
          </div>

          <div className="btn-div">
            <button>
              <a
                href="https://api.whatsapp.com/send/?phone=573135058584&text=Hola%2C+quiero+agendar+una+terapia:+Terapia+Watsu,+gracias.&type=phone_number&app_absent=0"
                target="_blanc"
              >
                Reservar
              </a>
            </button>
            <button onClick={openModalWATSU}>Más detalles</button>
          </div>
        </div>
        <Modal isOpen={isOpenWATSU} closeModal={closeModalWATSU}>
          <Watsu />
        </Modal>
        <div className="Card">
          <div className="div-separador_card">
            <h3>Reflexología Energética</h3>
            <p className="subtitle">(Reflexología Podal)</p>
            <div className="image">
              <img src={podal} alt="imagen de la terapia" />
              <video src={reflexodologia_hover} autoPlay loop controls type="video/mp4" ></video>
            </div>
            <div className="texts">
              <p>
                Estimulación de puntos en los pies para promover el equilibrio y
                la relajación del cuerpo.
              </p>
              <p>
                <span>Duración: </span>40 minutos
              </p>
              <p>
                <span>Domicilio: </span> <mark>Si</mark> / No
              </p>
            </div>
          </div>
          <div className="btn-div">
            <button>
              <a
                href="https://api.whatsapp.com/send/?phone=573135058584&text=Hola%2C+quiero+agendar+una+terapia+de:+Reflexología+Energética,+gracias.&type=phone_number&app_absent=0"
                target="_blanc"
              >
                Reservar
              </a>
            </button>
            <button onClick={openModalRP}>Más detalles</button>
          </div>
        </div>
        <Modal isOpen={isOpenRP} closeModal={closeModalRP}>
          <Rp />
        </Modal>

        <div className="Card">
          <div className="div-separador_card">
            <h3>Al estilo Lavanda</h3>
            <p className="subtitle">(Terapia Craneofacial)</p>
            <div className="image">
              <img src={craneo} alt="imagen de la terapia" />
              {/* <img src={craneo} alt="imagen de la terapia" /> */}
            </div>
            <div className="texts">
              <p>
                {" "}
                Disfruta de un masaje especializado que alivia la tensión y
                promueve la relajación profunda en cabeza, cara y cuello.
              </p>
              <p>
                <span>Duración: </span>60 minutos aprox.
              </p>
              <p>
                <span>Domicilio: </span> <mark>Si</mark> / No
              </p>
            </div>
          </div>
          <div className="btn-div">
            <button>
              <a
                href="https://api.whatsapp.com/send/?phone=573135058584&text=Hola%2C+quiero+agendar+una+terapia:+Al+estilo+Lavanda,+gracias.&type=phone_number&app_absent=0"
                target="_blanc"
              >
                Reservar
              </a>
            </button>
            <button onClick={openModalCRANEO}>Más detalles</button>
          </div>
        </div>
        <Modal isOpen={isOpenCRANEO} closeModal={closeModalCRANEO}>
          <Craneo />
        </Modal>
      </div>
    </section>
  );
};
