import { ChatEngine } from "react-chat-engine";
import "./css/chat.css";
const Chat = () => {
  return (
    <div>
      <h1>
        <ChatEngine
          height="100vh"
          userName={localStorage.getItem("username")}
          userSecret={localStorage.getItem("password")}
          projectID="e56bb760-9f2b-4a24-9073-bc3d6fdccdc4"
        />
      </h1>
    </div>
  );
};

export default Chat;
