import "./ServicesModals.css";
import pasiva_hover from "../../../images/cards/terapia_gimnasiapasiva_hover.mp4"

export const Gp = () => {
  return (
    <div className="modal-card">
      <h3>Gimnasia Pasiva</h3>
      <p className="modal-subtitle">(Recuperación Funcional)</p>
      <div className="modal-image">
        <video src={pasiva_hover} autoPlay loop controls type="video/mp4"></video>
      </div>
      <div className="modal-texts">
        <div className="modal-descriptions">
          <div className="modal-des">
            <span>Descripción ligera</span>
            <p>
              Experimenta una terapia de recuperación funcional que estimula y
              fortalece los músculos de forma suave y segura.
            </p>
            <span>Descripción detallada</span>
            <p>
              La Recuperación Funcional con Gimnasia Pasiva es una terapia
              especializada que utiliza tecnología de estimulación muscular para
              reactivar y fortalecer los músculos de forma suave y segura.
              Mediante la aplicación de impulsos eléctricos controlados, esta
              terapia estimula las fibras musculares, mejora la circulación y
              promueve el fortalecimiento de los músculos. Es especialmente
              beneficiosa para la rehabilitación de lesiones, la recuperación
              postquirúrgica, el alivio del dolor y la mejora de la función
              física en general. La gimnasia pasiva es una opción segura y
              eficaz para aquellos que buscan recuperarse de lesiones, mejorar
              su rendimiento físico o recuperar la movilidad y fuerza muscular
              de manera gradual y controlada.
            </p>
          </div>
        </div>
        <div className="modal-beneficios">
          <div className="modal-bp">
            <span>Beneficios</span>
            <p>
              Mejora de la movilidad, fortalecimiento muscular, alivio del
              dolor, recuperación post lesiones y mejora de la función física.
            </p>
          </div>
          <div className="modal-bp">
            <span>Público objetivo</span>
            <p>
              Personas que buscan rehabilitarse de lesiones, mejorar su función
              física o recuperar la movilidad y fuerza muscular de manera
              segura.
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
            href="https://api.whatsapp.com/send/?phone=573135058584&text=Hola%2C+quiero+agendar+una+terapia de:+Gimnasia+Pasiva,+gracias.&type=phone_number&app_absent=0"
            target="_blanc"
          >
            Reservar
          </a>
        </button>
        <h3 className="hook">
          ¡Recupera tu movilidad y fuerza muscular con nuestra terapia
          especializada!
        </h3>
      </div>
    </div>
  );
};
