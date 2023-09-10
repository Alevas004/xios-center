import "./ServicesModals.css";

export const Lpestañas = () => {
  return (
    <div className="modal-card">
      <h3>Lifting de Pestañas</h3>
      <p className="modal-subtitle">(Levanta tus pestañas al máximo.)</p>
      <div className="modal-image">
        <img src="" alt="imagen de la terapia" />
      </div>
      <div className="modal-texts">
        <div className="modal-descriptions">
          <div className="modal-des">
            <span>Descripción ligera</span>
            <p>Levanta tus pestañas al máximo.</p>
            <span>Descripción detallada</span>
            <p>
            ¿Quieres resaltar tu mirada? Nuestro lifting de pestañas es perfecto para lucir radiante. Con este tratamiento, lograrás pestañas con volumen y curvatura ideal, obteniendo un look natural sin necesidad de rímel. El efecto duradero te permitirá mantener una mirada impactante durante mucho tiempo.
            </p>
          </div>
        </div>
        <div className="modal-beneficios">
          <div className="modal-bp">
            <span>Beneficios</span>
            <p>
            Aspecto más abierto y despierto. Efecto de pestañas más largas. Duración prolongada del efecto.
            </p>
          </div>
          <div className="modal-bp">
            <span>Público objetivo</span>
            <p>Personas con pestañas rectas o caídas.</p>
          </div>
        </div>
        <div className="modal-time-domi">
          <p>
            <span>Duración:</span> 60 minutos aprox.
          </p>
          <p>
            <span>Domicilio:</span> <mark>Si</mark> / No
          </p>
        </div>
      </div>
      <div className="modal-btn-div">
        <button>
          <a
            href="https://api.whatsapp.com/send/?phone=573135058584&text=Hola%2C+quiero+agendar+un+lifting:+de+pestañas.&type=phone_number&app_absent=0"
            target="_blanc"
          >
            Reservar
          </a>
        </button>
        <h3 className="hook">
          ¡BUSCARLO!
        </h3>
      </div>
    </div>
  );
};
