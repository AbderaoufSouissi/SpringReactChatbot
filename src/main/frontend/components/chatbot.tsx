import { useState } from "react";
import { ChatbotService } from "Frontend/generated/endpoints";

export default function Chatbot() {
    const [message, setMessage] = useState("");
    const [chatHistory, setChatHistory] = useState<{ sender: string; text: string }[]>([]);

    const sendMessage = async () => {
        if (!message.trim()) return;

        // Add user message to chat
        setChatHistory((prev) => [...prev, { sender: "You", text: message }]);

        try {
            // Ensure response is explicitly typed as a string
            const response: string | undefined = await ChatbotService.getResponse(message);

            // Add bot response to chat, with fallback if the response is empty
            setChatHistory((prev) => [
                ...prev,
                { sender: "Bot", text: response || "No response received" },
            ]);
        } catch (error) {
            console.error("Error fetching response:", error);
            setChatHistory((prev) => [
                ...prev,
                { sender: "Bot", text: "Error processing request" },
            ]);
        }

        // Clear the input field
        setMessage("");
    };

    return (
        <div style={styles.container}>
            <div style={styles.chatWindow}>
                {chatHistory.map((chat, index) => (
                    <div key={index} style={chat.sender === "You" ? styles.userMessage : styles.botMessage}>
                        <strong>{chat.sender}:</strong> {chat.text}
                    </div>
                ))}
            </div>
            <div style={styles.inputContainer}>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your question..."
                    style={styles.input}
                />
                <button onClick={sendMessage} style={styles.button}>
                    Send
                </button>
            </div>
        </div>
    );
}

// Inline styles with larger UI
const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        width: "600px", // Increased width
        margin: "auto",
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "20px", // Increased padding
    },
    chatWindow: {
        height: "500px", // Increased height
        overflowY: "auto",
        padding: "20px", // Increased padding
        borderBottom: "1px solid #ccc",
    },
    userMessage: {
        textAlign: "right",
        color: "blue",
        margin: "10px 0", // Increased margin
    },
    botMessage: {
        textAlign: "left",
        color: "green",
        margin: "10px 0", // Increased margin
    },
    inputContainer: {
        display: "flex",
        marginTop: "20px", // Increased margin
    },
    input: {
        flex: 1,
        padding: "12px", // Increased padding
        borderRadius: "5px",
        border: "1px solid #ccc",
        fontSize: "16px", // Larger font
    },
    button: {
        marginLeft: "10px", // Increased margin
        padding: "12px 20px", // Increased padding
        background: "blue",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px", // Larger font
    },
};
