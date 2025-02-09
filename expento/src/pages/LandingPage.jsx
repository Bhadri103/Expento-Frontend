import React, { useState } from "react";
import SplashScreen from "../components/ui/Splashscreen";
import Loader from "../components/ui/Loader";

export default function LandingPage() {
  const [showSplash, setShowSplash] = useState(true);

  return showSplash ? <SplashScreen onComplete={() => setShowSplash(false)} /> : null;
}
