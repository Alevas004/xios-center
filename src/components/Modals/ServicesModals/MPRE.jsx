import "./ServicesModals.css";
import prenatal_hover from "../../../images/cards/masaje_prenatal_hover.mp4"


export const Mpre = () => {
  return (
    <div className="modal-card">
      <h3>Serenidad Maternal</h3>
      <p className="modal-subtitle">(Masaje prenatal)</p>
      <div className="modal-image">
        <video src={prenatal_hover} autoPlay loop controls type="video/mp4"></video>
      </div>
      <div className="modal-texts">
        <div className="modal-descriptions">
          <div className="modal-des">
            <span>Descripción ligera</span>
            <p>
              Alivia las molestias del embarazo y promueve el bienestar de la
              madre y el bebé.{" "}
            </p>
            <span>Descripción detallada</span>
            <p>
              El Masaje Prenatal está diseñado específicamente para las mujeres
              embarazadas, brindando alivio a las molestias físicas y
              promoviendo el bienestar tanto de la madre como del bebé. A través
              de técnicas suaves y seguras, este masaje ayuda a aliviar los
              dolores lumbares, las tensiones musculares y los edemas propios
              del embarazo. Además, mejora la circulación sanguínea y linfática,
              reduciendo la hinchazón y proporcionando un estado de relajación
              profunda. El Masaje Prenatal también puede ayudar a reducir el
              estrés y a fortalecer el vínculo emocional entre la madre y el
              bebé. Es seguro y beneficioso en cualquier etapa del embarazo.
            </p>
          </div>
        </div>
        <div className="modal-beneficios">
          <div className="modal-bp">
            <span>Beneficios</span>
            <p>
              Alivio de dolores lumbares y tensiones musculares, mejora de la
              circulación, reducción del estrés y apoyo al bienestar del
              embarazo.
            </p>
          </div>
          <div className="modal-bp">
            <span>Público objetivo</span>
            <p>
              Mujeres embarazadas en cualquier etapa de gestación que busquen
              alivio físico y emocional durante esta etapa.
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
            href="https://api.whatsapp.com/send/?phone=573135058584&text=Hola%2C+quiero+agendar+un+masaje:+Serenidad+Maternal,+gracias.&type=phone_number&app_absent=0"
            target="_blanc"
          >
            Reservar
          </a>
        </button>
        <h3 className="hook">
          ¡Disminuye las dolencias y malestares generales del embarazo con
          nuestro Masaje Prenatal!
        </h3>
      </div>
    </div>
  );
};
