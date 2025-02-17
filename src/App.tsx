import { useState } from "react";
import Chatform from "./components/Chatform";
import ChatbotIcon from "./components/ChatbotIcon";
import ChatMessage from "./components/ChatMessage";

interface Message {
  role: "user" | "bot";
  text: string;
}

const App = () => {
  const [chatHistory, setchatHistory] = useState<Message[]>([]);
  const [showChatbot, setChatbot] = useState<boolean>(false); // Initialize with a boolean value

  const botResponse = (history: Message[]) => {
    console.log(history);
    // setchatHistory((prev) => [
    //   ...prev,
    //   { role: "bot", text: "This is a bot response." },
    // ]);
  };

  return (
    <div className={`container ${showChatbot ? "show-chatbot" : "" }`}>
      <button onClick={() => setChatbot(prev => !prev)} id="chatbot-toggle">
        <span className="material-symbols-rounded">mode_comment</span>
        <span className="material-symbols-rounded">close</span>
      </button>

      <div className="chatbot">
        <div className="header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className="logo">Chatbot</h2>
          </div>
          <button onClick={() => setChatbot(prev => !prev)} className="material-symbols-rounded">keyboard_arrow_down</button>
        </div>

        <div className="body">
          <div className="message messagebot">
            <ChatbotIcon />
            <p className="message-text">
              Hi! <br /> How can I help you today?
            </p>
          </div>

          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}
        </div>

        <div className="footer">
          <Chatform
            chatHistory={chatHistory} 
            setchatHistory={setchatHistory}
            botResponse={botResponse} 
          />
        </div>
      </div>
    </div>
  );
};

export default App;
