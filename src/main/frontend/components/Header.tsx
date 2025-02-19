// Header.tsx
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
        width: "100px", // Logo width (you can adjust the size)
        height: "100px", // Logo height (same as width for a circle)
        marginRight: "20px", // Adjusted margin to give more space between logo and title
        borderRadius: "50%", // Makes the logo circular
        objectFit: "cover", // Ensures the image covers the area without distortion
    },
    title: {
        fontSize: "36px", // Larger font size for modern look
        color: "#2c3e50", // Darker, more modern color
        fontWeight: "600", // Semi-bold for a stronger appearance
        letterSpacing: "1px", // Slightly spaced letters for a modern feel
        textTransform: "uppercase", // Uppercase letters for a clean and bold look
        fontFamily: "'Roboto', sans-serif", // Modern font family
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
        margin: 0, // Remove default margin
    },
};
