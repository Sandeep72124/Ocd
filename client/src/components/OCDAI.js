import { useState, useEffect } from "react";
import axios from 'axios';
import './OCDAI.css';
export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [chatLog, setChatLog] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setChatLog((prevChatLog) => [...prevChatLog, { type: 'user', message: inputValue }]);
    sendMessage(inputValue);
    setInputValue('');
  };

  const sendMessage = (message) => {
    const url = 'https://api.openai.com/v1/chat/completions';

    const data = {
      model: "gpt-3.5-turbo-0301",
      messages: [{ "role": "user", "content": message }]
    };

    setIsLoading(true);

    axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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',
      },
    })
      .then((response) => {
        setChatLog((prevChatLog) => [...prevChatLog, { type: 'bot', message: response.data.choices[0].message.content }]);
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    sendMessage("Hello!");
  }, []);

  return (
    <div className="container mx-auto max-w-[700px]">
      <div className="flex flex-col h-screen bg-gray-900">
        <h1>OCD Habit Tracker</h1>
        <div className="messages-container">
          <div className="flex flex-col space-y-4">
            {chatLog.map((message, index) => (
              <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`${message.type === 'user' ? 'bg-purple-500' : 'bg-gray-800'} rounded-lg p-4 text-white max-w-sm`}>
                  {message.message}
                </div>
              </div>
            ))}
            {isLoading && (
              <div key={chatLog.length} className="flex justify-start">
                <div className="bg-gray-800 rounded-lg p-4 text-white max-w-sm">
                  Loading...
                </div>
              </div>
            )}
          </div>
        </div>
        <form onSubmit={handleSubmit} className="input-container">
          <div className="input-form">
            <input
              type="text"
              className="input-field"
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              type="submit"
              className="send-button"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
