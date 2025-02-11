import React, { useState, useEffect } from "react";
import SplashScreen from "../components/ui/Splashscreen";
import Loader from "../components/ui/Loader";
import Navbar from "../components/ui/NavBar";

export default function LandingPage() {
  const [showSplash, setShowSplash] = useState(
    !sessionStorage.getItem("splashShown")
  );

  useEffect(() => {
    if (showSplash) {
      sessionStorage.setItem("splashShown", "true");
    }
  }, [showSplash]);

  return showSplash ? (
    <SplashScreen onComplete={() => setShowSplash(false)} />
  ) : (
    <>
      <Navbar />
      <Loader />
    </>
  );
}
