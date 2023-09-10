import "./ServicesModals.css";

export const Lcejas = () => {
  return (
    <div className="modal-card">
      <h3>Laminado de Cejas</h3>
      <p className="modal-subtitle">(Cejas definidas y en forma.)</p>
      <div className="modal-image">
        <img src="" alt="imagen de la terapia" />
      </div>
      <div className="modal-texts">
        <div className="modal-descriptions">
          <div className="modal-des">
            <span>Descripción ligera</span>
            <p>Cejas definidas y en forma.</p>
            <span>Descripción detallada</span>
            <p>
              Dile adiós a las cejas rebeldes. Con nuestro servicio de laminado
              de cejas, podrás lograr la forma y definición que deseas.
              Obtendrás cejas definidas y arqueadas, olvidándote del maquillaje
              diario para corregir y definir tus cejas. Lucirás unas cejas
              perfectamente definidas, enmarcando tu rostro de manera elegante.
            </p>
          </div>
        </div>
        <div className="modal-beneficios">
          <div className="modal-bp">
            <span>Beneficios</span>
            <p>
              Cejas más tupidas y con apariencia más poblada, duración
              prolongada del efecto.
            </p>
          </div>
          <div className="modal-bp">
            <span>Público objetivo</span>
            <p>Personas con cejas dispersas o finas</p>
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
           href="https://api.whatsapp.com/send/?phone=573135058584&text=Hola%2C+quiero+agendar+un+Laminado+de+Cejas,+gracias.&type=phone_number&app_absent=0"
           target="_blanc"
          >
            Reservar
          </a>
        </button>
        <h3 className="hook">¡BUSCARLO!</h3>
      </div>
    </div>
  );
};
