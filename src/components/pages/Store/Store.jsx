import { NavBar } from "../../NavBar/NavBar";
import { Footer } from "../Home/Footer/Footer";
import under_const from "../../../images/page_under_construction.svg"
import "./Store.css";

export const Store = () => {
  return (
    <>
      <NavBar />
      <div className="store-main">
        <h4>!MUY PRONTO!</h4>
        <img src={under_const} alt="Coming soon" />
        {/* <div className="categories">
          <h3>Categorias</h3>
          <ul>
            <li>Medias</li>
            <li>Shorts</li>
            <li>Aceites</li>
          </ul>
        </div>
        <div className="products">
          <div className="item-card">
            <div>
              <img src="" alt="img-producto" />
            </div>
            <div>
              <h4>Nombre del producto</h4>
              <p>Detalles del producto</p>
              <p>
                <span>Precio:</span> $ 80.000
              </p>
            </div>
            <button>Detalles</button>
            <button>Comprar</button>
          </div>
          <div className="item-card">
            <div>
              <img src="" alt="img-producto" />
            </div>
            <div>
              <h4>Nombre del producto</h4>
              <p>Detalles del producto</p>
              <p>
                <span>Precio:</span> $ 80.000
              </p>
            </div>
            <button>Detalles</button>
            <button>Comprar</button>
          </div>
          <div className="item-card">
            <div>
              <img src="" alt="img-producto" />
            </div>
            <div>
              <h4>Nombre del producto</h4>
              <p>Detalles del producto</p>
              <p>
                <span>Precio:</span> $ 80.000
              </p>
            </div>
            <button>Detalles</button>
            <button>Comprar</button>
          </div>
          <div className="item-card">
            <div>
              <img src="" alt="img-producto" />
            </div>
            <div>
              <h4>Nombre del producto</h4>
              <p>Detalles del producto</p>
              <p>
                <span>Precio:</span> $ 80.000
              </p>
            </div>
            <button>Detalles</button>
            <button>Comprar</button>
          </div>
          <div className="item-card">
            <div>
              <img src="" alt="img-producto" />
            </div>
            <div>
              <h4>Nombre del producto</h4>
              <p>Detalles del producto</p>
              <p>
                <span>Precio:</span> $ 80.000
              </p>
            </div>
            <button>Detalles</button>
            <button>Comprar</button>
          </div>
          <div className="item-card">
            <div>
              <img src="" alt="img-producto" />
            </div>
            <div>
              <h4>Nombre del producto</h4>
              <p>Detalles del producto</p>
              <p>
                <span>Precio:</span> $ 80.000
              </p>
            </div>
            <button>Detalles</button>
            <button>Comprar</button>
          </div>
          <div className="item-card">
            <div>
              <img src="" alt="img-producto" />
            </div>
            <div>
              <h4>Nombre del producto</h4>
              <p>Detalles del producto</p>
              <p>
                <span>Precio:</span> $ 80.000
              </p>
            </div>
            <button>Detalles</button>
            <button>Comprar</button>
          </div>
          <div className="item-card">
            <div>
              <img src="" alt="img-producto" />
            </div>
            <div>
              <h4>Nombre del producto</h4>
              <p>Detalles del producto</p>
              <p>
                <span>Precio:</span> $ 80.000
              </p>
            </div>
            <button>Detalles</button>
            <button>Comprar</button>
          </div>
        </div> */}
      </div>
      <Footer  />
    </>
  );
};
