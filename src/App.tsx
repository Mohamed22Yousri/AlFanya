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
import Details from "./Modules/About/Details/Kyocera5550";
import Ky5551ci from "./Modules/About/Details/Ky5551ci/Ky5551ci";
import Ky3051 from "./Modules/About/Details/Ky3051/Ky3051";
import Ky3551 from "./Modules/About/Details/Ky3551/Ky3551";
import Ky4551 from "./Modules/About/Details/Ky4551/Ky4551";
import Ky2551 from "./Modules/About/Details/Ky255/Ky2551";

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
        { path: "5550ci", element: <Details /> },
        { path: "5551ci", element: <Ky5551ci /> },
        { path: "3051", element: <Ky3051 /> },
        { path: "3551", element: <Ky3551/> },
        { path: "4551", element: <Ky4551/> },
        { path: "2551", element: <Ky2551/> },
        { path: "print", element: <Prints /> },
        { path: "Product", element: <SamsungDeatils /> },
        { path: "footer", element: <Footer /> },
        { path: "location", element: <LocationMap /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
