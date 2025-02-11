import React, { useEffect } from "react";

export default function SplashScreen(
  { onComplete }
) {
  useEffect(() => {
   
    const timer = setTimeout(() => {
      onComplete(); 
    }, 1700); 

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      style={styles.bg}
      className="d-flex justify-content-center align-items-center"
    >
      <img
        src="/expento_logo.svg"
        alt="Expento Logo"
        width="150"
        className="animated-logo"
      />
      <style>
        {`
          @keyframes slideInAndGiggle {
            0% { transform: translateX(-100vw); opacity: 0; }
            50% { transform: translateX(0); opacity: 1; }
            65% { transform: translateX(15px); }
            75% { transform: translateX(-15px); }
            85% { transform: translateX(8px); }
            95% { transform: translateX(-8px); }
            100% { transform: translateX(0); }
          }
          .animated-logo {
            animation: slideInAndGiggle 1.5s ease-out;
          }
        `}
      </style>
    </div>
  );
}

const styles = {
  bg: {
    backgroundColor: "#082A45",
    height: "100vh",
    height:"100dvh",
    width:"100%"
  },
};
