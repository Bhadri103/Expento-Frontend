import React, { useState } from "react";
import { FaMoneyBillWave, FaGoogle, FaCreditCard } from "react-icons/fa";
import { SiPhonepe, SiPaytm } from "react-icons/si";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Payment() {
  const [selected, setSelected] = useState("Cash on delivery");

  const paymentOptions = [
    { name: "Cash on delivery", icon: <FaMoneyBillWave size={20} /> },
    { name: "Google Pay UPI", icon: <FaGoogle size={20} style={{ color: "#4285F4" }} /> },
    { name: "PhonePe UPI", icon: <SiPhonepe size={20} style={{ color: "#6739B7" }} /> },
    { name: "Paytm UPI", icon: <SiPaytm size={20} style={{ color: "#002970" }} /> },
    { name: "Credit / Debit Card", icon: <FaCreditCard size={20} /> }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.logoContainer}>
        <img src="/expento_logo.svg" style={styles.logo} alt="logo" />
      </div>
      <div style={styles.paymentBox}>
        <div className="px-2">
          <h4 className="text-left mb-3">Select your payment option</h4>
          <div className="d-grid gap-2">
            {paymentOptions.map((option) => (
              <button
                key={option.name}
                onClick={() => setSelected(option.name)}
                style={
                  selected === option.name
                    ? { ...styles.button, ...styles.selectedButton }
                    : styles.button
                }
                className="d-flex align-items-center gap-2 p-3"
              >
                {option.icon}
                <span>{option.name}</span>
              </button>
            ))}
          </div>
        </div>
        <button style={styles.payButton} className="btn w-100 mt-3">Pay</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    height: "100vh",
    height: "100dvh",
  
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100px",
    background: "#082A45"
  },
  logo: {
    width: "100px",
    height: "100px"
  },
  paymentBox: {
 
    padding: "1.5rem",
    width: "100%",
    borderRadius: "8px",
    height: "100dvh",
    boxShadow: "0 0 10px rgba(0,0,0,0.15)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  button: {
    border: "1px solid rgba(52, 58, 64, 0)",
    background: "#EEEEEE",
    cursor: "pointer",
    borderRadius: "8px"
  },
  selectedButton: {
    border: "1px solid #343a40",
   boxShadow: "0 0 10px rgba(0,0,0,0.15)"
  },
  payButton: {
    background: "#082A45",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    padding: "10px 20px",
    borderRadius: "4px"
  }
};
