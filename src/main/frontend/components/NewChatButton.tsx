import React from "react";

export default function NewChatButton() {
    const openNewChat = () => {
        window.open(window.location.href, "_blank"); // Opens a new chat window
    };

    return (
        <button style={styles.button} onClick={openNewChat}>
            ➕ New Chat
        </button>
    );
}

// Styling for the button
const styles = {
    button: {
        position: "absolute", // Positions it relative to the page
        top: "20px", // Distance from the top
        left: "20px", // Distance from the left
        padding: "10px 15px",
        fontSize: "16px",
        fontWeight: "bold",
        backgroundColor: "blue", // A chatbot-style blue
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Adds a modern shadow
        transition: "background 0.3s ease, transform 0.2s ease",
    },
};
