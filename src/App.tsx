import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AuthLayout from "./Modules/AuthLayout/AuthLayout";
import NotFound from "./Modules/NotFound/NotFound";
import Home from "./Modules/Home/Home";
import Contact from "./Modules/Contact/Contact";
import Footer from "./Modules/Footer/Footer";
import LocationMap from "./Modules/location/LocationMap";
import Prints from "./Modules/Print/Prints";
import SamsungDeatils from "./Modules/SamsungDeatils/SamsungDeatils";
import About from "./Modules/About/About";

function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <AuthLayout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        { path: "contact", element: <Contact /> },
        { path: "about/:id", element: <About /> },
        { path: "print", element: <Prints /> },
        { path: "Product", element: <SamsungDeatils /> },
        { path: "footer", element: <Footer /> },
        { path: "location", element: <LocationMap /> },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
