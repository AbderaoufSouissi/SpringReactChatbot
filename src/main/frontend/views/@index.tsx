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

// Inline styles for the main layout
const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        padding: "20px",
    },
    mainContent: {
        display: "flex",
        width: "100%",
        height: "80%", // Adjust this to give space to the chatbot
        marginTop: "20px",
    },
};
