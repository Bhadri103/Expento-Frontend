import React, { useState } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { TbDoor } from "react-icons/tb";

export default function DeliveryInstruction() {
  const [selected, setSelected] = useState("Return the bag");

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Delivery Instructions</h2>
      <p style={styles.subText}>Delivery partner will be notified</p>

      <div style={styles.scrollWrapper}>
        <div style={styles.wrapper}>

          <div
            style={selected === "Return the bag" ? styles.cardSelected : styles.card}
            onClick={() => setSelected("Return the bag")}
          >
            <div style={styles.iconWrapper}>
              <FiShoppingBag style={styles.icon} />
              <h3 style={styles.title}>Return the bag</h3>
            </div>
            <p style={styles.text}>
              Help us reuse old bags by returning them to the delivery partner.
            </p>
          </div>

          <div
            style={selected === "No Contact Delivery" ? styles.cardSelected : styles.card}
            onClick={() => setSelected("No Contact Delivery")}
          >
            <div style={styles.iconWrapper}>
              <TbDoor style={styles.icon} />
              <h3 style={styles.title}>No Contact Delivery</h3>
            </div>
            <p style={styles.text}>
              Delivery partner will leave the package at your door.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    boxShadow: "0.3px 0.3px 10px rgba(123, 123, 123, 0.4)",
    padding: "16px",
    width: "100%",
    marginTop: "16px",
  
    overflow: "hidden",
  },
  heading: {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "8px",
  },
  subText: {
    color: "gray",
    marginBottom: "16px",
  },
  scrollWrapper: {
    overflowX: "auto",
    display: "flex",
    gap: "12px",
    overflowX: "auto",
    paddingBottom: "8px",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  wrapper: {
    display: "inline-flex",
    gap: "16px",
  },
  cardSelected: {
    flex: "0 0 auto",
    width: "fit-content",
    padding: "16px",
    borderRadius: "8px",
    backgroundColor: "#CAE0F5",
    boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
    cursor: "pointer",
    textAlign: "left",
  },
  card: {
    flex: "0 0 auto",
    width: "fit-content",
    padding: "16px",
    borderRadius: "8px",
    boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
    cursor: "pointer",
    textAlign: "left",
  },
  iconWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "8px",
  },
  icon: {
    fontSize: "30px",
    flexShrink: 0,
  },
  title: {
    fontWeight: "600",
    flexGrow: 1,
  },
  text: {
    color: "gray",
    fontSize: "14px",
    marginTop: "4px",
  },
};
