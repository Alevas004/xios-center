import "./Reviews.css";
import manuel_ruiz from "../../../../images/REVIEWS/manuel_ruiz.jpg";
import nataly_reyes from "../../../../images/REVIEWS/nataly_reyes.jpg";
import andrea_hoyos from "../../../../images/REVIEWS/andrea_hoyos.jpg";
import danna_vasquez from "../../../../images/REVIEWS/danna_vasquez.jpg";

export const Reviews = () => {
  return (
    <section className="reviews-main">
      <h2>TESTIMONIOS</h2>
      <div className="reviews-mains">
        <div className="review-card">
          <div className="review-image">
            <img src={manuel_ruiz} alt="foto clienta"/>
            <p>@manuelruizz</p>
          </div>

          <div>
            <div className="name">
              <h3>Manuel Ruiz</h3>
            </div>  
            <div className="stars">
            <i className='bx bxs-star' style={{color:"#fdff00"}}  ></i>
            <i className='bx bxs-star' style={{color:"#fdff00"}}  ></i>
            <i className='bx bxs-star' style={{color:"#fdff00"}}  ></i>
            <i className='bx bxs-star' style={{color:"#fdff00"}}  ></i>
            <i className='bx bxs-star' style={{color:"#fdff00"}}  ></i>
            </div>
            <div className="text-review">
              <p>
              &quot;Hola Xiomara mira que el dolor lumbar me disminuyó tanto, no se imagina lo que me ayudaron esos estiramientos. Y haré muy juicioso los que me dejó de tarea.&quot;
              </p>
            </div>
          </div>
        </div>

        <div className="review-card">
          <div className="review-image">
            <img src={nataly_reyes} alt="foto clienta" />

            <p>@natalyreyesg</p>
          </div>

          <div>
            <div className="name">
              <h3>Nataly Reyes</h3>
            </div>  
            <div className="stars">
            <i className='bx bxs-star' style={{color:"#fdff00"}}  ></i>
            <i className='bx bxs-star' style={{color:"#fdff00"}}  ></i>
            <i className='bx bxs-star' style={{color:"#fdff00"}}  ></i>
            <i className='bx bxs-star' style={{color:"#fdff00"}}  ></i>
            <i className='bx bxs-star' style={{color:"#fdff00"}}  ></i>
            </div>
            <div className="text-review">
              <p>
              &quot;Xiomara el paquete de masajes fue la mejor desición, nos ayudó mucho con la tensión que teniamos por el entreno. El masaje Thailandes con los estiramientos espectacular! Muchas gracias a ti y a Alejandro ☺️.&quot;
              </p>
            </div>
          </div>
        </div>
        <div className="review-card">
          <div className="review-image">
            <img src={andrea_hoyos} alt="foto clienta" />

            <p>@andreahoyos</p>
          </div>

          <div>
            <div className="name">
              <h3>Andrea Hoyos</h3>
            </div>  
            <div className="stars">
            <i className='bx bxs-star' style={{color:"#fdff00"}}  ></i>
            <i className='bx bxs-star' style={{color:"#fdff00"}}  ></i>
            <i className='bx bxs-star' style={{color:"#fdff00"}}  ></i>
            <i className='bx bxs-star' style={{color:"#fdff00"}}  ></i>
            <i className='bx bxs-star' style={{color:"#fdff00"}}  ></i>
            </div>
            <div className="text-review">
              <p>
              &quot;Xiomi muchas gracias! ❤️ Amé el masaje de hoy, quedé como nueva. Y la exfoliación tambiénnn!!. Gracias Xiomi!!.&quot;
              </p>
            </div>
          </div>
        </div>
        <div className="review-card">
          <div className="review-image">
            <img src={danna_vasquez} alt="foto clienta" />

            <p>@dannavassq</p>
          </div>

          <div>
            <div className="name">
              <h3>Danna Vasquez</h3>
            </div>  
            <div className="stars">
            <i className='bx bxs-star' style={{color:"#fdff00"}}  ></i>
            <i className='bx bxs-star' style={{color:"#fdff00"}}  ></i>
            <i className='bx bxs-star' style={{color:"#fdff00"}}  ></i>
            <i className='bx bxs-star' style={{color:"#fdff00"}}  ></i>
            <i className='bx bxs-star' style={{color:"#fdff00"}}  ></i>
            </div>
            <div className="text-review">
              <p>
              &quot;Xiomy, te quería agredecer por mi terapia de masajes, definitivamente ha sido lo mejor 😍 ya no siento cansancio en mis piernas y duermo mucho mejor. Compraré las medias que me recomendaste, muchas gracias.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
