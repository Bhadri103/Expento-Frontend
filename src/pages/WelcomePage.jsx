import React, { useState, useEffect, Suspense, lazy } from "react";
import Loader from "../components/ui/Loader";
import LayoutWrapper from "../components/ui/LayoutWrapper";

const Welcome = lazy(() => import("../components/mobilescreen/Welcome"));
const WelcomeScreen = lazy(() => import("../components/screen/WelcomeScreen"));

export default function WelcomePage() {

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
    <Suspense fallback={<Loader />}>
      {isMobile ? <Welcome /> :
        <>
          <LayoutWrapper>
            <WelcomeScreen />
          </LayoutWrapper>

        </>
      }
    </Suspense>
  )
}
