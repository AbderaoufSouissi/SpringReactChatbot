// Sidebar.tsx
import React from "react";

interface SidebarProps {
    chatHistory: { sender: string; text: string }[];
}

export default function Sidebar({ chatHistory }: SidebarProps) {
    const recentMessages = chatHistory.slice(-5); // Show last 5 messages

    return (
        <div style={styles.container}>
            <h3 style={styles.title}>Recent Messages</h3>
            <div style={styles.messages}>
                {recentMessages.map((chat, index) => (
                    <div key={index} style={styles.message}>
                        <strong>{chat.sender}:</strong> {chat.text}
                    </div>
                ))}
            </div>
        </div>
    );
}

// Inline styles for Sidebar component
const styles = {
    container: {
        width: "250px", // Sidebar width
        padding: "20px", // Space inside the sidebar
        backgroundColor: "#f4f4f4", // Light gray background
        borderRadius: "10px",
        border: "2px solid #ccc",
        height: "92.5%", // Ensure it stretches full height
        marginRight: "20px", // Add some space between sidebar and chatbot
    },
    title: {
        fontSize: "18px",
        marginBottom: "10px",
        textAlign: "center",
    },
    messages: {
        maxHeight: "400px",
        overflowY: "auto",
    },
    message: {
        marginBottom: "8px",
        fontSize: "14px",
        color: "#333",
    },
};
