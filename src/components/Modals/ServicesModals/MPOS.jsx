import "./ServicesModals.css";
import postparto_hover from "../../../images/cards/masaje_postparto_hover.gif"

export const Mpos = () => {
  return (
    <div className="modal-card">
      <h3>Reconexión mente-cuerpo postparto</h3>
      <p className="modal-subtitle">(Masaje postparto)</p>
      <div className="modal-image">
        <img src={postparto_hover} alt="imagen de la terapia" />
      </div>
      <div className="modal-texts">
        <div className="modal-descriptions">
          <div className="modal-des">
            <span>Descripción ligera</span>
            <p>
              Experimenta una terapia de masaje especializada para promover la
              recuperación física y emocional después del parto.{" "}
            </p>
            <span>Descripción detallada</span>
            <p>
              Los Masajes Postparto son una terapia de masaje diseñada
              específicamente para las mujeres que han dado a luz recientemente.
              Este servicio se enfoca en brindar alivio a los dolores
              musculares, reducir la tensión y promover la relajación. Además,
              ayuda a equilibrar los cambios hormonales que ocurren después del
              parto y brinda un apoyo emocional importante durante la transición
              a la maternidad. Los masajes postparto también pueden ser
              beneficiosos para aliviar el estrés y la fatiga, mejorar la
              calidad del sueño y promover una sensación de bienestar general.
              Es un servicio especialmente diseñado para ayudar a las mujeres a
              recuperar su bienestar físico y emocional después del parto.
            </p>
          </div>
        </div>
        <div className="modal-beneficios">
          <div className="modal-bp">
            <span>Beneficios</span>
            <p>
              Alivio de dolores musculares, reducción de la tensión, promoción
              de la relajación, equilibrio hormonal y apoyo en la transición a
              la maternidad.
            </p>
          </div>
          <div className="modal-bp">
            <span>Público objetivo</span>
            <p>
              Mujeres que han dado a luz recientemente y buscan una experiencia
              de masaje diseñada específicamente para ayudar en su proceso de
              recuperación y bienestar postparto.
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
            href="https://api.whatsapp.com/send/?phone=573135058584&text=Hola%2C+quiero+agendar+un+masaje:+Reconexión+mente-cuerpo+postparto,+gracias.&type=phone_number&app_absent=0"
            target="_blanc"
          >
            Reservar
          </a>
        </button>
        <h3 className="hook">
          ¡Recupera tu bienestar y equilibrio tras la llegada de tu bebé!
        </h3>
      </div>
    </div>
  );
};
