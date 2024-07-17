// ChatInterface.jsx
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { SessionsClient } from '@google-cloud/dialogflow';

function ChatInterface() {
  const [sessionId, setSessionId] = useState(uuidv4());
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const projectId = 'chatagent-cckd'; // Replace with your Dialogflow project ID

  useEffect(() => {
    // Initialize the Dialogflow session client
    const sessionClient = new SessionsClient();
    const sessionPath = sessionClient.sessionPath(projectId, sessionId);

    // Function to handle user input and send it to Dialogflow
    const handleUserInput = async () => {
      try {
        // Send user input to Dialogflow
        const responses = await sessionClient.detectIntent({
          session: sessionPath,
          queryInput: {
            text: {
              text: userInput,
              languageCode: 'en-US',
            },
          },
        });

        // Process and display chatbot responses
        // ...
      } catch(error) {
        // Handle any errors from the Dialogflow interaction
        console.error('Error interacting with Dialogflow', error);
      }
    };

    // Cleanup function
    return () => {
      // Clean up any resources if necessary
    };
  }, [sessionId, userInput]); // Dependency array ensures the effect runs when sessionId or userInput changes

  return (
    <div>
      {/* Your chat interface UI components */}
    </div>
  );
}

export default ChatInterface;