// Header.tsx
import React from "react";

export default function Header() {
    return (
        <div style={styles.header}>
            <img src="/logo.png" alt="Logo" style={styles.logo} />      {/* Logo image */}
            <h1 style={styles.title}>Chatbot Application</h1>
        </div>
    );
}

// Inline styles for the Header component
const styles = {
    header: {
        width: "100%",
        padding: "20px",
        backgroundColor: "#f4f4f4",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderBottom: "2px solid #ccc",
    },
    logo: {
        width: "40px", // Logo width
        height: "40px", // Logo height
        marginRight: "10px",
    },
    title: {
        fontSize: "24px",
        color: "#333",
    },
};
