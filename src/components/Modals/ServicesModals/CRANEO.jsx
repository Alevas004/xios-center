// import craneo_hover from "../../../images/cards/craneo_hover.gif"
import "./ServicesModals.css"


export const Craneo = () => {
  return (
    <div className="modal-card">
      <h3>Al estilo Lavanda</h3>
      <p className="modal-subtitle">(Terapia Craneofacial)</p>
      <div className="modal-image">
        {/* <img src={craneo_hover} alt="imagen de la terapia" /> */}
      </div>
      <div className="modal-texts">
        <div className="modal-descriptions">
          
          <div className="modal-des">
            <span>Descripción ligera</span>
            <p>
              Disfruta de un masaje especializado que alivia la tensión y promueve
              la relajación profunda en cabeza, cara y cuello.
            </p>
            <span>Descripción detallada</span>
            <p>
              El Masaje Craneofacial es una
              terapia especializada que se centra en aliviar la tensión y promover
              la relajación profunda en la cabeza, cara y cuello. Mediante
              técnicas suaves de masaje y manipulaciones precisas, este servicio
              ayuda a liberar la tensión acumulada en estas áreas, mejora la
              circulación sanguínea y linfática, y brinda una sensación de
              relajación y bienestar mental. El masaje craneofacial es un momento
              de autocuidado y rejuvenecimiento para el cuerpo y la mente.
            </p>
          </div>
        </div>
        <div className="modal-beneficios">
          <div className="modal-bp">
            <span>Beneficios</span>
            <p>
              Alivio del estrés, reducción de la tensión
              en cabeza y cuello, mejora de la circulación, relajación profunda y
              bienestar mental.
            </p>
          </div>
          <div className="modal-bp">
            <span>Público objetivo</span>
            <p>
              Personas que buscan aliviar el
              estrés, reducir la tensión en cabeza y cuello, y experimentar una
              relajación profunda y renovadora.
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
            href="https://api.whatsapp.com/send/?phone=573135058584&text=Hola%2C+quiero+agendar+una+terapia:+Al+estilo+Lavanda,+gracias.&type=phone_number&app_absent=0"
            target="_blanc"
          >
            Reservar
          </a>
        </button>
        <h3 className="hook">
          ¡Relájate y renueva tu mente con nuestra Terapia Craneofacial
          especializada!
        </h3>
      </div>
    </div>
  );
};
