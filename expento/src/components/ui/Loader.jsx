import React from "react";

export default function Loader() {
  return (
    <div style={styles.loaderContainer}>
      <div className="loader">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <style>
        {`
          .loader {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 8px;
          }

          .loader span {
            width: 12px;
            height: 12px;
            background-color: #082A45;
            border-radius: 50%;
            display: inline-block;
            animation: wave 1.2s infinite ease-in-out;
          }

          .loader span:nth-child(1) { animation-delay: 0s; }
          .loader span:nth-child(2) { animation-delay: 0.2s; }
          .loader span:nth-child(3) { animation-delay: 0.4s; }

          @keyframes wave {
            0%, 100% { transform: translateY(0); opacity: 0.5; }
            50% { transform: translateY(-10px); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}

const styles = {
  loaderContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    height: "100dvh",
    backgroundColor: "#F8F9FA", 
  },
};
