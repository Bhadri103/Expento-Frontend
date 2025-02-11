import React, { useState, useEffect, Suspense, lazy } from "react";
import Loader from "../components/ui/Loader";

const Login = lazy(() => import("../components/mobilescreen/Login"));
const LoginScreen = lazy(() => import("../components/screen/LoginScreen"));

export default function LoginPage() {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 700px)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");

    const handleResize = (e) => setIsMobile(e.matches);

    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      {isMobile ? <Login /> : <LoginScreen />}
    </Suspense>
  );
}
