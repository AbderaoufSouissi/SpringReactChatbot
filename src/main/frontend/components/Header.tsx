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
        backgroundColor: "#89CFF0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderBottom: "2px solid #00bfff",
        // Removed `position: "fixed"` so it scrolls naturally
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
        color: "#ffffff",
        fontWeight: "600",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontFamily: "'Roboto', sans-serif",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
        margin: 0,
    },
};
