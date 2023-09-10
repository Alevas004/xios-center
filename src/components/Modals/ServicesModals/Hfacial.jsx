import "./ServicesModals.css";

export const Hfacial = () => {
  return (
    <div className="modal-card">
      <h3>Hidratación Facial</h3>
      <p className="modal-subtitle">(Hidratación Facial Profunda)</p>
      <div className="modal-image">
        <img src="" alt="imagen de la terapia" />
      </div>
      <div className="modal-texts">
        <div className="modal-descriptions">
          <div className="modal-des">
            <span>Descripción ligera</span>
            <p>
            Nutre tu piel con una hidratación facial intensiva que restaura la hidratación y revitaliza tu cutis.{" "}
            </p>
            <span>Descripción detallada</span>
            <p>
            La Hidratación Facial es un tratamiento facial que se enfoca en proporcionar una hidratación profunda y restaurar la vitalidad de la piel del rostro. Mediante la aplicación de productos hidratantes de alta calidad y técnicas de masaje facial, este servicio nutre intensamente la piel, suaviza la apariencia de líneas finas, aporta luminosidad y ayuda a rejuvenecer el cutis. Además de los beneficios estéticos, la hidratación facial también proporciona un momento de relajación y bienestar. Es ideal para aquellos que deseen mejorar la apariencia y salud de su piel facial, disfrutar de una experiencia rejuvenecedora y mantener su cutis hidratado en profundidad.
            </p>
          </div>
        </div>
        <div className="modal-beneficios">
          <div className="modal-bp">
            <span>Beneficios</span>
            <p>
            Hidratación profunda, suavidad, reducción de líneas finas, luminosidad y rejuvenecimiento facial.
            </p>
          </div>
          <div className="modal-bp">
            <span>Público objetivo</span>
            <p>
            Personas que deseen mejorar la apariencia y salud de su piel facial, que busquen una experiencia relajante y rejuvenecedora o que deseen hidratar en profundidad su cutis.
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
            href="https://api.whatsapp.com/send/?phone=573135058584&text=Hola%2C+quiero+agendar+una+terapia:+Terapia+Watsu,+gracias.&type=phone_number&app_absent=0"
            target="_blanc"
          >
            Reservar
          </a>
        </button>
        <h3 className="hook">
          ¡Experimenta una hidratación profunda y un cutis rejuvenecido con nuestro tratamiento facial especializado!
        </h3>
      </div>
    </div>
  );
};
