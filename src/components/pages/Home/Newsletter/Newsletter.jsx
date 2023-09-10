import "./Newsletter.css";
import newsletter from "../../../../images/TEXTURAS/newsletter.png";

const Newsletter = () => {
  return (
    <section className="newsletter-main">
      <h3>¡No te pierdas las promos!</h3>
      <p>Unete a nuestra comunidad</p>
      <div className="news-sections">
        <div className="news-texts">
          <p>Estarás siempre al tanto de:</p>
          <ul>
            <li>Descuentos</li>
            <li>Promociones relampagos</li>
            <li>Tips de bienestar</li>
          </ul>
          <button>
            <a
              href="https://chat.whatsapp.com/IqCNK8ax9586H9BnV9QmVu"
              target="_blanc"
            >
              Unirme
            </a>
          </button>
        </div>
        <div className="news-image">
          <img src={newsletter} alt="imagen del grupo de whatsapp" />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
