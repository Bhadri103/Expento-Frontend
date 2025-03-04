import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";



const priceList = [
  { label: "Item Total", original: 941, discounted: 921 },
  { label: "Delivery Fee", original: 35, discounted: 0, saved: 35 },
  { label: "Delivery Partner Tip", discounted: 20 },
];

export default function CostList() {
  return (
    <div style={styles.container} >
      {priceList.map((item, index) => (
        <div key={index} style={styles.row}>
          <span style={item.saved ? styles.textGreen : styles.textGray}>
            {item.label} {item.saved && <span style={styles.textGreen}>(₹{item.saved} Saved)</span>}
          </span>
          <span>
            {item.original !== undefined && (
              <span style={styles.textStrike}>₹{item.original}</span>
            )}
            <span style={styles.textBlackBold}>₹{item.discounted}</span>
          </span>
        </div>
      ))}
      <hr style={styles.hr} />
      <div style={styles.row}>
        <span style={styles.textBlackBold}>Total Payable</span>
        <span style={styles.textBlackBold}>₹941</span>
      </div>
    </div>
  );
}



const styles = {
    container: {
      boxShadow: "0.3px 0.3px 10px rgba(123, 123, 123, 0.4)",
      padding: "16px",
      width: "100%",
      backgroundColor: "white",
      marginTop: "16px",
    },
    textGray: {
      color: "#000000",
      fontWeight: "500",
    },
    textGreen: {
      color: "#2CB562",
      fontWeight: "500",
    },
    textBlackBold: {
      fontWeight: "bold",
    },
    textStrike: {
      textDecoration: "line-through",
      color: "gray",
      fontSize: "12px",
      marginRight: "4px",
    },
    row: {
      display: "flex",
      justifyContent: "space-between",
      padding: "3px 0",
    },
    hr: {
      borderColor: "#ccc",
      margin: "8px 0",
    },
  };