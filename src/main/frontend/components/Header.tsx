import React from "react";
// @ts-ignore
import logo from "../../resources/static/chatbot_logo.png";

export default function Header() {
    return (
        <div style={styles.header}>
            <img src={logo} alt="Logo" style={styles.logo} />
            <h1 style={styles.title}>DeepCortex</h1>
        </div>
    );
}

const styles = {
    header: {
        width: "100%",
        padding: "10px",
        backgroundColor: "#F5F5F5", // Light gray background
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderBottom: "2px solid #D3D3D3", // Soft gray border
    },
    logo: {
        width: "100px",
        height: "100px",
        marginRight: "20px",
        borderRadius: "50%",
        objectFit: "cover",
    },
    title: {
        fontSize: "36px",
        color: "#333333", // Dark gray for contrast
        fontWeight: "700",
        letterSpacing: "1.5px",
        textTransform: "uppercase",
        fontFamily: "'Montserrat', sans-serif",
        margin: 0,
    },
};