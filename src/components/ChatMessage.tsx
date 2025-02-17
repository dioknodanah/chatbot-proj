import ChatbotIcon from "./ChatbotIcon";

interface ChatMessageProps {
  chat: {
    role: "user" | "bot";
    text: string;
  };
}

const ChatMessage = ({ chat }: ChatMessageProps) => {
  return (
    <div className={`message ${chat.role === "bot" ? "messagebot" : "messageuser"}`}>
      {chat.role === "bot" && <ChatbotIcon />}
      <p className="message-text">{chat.text}</p>
    </div>
  );
};

export default ChatMessage;
