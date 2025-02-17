import React from "react";
import Chatbot from "Frontend/components/chatbot";


export default function HomeView() {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <Chatbot />
        </div>
    );
}

