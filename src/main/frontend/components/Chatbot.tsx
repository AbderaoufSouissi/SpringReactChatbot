import { useState, useEffect } from "react";
import { ChatbotService } from "Frontend/generated/endpoints";

// Define the types for chat message
interface ChatMessage {
    sender: string;
    text: string;
}

interface ChatbotProps {
    setChatHistory: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
    chatHistory: ChatMessage[];
}

export default function Chatbot({ setChatHistory, chatHistory }: ChatbotProps) {
    const [message, setMessage] = useState("");
    const [isGreetingVisible, setIsGreetingVisible] = useState(true); // State to control greeting visibility

    useEffect(() => {
        // Initialize chat with greeting message if it's the first render
        if (isGreetingVisible) {
            setChatHistory((prev) => [
                ...prev,
                { sender: "Bot", text: "Hi, I'm Cortex. How can I help you today ?" },
            ]);
        }
    }, [isGreetingVisible, setChatHistory]);

    const sendMessage = async () => {
        if (!message.trim()) return;

        // Add user message to chat
        setChatHistory((prev) => [...prev, { sender: "You", text: message }]);

        // Hide greeting message after the user sends the first message
        if (isGreetingVisible) {
            setIsGreetingVisible(false);
        }

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
                {chatHistory.map((chat: ChatMessage, index: number) => (
                    <div
                        key={index}
                        style={chat.sender === "You" ? styles.userMessage : styles.botMessage}
                    >
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
        flex: 1, // This allows the chatbot to take remaining space
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "10px",
        border: "1px solid #ccc",
    },
    chatWindow: {
        height: "500px", // Increased height
        overflowY: "auto",
        padding: "20px",
        borderBottom: "1px solid #ccc",
    },
    userMessage: {
        textAlign: "right",
        color: "black", // Change user message color to black
        margin: "10px 0",
    },
    botMessage: {
        textAlign: "left",
        color: "black", // Change bot message color to black
        margin: "10px 0",
    },
    inputContainer: {
        display: "flex",
        marginTop: "20px",
    },
    input: {
        flex: 1,
        padding: "12px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        fontSize: "16px",
    },
    button: {
        marginLeft: "10px",
        padding: "12px 20px",
        background: "blue",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
    },
};

