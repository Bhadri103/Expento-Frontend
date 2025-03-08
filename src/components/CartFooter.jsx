import { useState } from "react";
import { MapPin } from "lucide-react";
import React from "react";
import { FaEllipsisV } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const data = {
    slots: [
        { label: "Next 10 mins", disabled: true },
        { label: "Next 15 mins" },
        { label: "Next 45 mins" },
        { label: "10 AM - 12 PM" },
        { label: "12 PM - 2 PM" },
        { label: "2 PM - 4 AM" },
        { label: "4 PM - 6 PM" },
        { label: "8 PM - 10 PM" },
    ],
    addresses: [
        { label: "Home", details: "4517 Washington Ave. Manchester, Kentucky 39495" },
        { label: "Work", details: "2118 Thornridge Cir. Syracuse, Connecticut 35624" },
    ],
};




const DeliveryConfirmation = ({ setView, selectedSlot, selectedAddress }) => {
    const navigate = useNavigate();
    return (
        <div style={styles.container}>
            <div style={styles.deliverySection}>
                <p style={styles.deliveryText}>Delivering to you in {selectedSlot || "15 mins"}!</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                    <p style={styles.infoText}>Delivery time has slightly increased due to heavy rains.</p>
                    <button style={styles.buttonPrimary} onClick={() => setView("slot")}>
                        Change Slot
                    </button>
                </div>
            </div>
            <div style={{ padding: "16px" }}>
                <div style={styles.addressSection}>
                    <p style={styles.addressText}>
                        {selectedAddress ? selectedAddress.label : "Default Address"}
                    </p>
                    <button style={styles.changeAddressButton} onClick={() => setView("address")}>
                        <MapPin color="#3B82F6" size={20} /> Change Address
                    </button>
                </div>
                <button style={styles.paymentButton} onClick={() => navigate("/payment") }>CONTINUE TO PAY ₹940</button>
            </div>
        </div>
    );
};

const DeliverySlotSelector = ({ setView, setSelectedSlot, selectedSlot }) => {
    return (
        <div style={styles.slotContainer}>
            <h3 style={styles.slotTitle}>Select Delivery Slot</h3>
            <p style={styles.slotSubtitle}>Today 17 Jul (Saturday)</p>
            <div style={styles.slotGrid}>
                {data.slots.map(({ label, disabled }) => (
                    <button
                        key={label}
                        style={{
                            ...styles.slotButton,
                            ...(selectedSlot === label && styles.selectedSlotButton),
                            ...(disabled && styles.disabledSlotButton),
                        }}
                        disabled={disabled}
                        onClick={() => {
                            if (!disabled) {
                                setSelectedSlot(label);
                                setView("confirmation");
                            }
                        }}
                    >
                        {label}
                    </button>
                ))}
            </div>
        </div>
    );
};

const AddressSelector = ({ setView, setSelectedAddress, selectedAddress }) => {
    return (
        <div style={styles.addressContainer}>
            <h3 style={styles.addressTitle}>Select an Address</h3>
            <ul style={styles.addressList}>
                {data.addresses.map((address) => (
                    <li key={address.label} style={styles.addressItem}>
                        <div style={styles.radioContainer}>
                            <input
                                type="radio"
                                name="address"
                                value={address.label}
                                checked={selectedAddress?.label === address.label}
                                onChange={() => {
                                    setSelectedAddress(address);
                                    setView("confirmation");
                                }}
                                style={styles.radio}
                            />
                            <div>
                                <p style={styles.addressLabel(selectedAddress?.label === address.label)}>
                                    {address.label}
                                </p>
                                <p style={styles.addressDetails}>{address.details}</p>
                            </div>
                        </div>
                        <FaEllipsisV size={18} color="#94A3B8" />
                    </li>
                ))}
            </ul>
            <div style={styles.addButton}>+ Add New Address</div>
        </div>
    );
};

const CartFooter = () => {
    const [view, setView] = useState("confirmation");
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [selectedAddress, setSelectedAddress] = useState(null);

    return (
        <div style={styles.footer}>
            {view === "confirmation" && (
                <DeliveryConfirmation
                    setView={setView}
                    selectedSlot={selectedSlot}
                    selectedAddress={selectedAddress}
                />
            )}
            {view === "slot" && (
                <DeliverySlotSelector
                    setView={setView}
                    setSelectedSlot={setSelectedSlot}
                    selectedSlot={selectedSlot}
                />
            )}
            {view === "address" && (
                <AddressSelector
                    setView={setView}
                    setSelectedAddress={setSelectedAddress}
                    selectedAddress={selectedAddress}
                />
            )}
        </div>
    );
};

