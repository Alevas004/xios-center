import "./ServicesModals.css";
import watsu_hover from "../../../images/cards/watsu_hover.gif"

export const Watsu = () => {
  return (
    <div className="modal-card">
      <h3>Terapia Agua</h3>
      <p className="modal-subtitle">(Terapia Watsu)</p>
      <div className="modal-image">
        <img src={watsu_hover} alt="imagen de la terapia" />
      </div>
      <div className="modal-texts">
        <div className="modal-descriptions">
          <div className="modal-des">
            <span>Descripción ligera</span>
            <p>
              Experimenta una terapia acuática relajante que combina movimientos
              y estiramientos suaves.{" "}
            </p>
            <span>Descripción detallada</span>
            <p>
              La Terapia Watsu es una forma única de terapia acuática que
              combina movimientos suaves y flotación en agua para brindar una
              experiencia de relajación profunda y holística. Durante la sesión,
              el terapeuta guiará suavemente los movimientos del cuerpo en el
              agua, creando un ambiente seguro y de apoyo. La flotación en agua
              ayuda a aliviar el estrés, a liberar tensiones musculares y a
              mejorar la flexibilidad. Esta terapia es especialmente beneficiosa
              para personas que buscan una experiencia de relajación profunda y
              única, así como para aquellos que desean abordar su bienestar de
              manera holística.
            </p>
          </div>
        </div>
        <div className="modal-beneficios">
          <div className="modal-bp">
            <span>Beneficios</span>
            <p>
              Relajación profunda, alivio del estrés, liberación de tensiones
              musculares y mejora de la flexibilidad.
            </p>
          </div>
          <div className="modal-bp">
            <span>Público objetivo</span>
            <p>
              Personas que busquen una experiencia única de relajación en el
              agua, que deseen aliviar tensiones musculares o que busquen un
              enfoque holístico para el bienestar.
            </p>
          </div>
        </div>
        <div className="modal-time-domi">
          <p>
            <span>Duración:</span> 60 minutos aprox.
          </p>
          <p>
          <span>Precio:</span> <mark> $ 120.000 + costo de piscina.</mark>
          </p>
        </div>
      </div>
      <div className="modal-btn-div">
        <button>
          <a
            href="https://api.whatsapp.com/send/?phone=573135058584&text=Hola%2C+quiero+agendar+una+terapia:+Terapia+Watsu,+gracias.&type=phone_number&app_absent=0"
            target="_blanc"
          >
            Reservar
          </a>
        </button>
        <h3 className="hook">
          ¡Deja que el agua y nuestros terapeutas expertos te lleven a un estado
          de serenidad total!
        </h3>
      </div>
    </div>
  );
};
