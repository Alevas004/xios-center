import "./ServicesModals.css";

export const Epestañas = () => {
  return (
    <div className="modal-card">
      <h3>Extensión de Pestañas</h3>
      <p className="modal-subtitle">(Pestañas más largas y voluminosas. )</p>
      <div className="modal-image">
        <img src="" alt="imagen de la terapia" />
      </div>
      <div className="modal-texts">
        <div className="modal-descriptions">
          <div className="modal-des">
            <span>Descripción ligera</span>
            <p>Pestañas más largas y voluminosas. </p>
            <span>Descripción detallada</span>
            <p>
              ¿Sueñas con tener unas pestañas de ensueño? Nuestro servicio de
              extensión de pestañas es perfecto para ti. Obtendrás pestañas
              largas y voluminosas, enmarcando tus ojos de manera seductora. El
              resultado es personalizado según tus preferencias y estilo,
              asegurando que luzcas fabulosa en todo momento.
            </p>
          </div>
        </div>
        <div className="modal-beneficios">
          <div className="modal-bp">
            <span>Beneficios</span>
            <p>
              Apariencia de pestañas más largas y abundantes. Ahorro de tiempo
              en el maquillaje diario.
            </p>
          </div>
          <div className="modal-bp">
            <span>Público objetivo</span>
            <p>Personas con pestañas cortas o escasas.</p>
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
            href="https://api.whatsapp.com/send/?phone=573135058584&text=Hola%2C+quiero+agendar+una+extensión:+de+pestañas.&type=phone_number&app_absent=0"
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