export default CartFooter;




const styles = {
    container: {
        backgroundColor: "white",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        borderTopLeftRadius: "16px",
        borderTopRightRadius: "16px",
    },
    deliverySection: {
        backgroundColor: "#082A45",
        color: "white",
        padding: "16px",
        borderTopLeftRadius: "16px",
        borderTopRightRadius: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        gap: "4px",
    },
    deliveryText: {
        fontSize: "18px",
        fontWeight: "600",
        margin: "0",
        textAlign: "left",
    },
    infoText: {
        fontSize: "14px",
        color: "#D1D5DB",
        margin: "0",
        textAlign: "left",
    },
    buttonPrimary: {
        backgroundColor: "white",
        color: "#00203F",
        padding: "8px 16px",
        borderRadius: "8px",
        fontWeight: "600",
        width: "200px",
        marginTop: "8px",
        border: "none",
        cursor: "pointer",
    },
    addressSection: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    addressText: {
        fontWeight: "600",
        margin: "0",
        display: "flex",
        alignItems: "center",
        gap: "8px",
    },
    changeAddressButton: {
        color: "#3B82F6",
        display: "flex",
        alignItems: "center",
        gap: "4px",
        background: "none",
        border: "none",
        cursor: "pointer",
    },
    paymentButton: {
        width: "100%",
        backgroundColor: "#082A45",
        color: "white",
        fontSize: "18px",
        padding: "12px 0",
        borderRadius: "8px",
        fontWeight: "600",
        marginTop: "16px",
        border: "none",
        cursor: "pointer",
    },
    slotContainer: {
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "16px 16px 0 0",
        boxShadow: "0 -2px 10px rgba(0,0,0,0.1)",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
    },
    slotTitle: { fontSize: "18px", fontWeight: "bold", color: "#1E293B" },
    slotSubtitle: { fontSize: "14px", color: "#64748B", marginBottom: "15px" },
    slotGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" },
    slotButton: {
        padding: "12px",
        fontSize: "14px",
        borderRadius: "8px",
        border: "2px solid #E2E8F0",
        backgroundColor: "white",
        color: "#1E293B",
        fontWeight: "bold",
        cursor: "pointer",
        textAlign: "center",
        width: "100%",
    },
    selectedSlotButton: {
        borderColor: "#0F172A",
        color: "#0F172A",
        backgroundColor: "white",
    },
    disabledSlotButton: {
        backgroundColor: "#E2E8F0",
        color: "#94A3B8",
        cursor: "not-allowed",
        border: "2px solid #E2E8F0",
    },
    addressContainer: {
        background: "white",
        borderRadius: "12px",
        padding: "16px",
        fontFamily: "Arial, sans-serif",
    },
    addressTitle: {
        fontSize: "18px",
        fontWeight: "bold",
        color: "#1E293B",
        textAlign: "left",
    },
    addressList: {
        listStyle: "none",
        padding: 0,
        margin: "15px 0",
    },
    addressItem: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "15px",
        borderBottom: "1px solid #E5E7EB",
        cursor: "pointer",
    },
    radioContainer: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
    },
    addressLabel: (isSelected) => ({
        fontSize: "16px",
        fontWeight: isSelected ? "bold" : "normal",
        color: "#1E293B",
        margin: "0",
        textAlign: "left",
    }),
    addressDetails: {
        fontSize: "14px",
        color: "#64748B",
        margin: "0",
        textAlign: "left",
    },
    addButton: {
        background: "#082A45",
        color: "white",
        padding: "12px",
        borderRadius: "8px",
        fontSize: "16px",
        textAlign: "center",
        cursor: "pointer",
        marginTop: "15px",
    },
    radio: {
        width: "18px",
        height: "18px",
        cursor: "pointer",
    },
    footer: {
        position: "fixed",
        bottom: "0",
        width: "100%",
        background: "white",
        boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
        textAlign: "center",
        borderTopLeftRadius: "16px",
        borderTopRightRadius: "16px",
        transition: "all 0.3s ease-in-out",
    },
};