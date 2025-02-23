import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
        <footer style={styles.footer}>
            <div className="container">
                <div className="row">

                    <div className="col-md-3">
                        <div style={styles.titleContainer}>
                            <h3 style={styles.title}>GET IN TOUCH WITH US</h3>
                        </div>
                        <p>Phone: +91 12345893</p>
                        <a href="#" style={styles.link} >
                            customersupport@superssmart.com
                        </a>
                        <div className="mt-3">
                            <span style={styles.iconSpan}><a href="#" style={styles.icon}><FaFacebookF /></a></span>
                            <span style={styles.iconSpan}> <a href="#" style={styles.icon}><FaInstagram /></a></span>

                            <span style={styles.iconSpan}> <a href="#" style={styles.icon}><FaYoutube /></a></span>
                        </div>
                    </div>


                    <div className="col-md-3">
                        <div style={styles.titleContainer}>
                            <h3 style={styles.title}>OUR MOBILE APP</h3>
                        </div>
                        <div style={styles.appContainer}><img src="/assets/appstore.svg" alt="" />
                            <div href="#" style={styles.appButton}> Download on the <br /><strong style={styles.link}>App Store</strong></div>
                        </div>
                        <div style={styles.appContainer}><img src="/assets/playstore.svg" alt="" />
                            <div href="#" style={styles.appButton}>Download on the <br /><strong style={styles.link}>Google Play</strong></div>
                        </div>
                    </div>


                    <div className="col-md-3">
                        <div style={styles.titleContainer}>
                            <h3 style={styles.title}>ABOUT US</h3>
                        </div>
                        <ul className="" style={styles.list}>
                            <li><Link to="/" style={styles.link}>About the Shop</Link></li>
                            <li><Link to="/" style={styles.link}>Contact us</Link></li>

                        </ul>
                    </div>


                    <div className="col-md-3">
                        <div style={styles.titleContainer}>
                            <h3 style={styles.title}>ACCOUNT & SHIPPING INFO</h3>
                        </div>
                        <ul style={styles.list}>
                            <li><Link to="/" style={styles.link}>Privacy Policy</Link></li>
                            <li><Link to="/" style={styles.link}>Terms & Conditions</Link></li>
                            <li><Link to="/" style={styles.link}>Returns & Refund</Link></li>
                            <li><Link to="/" style={styles.link}>Bonus Coins</Link></li>
                        </ul>
                    </div>
                </div>


                <div style={styles.bottomText}>
                    © All rights reserved. Made by Experto
                </div>
            </div>
        </footer>
    );
}

const styles = {
    footer: {
        backgroundColor: "#0E2A47",
        color: "white",
        padding: "40px 0",
    },
    title: {
        fontSize: "1rem",
        color: "rgba(255, 255, 255, 0.64)",
        fontWeight: "500",

    },
    titleContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        marginBottom: ".8rem",
        borderBottom: "1px solid rgba(255, 255, 255, 0.16)",
        paddingBottom: "3px",
    },
    link: {
        color: "white",
        textDecoration: "none",
    },
    list: {
        listStyleType: "disc",
        paddingLeft: "20px",
        color: "rgba(255, 255, 255, 0.69)",
    },
    icon: {
        fontSize: "1.2rem",
        color: "rgba(255, 255, 255, 0.68)",

    },
    iconSpan: {


        padding: "5px",
        border: "1px solid rgba(255, 255, 255, 0.16)",
        borderRadius: "50%",


    },
    appContainer: {
        display: "flex",
        alignItems: "center",
        marginBottom: "10px",
        cursor: "pointer",
        padding: "10px",
        borderRadius: "8px",
        width: "fit-content",
        gap: "10px",
        border: "1px solid rgba(255, 255, 255, 0.16)"
    },
    appButton: {

        color: "rgba(255, 255, 255, 0.68)",

        textAlign: "left",


        textDecoration: "none",

    },
    bottomText: {
        fontSize: "0.9rem",
        marginTop: "20px",
        paddingTop: "15px",
        borderTop: "1px solid rgba(255, 255, 255, 0.16)",
        textAlign: "left",
        color: "rgba(255, 255, 255, 0.69)",
    },
};
