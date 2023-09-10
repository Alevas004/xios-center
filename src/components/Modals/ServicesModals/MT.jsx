import "./ServicesModals.css";
import terapeutico_hover from "../../../images/cards/masaje_terapeutico_hover.mp4"

export const Mt = () => {
  return (
    <div className="modal-card">
      <h3>Masaje Armonía</h3>
      <p className="modal-subtitle">(Masaje Terapéutico)</p>
      <div className="modal-image">
        <video src={terapeutico_hover} autoPlay loop controls type="video/mp4"></video>
      </div>
      <div className="modal-texts">
        <div className="modal-descriptions">
          <div className="modal-des">
            <span>Descripción ligera</span>
            <p>
              Alivia dolores musculares y tensiones mediante manipulación de
              tejidos profundos.{" "}
            </p>
            <span>Descripción detallada</span>
            <p>
              El Masaje Terapéutico es una técnica especializada que se enfoca
              en aliviar dolores musculares y tensiones mediante la manipulación
              de los tejidos profundos. Este masaje utiliza una combinación de
              movimientos intensos y precisos para liberar nudos y contracturas,
              estimulando la circulación sanguínea y ayudando a que los músculos
              se relajen. Además de aliviar el dolor, el Masaje Terapéutico
              proporciona un estado de relajación profundo y mejora la
              flexibilidad corporal. Es ideal para personas con lesiones
              musculares, dolores crónicos, estrés acumulado o simplemente
              aquellos que deseen experimentar un masaje profundo y terapéutico.
            </p>
          </div>
        </div>
        <div className="modal-beneficios">
          <div className="modal-bp">
            <span>Beneficios</span>
            <p>
              Alivio del dolor muscular, relajación profunda, mejora de la
              flexibilidad y liberación de tensiones.
            </p>
          </div>
          <div className="modal-bp">
            <span>Público objetivo</span>
            <p>
              Personas con lesiones musculares, dolores crónicos, estrés
              acumulado o que busquen una experiencia de masaje profundo y
              terapéutico.
            </p>
          </div>
        </div>
        <div className="modal-time-domi">
          <p>
            <span>Duración:</span> 60 minutos aprox.
          </p>
          <p>
           <span>Precio:</span> <mark> $ 80.000 .</mark>
          </p>
        </div>
      </div>
      <div className="modal-btn-div">
        <button>
          <a
            href="https://api.whatsapp.com/send/?phone=573135058584&text=Hola%2C+quiero+agendar+un+masaje:+Masaje+Armonía,+gracias.&type=phone_number&app_absent=0"
            target="_blanc"
          >
            Reservar
          </a>
        </button>
        <h3 className="hook">
          ¡Recupera tu bienestar y flexibilidad con nuestras manos expertas!
        </h3>
      </div>
    </div>
  );
};
