import { useModal } from "../../Hooks/useModal";
import { Modal } from "../../Modals/Modal";
import { Dlm } from "../../Modals/ServicesModals/DLM";
import { Mpos } from "../../Modals/ServicesModals/MPOS";
import { Mpre } from "../../Modals/ServicesModals/MPRE";
import { Mt } from "../../Modals/ServicesModals/MT";
import { Mthai } from "../../Modals/ServicesModals/MTHAI";
import terapeutico from "../../../images/cards/masaje_terapeutico.png";
import masaje_prenatal from "../../../images/cards/masaje_prenatal.png"
import postparto from "../../../images/cards/masaje_postparto.png"
import drenaje from "../../../images/cards/masaje_drenajelinfatico.png"
import thai from "../../../images/cards/masaje_thai.png"
import terapeutico_hover from "../../../images/cards/masaje_terapeutico_hover.mp4"
import drenaje_hover from "../../../images/cards/masaje_drenajelinfatico_hover.mp4"
import postparto_hover from "../../../images/cards/masaje_postparto_hover.mp4"
import prenatal_hover from "../../../images/cards/masaje_prenatal_hover.mp4"






import "./MassageCards.css";

export const MassageCards = () => {
  const [isOpenDLM, openModalDLM, closeModalDLM] = useModal(false);
  const [isOpenMT, openModalMT, closeModalMT] = useModal(false);
  const [isOpenMTHAI, openModalMTHAI, closeModalMTHAI] = useModal(false);
  const [isOpenMPRE, openModalMPRE, closeModalMPRE] = useModal(false);
  const [isOpenMPOS, openModalMPOS, closeModalMPOS] = useModal(false);

  return (
    <section className="cards-section">
      <h2>Masajes Terapéuticos</h2>
      <div className="cards-main">
        <div className="Card">
          <div className="div-separador_card">
            <h3>Fluidez Linfoenergética</h3>
            <p className="subtitle">(Drenaje Linfático Manual)</p>
            <div className="image">
              <img
                src={drenaje}
                alt="imagen de la terapia"
              />
              <video src={drenaje_hover} autoPlay loop controls type="video/mp4"></video>
            </div>
            <div className="texts">
              <p>
                Estimula el sistema linfático para mejorar la circulación y
                promover la desintoxicación.
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
                href="https://api.whatsapp.com/send/?phone=573135058584&text=Hola%2C+quiero+agendar+un+masaje:+Fluidez+Linfoenergético,+gracias.&type=phone_number&app_absent=0"
                target="_blanc"
              >
                Reservar
              </a>
            </button>
            <button onClick={openModalDLM}>Más detalles</button>
          </div>
        </div>
        <Modal isOpen={isOpenDLM} closeModal={closeModalDLM}>
          <Dlm />
        </Modal>

        <div className="Card">
          <div className="div-separador_card">
            <h3>Masaje Armonía</h3>
            <p className="subtitle">(Masaje terapeutico)</p>
            <div className="image">
              <img src={terapeutico} alt="imagen de la terapia" />
              <video src={terapeutico_hover} autoPlay loop controls type="video/mp4"></video>
            </div>
            <div className="texts">
              <p>
                Alivia dolores musculares y tensiones mediante manipulación de
                tejidos profundos.
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
                href="https://api.whatsapp.com/send/?phone=573135058584&text=Hola%2C+quiero+agendar+un+masaje:+Masaje+Armonía,+gracias.&type=phone_number&app_absent=0"
                target="_blanc"
              >
                Reservar
              </a>
            </button>
            <button onClick={openModalMT}>Más detalles</button>
          </div>
        </div>
        <Modal isOpen={isOpenMT} closeModal={closeModalMT}>
          <Mt />
        </Modal>

        <div className="Card">
          <div className="div-separador_card">
            <h3>Equilibrio Thai</h3>
            <p className="subtitle">(Masaje Tailandés)</p>
            <div className="image">
              <img src={thai} alt="imagen de la terapia" />
              <video src={thai} autoPlay loop controls type="video/mp4" ></video>
            </div>
            <div className="texts">
              <p>
                {" "}
                Combina presiones, estiramientos y movimientos de yoga para
                mejorar la energía y la flexibilidad.
              </p>
              <p>
                <span>Duración:</span>90 minutos aprox.
              </p>
              <p>
              <span>Domicilio: </span> <mark>Si</mark> / No
              </p>
            </div>
          </div>
          <div className="btn-div">
            <button>
              <a
                href="https://api.whatsapp.com/send/?phone=573135058584&text=Hola%2C+quiero+agendar+un+masaje:+Equilibrio+Thai,+gracias.&type=phone_number&app_absent=0"
                target="_blanc"
              >
                Reservar
              </a>
            </button>
            <button onClick={openModalMTHAI}>Más detalles</button>
          </div>
        </div>
        <Modal isOpen={isOpenMTHAI} closeModal={closeModalMTHAI}>
          <Mthai />
        </Modal>
        <div className="Card">
        <div className="div-separador_card">
          <h3>Serenidad Maternal</h3>
          <p className="subtitle">(Masaje prenatal)</p>
          <div className="image">
            <img src={masaje_prenatal} alt="imagen de la terapia" />
            <video src={prenatal_hover} autoPlay loop controls type="video/mp4"></video>
          </div>
          <div className="texts">
            <p>
              Alivia las molestias del embarazo y promueve el bienestar de la
              madre y el bebé.
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
                href="https://api.whatsapp.com/send/?phone=573135058584&text=Hola%2C+quiero+agendar+un+masaje:+Serenidad+Maternal,+gracias.&type=phone_number&app_absent=0"
                target="_blanc"
              >
                Reservar
              </a>
            </button>
            <button onClick={openModalMPRE}>Más detalles</button>
          </div>
        </div>
        <Modal isOpen={isOpenMPRE} closeModal={closeModalMPRE}>
          <Mpre />
        </Modal>
        <div className="Card">
        <div className="div-separador_card">
          <h3>Reconexión mente-cuerpo postparto</h3>
          <p className="subtitle">(Masaje postparto)</p>
          <div className="image">
            <img src={postparto} alt="imagen de la terapia" />
            <video autoPlay loop controls>
              <source src={postparto_hover} type="video/mp4"/>
            </video>
          </div>
          <div className="texts">
            <p>
              Experimenta una terapia de masaje especializada para promover la
              recuperación física y emocional después del parto.
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
                href="https://api.whatsapp.com/send/?phone=573135058584&text=Hola%2C+quiero+agendar+un+masaje:+Reconexión+mente-cuerpo+postparto,+gracias.&type=phone_number&app_absent=0"
                target="_blanc"
              >
                Reservar
              </a>
            </button>
            <button onClick={openModalMPOS}>Más detalles</button>
          </div>
        </div>
        <Modal isOpen={isOpenMPOS} closeModal={closeModalMPOS}>
          <Mpos />
        </Modal>
      </div>
    </section>
  );
};
