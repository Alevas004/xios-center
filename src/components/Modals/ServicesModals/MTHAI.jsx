import "./ServicesModals.css";
import thai from "../../../images/cards/masaje_thai.png"

export const Mthai = () => {
  return (
    <div className="modal-card">
      <h3>Equilibrio Thai</h3>
      <p className="modal-subtitle">(Masaje Tailandés Terapéutico)</p>
      <div className="modal-image">
        <img src={thai} alt="imagen de la terapia" />
      </div>
      <div className="modal-texts">
        <div className="modal-descriptions">
          <div className="modal-des">
            <span>Descripción ligera</span>
            <p>
              Combina presiones, estiramientos y movimientos de yoga para
              mejorar la energía y la flexibilidad.{" "}
            </p>
            <span>Descripción detallada</span>
            <p>
              El Masaje Tailandés es una antigua técnica terapéutica que combina
              presiones rítmicas, estiramientos y movimientos de yoga para
              mejorar la energía y la flexibilidad del cuerpo. A través de la
              aplicación de presión en puntos clave y el estiramiento suave de
              músculos y articulaciones, este masaje promueve la circulación
              sanguínea, libera bloqueos de energía y restablece el equilibrio
              corporal. Además de los beneficios físicos, el Masaje Tailandés
              también ayuda a reducir el estrés y a alcanzar un estado de
              relajación profunda. Es especialmente adecuado para personas que
              deseen aumentar su flexibilidad, experimentar una sensación de
              vitalidad renovada o buscar un equilibrio integral cuerpo-mente.
            </p>
          </div>
        </div>
        <div className="modal-beneficios">
          <div className="modal-bp">
            <span>Beneficios</span>
            <p>
              Aumento de la energía vital, mejora de la flexibilidad, reducción
              del estrés y equilibrio corporal.
            </p>
          </div>
          <div className="modal-bp">
            <span>Público objetivo</span>
            <p>
              Personas que busquen una experiencia de masaje enérgico, que
              deseen aumentar su flexibilidad o que busquen un equilibrio
              integral cuerpo-mente.
            </p>
          </div>
        </div>
        <div className="modal-time-domi">
          <p>
            <span>Duración:</span> 90 minutos aprox.
          </p>
          <p>
            <span>Precio:</span> <mark> $ 120.000 .</mark>
          </p>
        </div>
      </div>
      <div className="modal-btn-div">
        <button>
          <a
            href="https://api.whatsapp.com/send/?phone=573135058584&text=Hola%2C+quiero+agendar+un+masaje:+Equilibrio+Thai,+gracias.&type=phone_number&app_absent=0"
            target="_blanc"
          >
            Reservar
          </a>
        </button>
        <h3 className="hook">
          ¡Descubre la flexibilidad y armonía de tu cuerpo a través de nuestra
          terapia tailandesa!
        </h3>
      </div>
    </div>
  );
};
