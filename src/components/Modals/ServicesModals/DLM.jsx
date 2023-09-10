import "./ServicesModals.css"
import drenaje_hover from "../../../images/cards/masaje_drenajelinfatico_hover.gif";


export const Dlm = () => {
  return (
    <div className="modal-card">
      <h3>Fluidez Linfoenergética</h3>
      <p className="modal-subtitle">(Drenaje Linfático Manual)</p>
      <div className="modal-image">
        <img src={drenaje_hover} alt="" />
      </div>
      <div className="modal-texts">
        <div className="modal-descriptions">
          <div className="modal-des">
            <span>Descripción ligera</span>
            <p>
              Estimula el sistema linfático para mejorar la circulación y
              promover la desintoxicación.
            </p>
            <span>Descripción detallada</span>
            <p>
              El Drenaje Linfático Manual es una técnica terapéutica que utiliza
              movimientos suaves y rítmicos para estimular el sistema linfático,
              ayudando a eliminar el exceso de líquido y toxinas del cuerpo.
              Este masaje suave y relajante se realiza mediante movimientos
              precisos que siguen el curso natural de los vasos linfáticos,
              mejorando la circulación y fortaleciendo el sistema inmunológico.
              Es especialmente beneficioso para personas que sufren de edema,
              retención de líquidos, trastornos linfáticos o que buscan
              desintoxicar su cuerpo de manera natural.
            </p>
          </div>
        </div>
        <div className="modal-beneficios">
          <div className="modal-bp">
            <span>Beneficios</span>
            <p>
              Reducción de la retención de líquidos, mejora del sistema
              inmunológico, alivio del estrés y relajación profunda.
            </p>
          </div>
          <div className="modal-bp">
            <span>Público objetivo</span>
            <p>
              Personas con edema, problemas de circulación, trastornos
              linfáticos o que busquen desintoxicar el cuerpo.
            </p>
          </div>
        </div>
        <div className="modal-time-domi">
          <p>
            <span>Duración: </span> 60 minutos aprox.
          </p>
          <p>
            <span>Precio:</span> <mark> $ 80.000 .</mark>
          </p>
        </div>
      </div>
      <div className="modal-btn-div">
        <button>
          <a
            href="https://api.whatsapp.com/send/?phone=573135058584&text=Hola%2C+quiero+agendar+un+masaje:+Fluidez+Linfoenergético,+gracias.&type=phone_number&app_absent=0"
            target="_blanc"
          >
            Reservar
          </a>
        </button>
        <h3 className="hook">
          ¡Libera tu cuerpo de toxinas con el Drenaje Linfático Manual!
        </h3>
      </div>
    </div>
  );
};
