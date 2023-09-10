import "./ServicesModals.css";
import reflexodologia_hover from "../../../images/cards/terapia_reflexologiapodal_hover.gif"

export const Rp = () => {
  return (
    <div className="modal-card">
      <h3>Reflexología Energética</h3>
      <p className="modal-subtitle">(Reflexología Podal)</p>
      <div className="modal-image">
        <img src={reflexodologia_hover} alt="imagen de la terapia" />
      </div>
      <div className="modal-texts">
        <div className="modal-descriptions">
          <div className="modal-des">
            <span>Descripción ligera</span>
            <p>
              Estimulación de puntos en los pies para promover el equilibrio y
              la relajación del cuerpo.{" "}
            </p>
            <span>Descripción detallada</span>
            <p>
              La Reflexología Podal es una terapia que se centra en la
              estimulación de puntos específicos en los pies para promover el
              equilibrio y la relajación en todo el cuerpo. Cada punto en los
              pies se cree que está relacionado con órganos y sistemas
              específicos, y al aplicar presión en estos puntos, se busca
              restaurar el flujo de energía y mejorar la circulación en el
              cuerpo. La Reflexología Podal no solo alivia el estrés y la
              tensión, sino que también promueve la relajación profunda y ayuda
              a equilibrar la energía vital. Es una excelente opción para
              aquellos que deseen una terapia centrada en los pies, busquen
              relajarse en profundidad o desean armonizar su equilibrio
              energético.
            </p>
          </div>
        </div>
        <div className="modal-beneficios">
          <div className="modal-bp">
            <span>Beneficios</span>
            <p>
              Mejora de la circulación, reducción del estrés, equilibrio de
              energía y promoción de la relajación profunda.
            </p>
          </div>
          <div className="modal-bp">
            <span>Público objetivo</span>
            <p>
              Estimulación de puntos en los pies para promover el equilibrio y
              la relajación del cuerpo.
            </p>
          </div>
        </div>
        <div className="modal-time-domi">
          <p>
            <span>Duración:</span> 40 minutos aprox.
          </p>
          <p>
            <span>Precio:</span> <mark> $ 80.000 .</mark>
          </p>
        </div>
      </div>
      <div className="modal-btn-div">
        <button>
          <a
            href="https://api.whatsapp.com/send/?phone=573135058584&text=Hola%2C+quiero+agendar+una+terapia+de:+Reflexología+Energética,+gracias.&type=phone_number&app_absent=0"
            target="_blanc"
          >
            Reservar
          </a>
        </button>
        <h3 className="hook">
          ¡Equilibra tu cuerpo y mente a través de los puntos clave en tus pies!
        </h3>
      </div>
    </div>
  );
};
