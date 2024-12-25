import { Outlet } from "react-router-dom"
import NavBar from "../NavBar/Component/NavBar"
import NavBarTwo from './../NavBar/Component/NavBarTwo';
import Footer from "../Footer/Footer";

const AuthLayout = () => {
  return (
    <>
    <NavBar/>
    <NavBarTwo/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default AuthLayout