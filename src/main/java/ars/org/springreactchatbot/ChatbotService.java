package ars.org.springreactchatbot;

import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.BrowserCallable;
import org.springframework.stereotype.Service;

import java.io.*;

@Service
@BrowserCallable
@AnonymousAllowed
public class ChatbotService {

    public String getResponse(String userInput) {
        try {
            // Directly pass user input without adding any special formatting
            String formattedInput = userInput;

            // Ensure deepseek-r1:1.5b model is available
            ProcessBuilder processBuilder = new ProcessBuilder(
                    "ollama", "run", "deepseek-r1:1.5b"
            );

            Process process = processBuilder.start();

            // Send the user input to Ollama
            BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(process.getOutputStream()));
            writer.write(formattedInput + "\n");
            writer.flush();
            writer.close();

            // Read the response from the model
            BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
            StringBuilder responseBuilder = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                responseBuilder.append(line).append("\n");
            }
            process.waitFor();

            // Return the model's response
            return responseBuilder.toString().trim();
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
            return "Error processing request";
        }
    }
}

