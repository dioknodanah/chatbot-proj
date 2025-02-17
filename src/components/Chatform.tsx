import { useRef } from "react";

interface Message {
  role: "user" | "bot";
  text: string;
}


interface ChatformProps {
  setchatHistory: React.Dispatch<React.SetStateAction<Message[]>>;
  chatHistory: Message[]; 
  botResponse: (history: Message[]) => void; 
}

const Chatform: React.FC<ChatformProps> = ({ chatHistory, setchatHistory, botResponse }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleForm = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputRef.current) {
      const userMessage = inputRef.current.value.trim();
      if (!userMessage) return;
      inputRef.current.value = "";

      setchatHistory((history) => [
        ...history,
        { role: "user", text: userMessage },
      ]);

      setTimeout(() => {
        setchatHistory((history) => [
          ...history,
          { role: "bot", text: "Thinking..." },
        ]);

        botResponse([...chatHistory, { role: "user", text: userMessage }]);
      }, 600); 
    }
  };

  return (
    <form action="#" className="chat-form" onSubmit={handleForm}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Message..."
        className="message-input"
        required
      />
      <button className="material-symbols-rounded">arrow_upward</button>
    </form>
  );
};

export default Chatform;
