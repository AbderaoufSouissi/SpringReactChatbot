import React, { useState } from "react";
import Header from "Frontend/components/Header";
import Sidebar from "Frontend/components/Sidebar";
import Chatbot from "Frontend/components/Chatbot";
import NewChatButton from "Frontend/components/NewChatButton";

export default function HomeView() {
    const [chatHistory, setChatHistory] = useState<{ sender: string; text: string }[]>([]);

    return (
        <div style={styles.container}>
            <Header />
            <div style={styles.contentWrapper}>
                <div style={styles.mainContent}>
                    <Sidebar chatHistory={chatHistory} />
                    <Chatbot setChatHistory={setChatHistory} chatHistory={chatHistory} />
                </div>
                <NewChatButton />
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
        background: "linear-gradient(135deg, #EAEAEA, #F5F5F5)",
        fontFamily: "'Poppins', sans-serif",
    },
    contentWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Centers the content, but not the header
        flex: 1, // Takes up the remaining space
    },
    mainContent: {
        display: "flex",
        width: "90%",
        height: "75%",
        marginTop: "20px",
        borderRadius: "15px",
        background: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        padding: "15px",
    },
};
