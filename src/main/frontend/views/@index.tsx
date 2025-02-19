// @index.tsx
import React, { useState } from "react";
import Header from "Frontend/components/Header";
import Sidebar from "Frontend/components/Sidebar";
import Chatbot from "Frontend/components/Chatbot";

export default function HomeView() {
    const [chatHistory, setChatHistory] = useState<{ sender: string; text: string }[]>([]);

    return (
        <div style={styles.container}>
            <Header />
            <div style={styles.mainContent}>
                <Sidebar chatHistory={chatHistory} />
                <Chatbot setChatHistory={setChatHistory} chatHistory={chatHistory} />
            </div>
        </div>
    );
}

// Enhanced styles with a modern gradient, glassmorphism effect, and new font
const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        padding: "20px",
        background: "linear-gradient(135deg, #1e90ff, #00bfff, #87cefa)", // Deeper blue gradient, representing chatbot style
        fontFamily: "'Roboto', sans-serif", // Modern, legible font
    },
    mainContent: {
        display: "flex",
        width: "90%",
        height: "80%",
        marginTop: "20px",
        borderRadius: "15px",
        background: "rgba(255, 255, 255, 0.3)", // Lighter glass effect
        backdropFilter: "blur(15px)", // Frosted glass effect
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)", // Depth effect
        padding: "20px",
        transition: "transform 0.3s ease-in-out",
    },
};
