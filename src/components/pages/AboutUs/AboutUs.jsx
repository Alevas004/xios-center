
import { NavBar } from "../../NavBar/NavBar"
import { Footer } from "../Home/Footer/Footer"
import "./AboutUs.css"

export const AboutUs = () => {
  return (

    <>
        <NavBar />
        <div className="aboutus-bg">
            <h2>Acerca de Xio&apos;s</h2>
            <div className="aboutus-main">
                <div>
                    <img src="" alt="imagen de no sé qué" />
                </div>
                <div>
                    <h3>Nosotros</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis non et nihil, maiores ut harum quis fuga dolor amet ipsam, fugiat possimus beatae. Praesentium beatae optio reprehenderit nemo nihil harum!</p>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}
