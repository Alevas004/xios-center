import { createBrowserRouter } from "react-router-dom";
import { Home } from "../components/pages/Home/Home";
import { Services } from "../components/pages/Services/Services";
import { Store } from "../components/pages/Store/Store";
import { Contactus } from "../components/pages/ContactUs/Contactus";
import { AboutUs } from "../components/pages/AboutUs/AboutUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/servicios",
    element: <Services />,
    children: [
      {
        path: "",
        element: <Services />,
      },
      {
        path: ":serviceId",
        element: <p>info del producto</p>,
      },
    ],
  },
  {
    path: "/tienda",
    element: <Store />,
  },
  {
    path: "/contactanos",
    element: <Contactus />,
  },
  {
    path: "/acercadenosotros",
    element: <AboutUs />,
  },
]);
