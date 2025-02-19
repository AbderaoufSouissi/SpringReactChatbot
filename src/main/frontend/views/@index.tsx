import React, { useState } from "react";
import Header from "Frontend/components/Header";
import Sidebar from "Frontend/components/Sidebar";
import Chatbot from "Frontend/components/Chatbot";
import NewChatButton from "Frontend/components/NewChatButton"; // Import the new button

export default function HomeView() {
    const [chatHistory, setChatHistory] = useState<{ sender: string; text: string }[]>([]);

    return (
        <div style={styles.container}>
            <Header />
            <div style={styles.mainContent}>
                <Sidebar chatHistory={chatHistory} />
                <Chatbot setChatHistory={setChatHistory} chatHistory={chatHistory} />
            </div>
            <NewChatButton /> {/* New chat button */}
        </div>
    );
}

// Adjusted styles to move everything up
const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        background: "linear-gradient(135deg, #89CFF0, #B0E0E6, #E0FFFF)",
        fontFamily: "'Poppins', sans-serif",
    },
    mainContent: {
        display: "flex",
        width: "90%",
        height: "75%",
        marginTop: "10px",
        borderRadius: "15px",
        background: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(15px)",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
        padding: "15px",
        transition: "transform 0.3s ease-in-out",
    },
};
