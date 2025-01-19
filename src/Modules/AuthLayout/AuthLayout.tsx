import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../NavBar/Component/NavBar";
import NavBarTwo from '../NavBar/Component/NavBarTwo';
import Footer from "../Footer/Footer";
import { CircleLoader } from "react-spinners";
import { Stack } from "@mui/material";

const AuthLayout = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation(); // للحصول على المسار الحالي

  useEffect(() => {
    // تحديد مدة شاشة التحميل لكل الصفحات باستثناء about
    if (location.pathname !== "/about") {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000); // تحديد وقت الـ loading

      return () => clearTimeout(timer);
    } else {
      setLoading(false); // لا يوجد تحميل في صفحة About
    }
  }, [location.pathname]);

  return (
    <>
      {loading ? (
        <Stack
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "black", // تحديد اللون الأسود أثناء التحميل
          }}
        >
          <CircleLoader color="blue" size={60} />
        </Stack>
      ) : (
        <>
          <NavBar />
          <NavBarTwo />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
};

export default AuthLayout;
