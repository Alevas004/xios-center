
import "./SectionA.css"
import { Dlm } from "../../../Modals/ServicesModals/DLM"
import { Modal } from "../../../Modals/Modal"
import { useModal } from "../../../Hooks/useModal";
import drenaje from "../../../../images/cards/masaje_drenajelinfatico.png"
import drenaje_hover from "../../../../images/cards/Masaje_drenajelinfatico_hover.gif";


export const SectionA = () => {

  const [isOpenDLM, openModalDLM, closeModalDLM] = useModal()

  return (
    <div className="sectionA-main">
          <div className="sectionA-titles"> 
            <h3>Fluidez Linfoenergética</h3>
            <p className="subtitle">(Drenaje Linfático Manual)</p>
          </div>
          <div className="image">
            <img src={drenaje} alt="imagen de la terapia" />
            <img src={drenaje_hover} alt="" />
          </div>
          <div className="sectionA-texts">
            <p>
              Estimula el sistema linfático para mejorar la circulación y
              promover la desintoxicación.
            </p>
          </div>
          <div className="sectionA-btn-div">
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
        
        <Modal isOpen={isOpenDLM} closeModal={closeModalDLM}>
          <Dlm />
        </Modal>      
    </div>
  )
}
