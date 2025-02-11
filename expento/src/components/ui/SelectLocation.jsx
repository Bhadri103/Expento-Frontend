import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa"; 

const SelectLocation = () => {
  const [selectedLocation, setSelectedLocation] = useState("Select Location");
  const [isOpen, setIsOpen] = useState(false);

  const locations = ["Chennai", "Bangalore", "Hyderabad", "Mumbai", "Delhi"];

  return (
    <div style={styles.container} onClick={() => setIsOpen(!isOpen)}>
      <div style={styles.selected}>
        {selectedLocation}
        <FaChevronDown style={styles.arrowIcon} />
      </div>
      {/* temporary drop down, there is  no design for it for now */}
      {isOpen && (
        <div style={styles.dropdown}>
          {locations.map((location, index) => (
            <div
              key={index}
              style={styles.option}
              onClick={() => {
                setSelectedLocation(location);
                setIsOpen(false);
              }}
            >
              {location}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    position: "relative",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
   
    background: "#0B2C47",
    padding: "5px 10px",
    borderRadius: "5px",
   
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
   
  },
  selected: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  arrowIcon: {
    marginLeft: "8px",
  },
  dropdown: {
    position: "absolute",
    top: "100%",
    left: 0,
    background: "white",
    color: "black",
    borderRadius: "5px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    zIndex: 10,
    width: "100%",
  },
  option: {
    padding: "10px",
    cursor: "pointer",
    borderBottom: "1px solid #ddd",
  },
};

export default SelectLocation;
