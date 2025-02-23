import React, { useState, useEffect, Suspense, lazy } from "react";
import Loader from "../components/ui/Loader";
import NavBar from "../components/ui/NavBar";
import Footer from "../components/ui/Footer";
import LayoutWrapper from "../components/ui/LayoutWrapper";
const Signup = lazy(() => import("../components/mobilescreen/Signup"));
const SignupScreen = lazy(() => import("../components/screen/SignupScreen"));


export default function SignupPage() {

    const [isMobile, setIsMobile] = useState(
      window.matchMedia("(max-width: 600px)").matches
    );
  
    useEffect(() => {
      const mediaQuery = window.matchMedia("(max-width: 600px)");
  
      const handleResize = (e) => setIsMobile(e.matches);
  
      mediaQuery.addEventListener("change", handleResize);
      return () => mediaQuery.removeEventListener("change", handleResize);
    }, []);


  return (
    <div>
     <Suspense fallback={<Loader />}>
      {isMobile ? <Signup /> :
        <>
       <LayoutWrapper>
          <SignupScreen />
         </LayoutWrapper>
        </>
      }
    </Suspense>
    </div>
  )
}
