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

// Enhanced styles with a light blue gradient and glassmorphism effect
const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        padding: "20px",
        background: "linear-gradient(135deg, #89CFF0, #B0E0E6, #E0FFFF)", // Light blue gradient
        fontFamily: "'Poppins', sans-serif",
    },
    mainContent: {
        display: "flex",
        width: "90%",
        height: "80%",
        marginTop: "20px",
        borderRadius: "15px",
        background: "rgba(255, 255, 255, 0.2)", // Semi-transparent white for glass effect
        backdropFilter: "blur(15px)", // Stronger frosted glass effect
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)", // Soft depth effect
        padding: "20px",
        transition: "transform 0.3s ease-in-out",
    },
};

