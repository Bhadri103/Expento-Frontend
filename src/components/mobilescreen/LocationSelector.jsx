import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { MdSearch, MdMyLocation, MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

function UpdateMapView({ coords }) {
    const map = useMap();
    map.setView(coords, 13);
    return null;
}

export default function LocationSelector() {
    const [location, setLocation] = useState("chennai, tamil nadu, india");
    const [coords, setCoords] = useState([11.1085, 77.3411]);

    const handleSearch = async (event) => {
        const address = event.target.value;
        if (!address) return;

        const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${address}`);
        const data = await response.json();

        if (data.length > 0) {
            const { lat, lon, display_name } = data[0];
            setCoords([parseFloat(lat), parseFloat(lon)]);
            setLocation(display_name);
        }
    };

    const getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                setCoords([latitude, longitude]);

                fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
                    .then((res) => res.json())
                    .then((data) => setLocation(data.display_name));
            });
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.topBar}>
                <div  style={styles.backButton}>
                    <FaArrowLeft style={styles.backIcon} onClick={() => window.history.back()} />
                </div>
                <h3 style={styles.title}>Confirm Delivery Location</h3>
            </div>

            <div style={styles.mapContainer}>
                <div style={styles.searchBar}>
                    <MdSearch style={styles.searchIcon} />
                    <input type="text" placeholder="Search" style={styles.searchBox} onBlur={handleSearch} />
                </div>

                <MapContainer center={coords} zoom={13} style={styles.mapPlaceholder} zoomControl={false}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={coords} />
                    <UpdateMapView coords={coords} />
                </MapContainer>

                <button style={styles.locationButton} onClick={getUserLocation}>
                    <MdMyLocation style={styles.locationIcon} />
                </button>
            </div>

            <div style={styles.content}>
                <h2 style={styles.heading}>Select Location</h2>
                <p style={styles.subText}>
                    <MdLocationOn style={styles.locationmark} /> {location}
                </p>
                <button style={styles.confirmButton}>Confirm Address</button>
            </div>
        </div>
    );
}

const styles = {
    container: {      height: "100vh", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" },
    topBar: { display: "flex", alignItems: "center", justifyContent: "center", position: "relative", padding: "20px 15px", background: "#fff", zIndex: 10 },
    backButton: { position: "absolute", left: "15px", textDecoration: "none" },
    backIcon: { fontSize: "22px", cursor: "pointer", color: "#000" },
    title: { fontSize: "18px", fontWeight: "bold", margin: "0 auto" },

    mapContainer: { flex: 1, position: "relative" },
    mapPlaceholder: {
        position: "absolute",
        top: 0, left: 0, width: "100%", height: "100%", background: "#ddd",
        zIndex: 1 /* Keeps map below other elements */
    },

    searchBar: {
        position: "absolute",
        top: "10px", left: "50%", transform: "translateX(-50%)",
        width: "90%", display: "flex", alignItems: "center",
        background: "#fff", padding: "10px", borderRadius: "8px",
        border: "1px solid #ccc", zIndex: 100 /* Ensures visibility above map */
    },
    searchIcon: { fontSize: "26px", color: "#666", marginRight: "10px" },
    searchBox: { flex: 1, border: "none", outline: "none", fontSize: "14px" },

    locationButton: {
        position: "absolute", bottom: "20px", right: "20px",
        width: "50px", height: "50px", background: "#082A45",
        borderRadius: "50%", border: "none", display: "flex",
        alignItems: "center", justifyContent: "center",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
        zIndex: 100 /* Ensures visibility above map */
    },
    locationIcon: { fontSize: "26px", color: "#fff" },

    content: { padding: "20px", display: "flex",flexDirection: "column", backgroundColor: "#fff", borderTopLeftRadius: "20px", borderTopRightRadius: "20px", overflow: "hidden", borderRadius: "20px", zIndex: 10 },
    heading: { fontSize: "22px", fontWeight: "bold" },
    subText: { fontSize: "16px", color: "#666" },
    locationmark: { fontSize: "18px", color: "#d9534f", marginRight: "3px" },
    confirmButton: { width: window.innerWidth >= 600 ? "200px" : "100%", alignSelf:"self-end", background: "#082A45", color: "#ffffff", padding: "12px 0", border: "none", borderRadius: "8px", cursor: "pointer", fontSize: "14px", fontWeight: "500", marginTop: "10px" },

};
