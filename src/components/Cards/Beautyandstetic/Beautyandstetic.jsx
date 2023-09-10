import { useModal } from "../../Hooks/useModal";
import { Modal } from "../../Modals/Modal";
import { Hfacial } from "../../Modals/ServicesModals/Hfacial";
import { Lcejas } from "../../Modals/ServicesModals/Lcejas";
import { Lpestañas } from "../../Modals/ServicesModals/Lpestañas";
import { Epestañas } from "../../Modals/ServicesModals/Epestañas";
import hidratacionfacial from "../../../images/cards/terapia_hidratacionfacial.png"


export const Beautyandstetic = () => {
  const [isOpenHfacial, openModalHfacial, closeModalHfacial] = useModal();
  const [isOpenLpestañas, openModalLpestañas, closeModalLpestañas] = useModal();
  const [isOpenEpestañas, openModalEpestañas, closeModalEpestañas] = useModal();
  const [isOpenLcejas, openModalLcejas, closeModalLcejas] = useModal();

  return (
    <section>
      <h2>Estética y Belleza</h2>
      <div className="cards-main">
        <div className="Card">
          <h3>Hidratación Facial</h3>
          <p className="subtitle">(Hidratación Facial Profunda)</p>
          <div className="image">
            <img src={hidratacionfacial} alt="imagen de la terapia" />
            {/* <img src={} alt="" /> */}
          </div>
          <div className="texts">
            <p>
              Nutre tu piel con una hidratación facial intensiva que restaura la
              hidratación y revitaliza tu cutis.
            </p>
            <p>
              <span>Duración: </span> 60 minutos aprox.
            </p>
            <p>
              <span>Domicilio: </span> <mark>yes</mark> no
            </p>
          </div>
          <div className="btn-div">
            <button>
              <a
                href="https://api.whatsapp.com/send/?phone=573135058584&text=Hola%2C+quiero+agendar+una+Hidratación+Facial.&type=phone_number&app_absent=0"
                target="_blanc"
              >
                Reservar
              </a>
            </button>
            <button onClick={openModalHfacial}>Más detalles</button>
          </div>
        </div>
        <Modal isOpen={isOpenHfacial} closeModal={closeModalHfacial}>
          <Hfacial />
        </Modal>
        
        <div className="Card">
          <h3>Lifting de Pestañas</h3>
          <p className="subtitle">(Levanta tus pestañas al máximo.)</p>
          <div className="image">
            <img src="" alt="imagen de la terapia" />
            <img src="" alt="" />
          </div>
          <div className="texts">
            <p>Levanta tus pestañas al máximo.</p>
            <p>
              <span>Duración: </span> 60 minutos aprox.
            </p>
            <p>
              <span>Domicilio: </span> <mark>yes</mark> no
            </p>
          </div>
          <div className="btn-div">
            <button>
              <a
                href="https://api.whatsapp.com/send/?phone=573135058584&text=Hola%2C+quiero+agendar+un+lifting:+de+pestañas.&type=phone_number&app_absent=0"
                target="_blanc"
              >
                Reservar
              </a>
            </button>
            <button onClick={openModalLpestañas}>Más detalles</button>
          </div>
        </div>
        <Modal isOpen={isOpenLpestañas} closeModal={closeModalLpestañas}>
          <Lpestañas />
        </Modal>
        <div className="Card">
          <h3>Extensión de Pestañas</h3>
          <p className="subtitle">(Pestañas más largas y voluminosas.)</p>
          <div className="image">
          <img src="" alt="imagen de la terapia" />
            <img src="" alt="" />
          </div>
          <div className="texts">
            <p>Pestañas más largas y voluminosas.</p>
            <p>
              <span>Duración: </span> 60 minutos aprox.
            </p>
            <p>
              <span>Domicilio: </span> <mark>yes</mark> no
            </p>
          </div>
          <div className="btn-div">
            <button>
              <a
                href="https://api.whatsapp.com/send/?phone=573135058584&text=Hola%2C+quiero+agendar+una+extensión+de+pestañas,+gracias.&type=phone_number&app_absent=0"
                target="_blanc"
              >
                Reservar
              </a>
            </button>
            <button onClick={openModalEpestañas}>Más detalles</button>
          </div>
        </div>
        <Modal isOpen={isOpenEpestañas} closeModal={closeModalEpestañas}>
          <Epestañas />
        </Modal>

        <div className="Card">
          <h3>Laminado de Cejas</h3>
          <p className="subtitle">( Cejas definidas y en forma.)</p>
          <div className="image">
          <img src="" alt="imagen de la terapia" />
            <img src="" alt="" />
          </div>
          <div className="texts">
            <p>Cejas definidas y en forma. </p>
            <p>
              <span>Duración: </span> 60 minutos aprox.
            </p>
            <p>
              <span>Domicilio: </span> <mark>yes</mark> no
            </p>
          </div>
          <div className="btn-div">
            <button>
              <a
                href="https://api.whatsapp.com/send/?phone=573135058584&text=Hola%2C+quiero+agendar+un+Laminado+de+Cejas,+gracias.&type=phone_number&app_absent=0"
                target="_blanc"
              >
                Reservar
              </a>
            </button>
            <button onClick={openModalLcejas}>Más detalles</button>
          </div>
        </div>
        <Modal isOpen={isOpenLcejas} closeModal={closeModalLcejas}>
          <Lcejas />
        </Modal>
      </div>
    </section>
  );
};
