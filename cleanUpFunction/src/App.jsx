import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createConnection } from "./chat";

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState("https://localhost:1234");

  useEffect(() => {
    const connection = createConnection(roomId, serverUrl);

    connection.connect();

    return () => {
      connection.disconnect();
    };
  }, [serverUrl, roomId]);

  return (
    <>
      <label>
        serverUrl:{""}
        <input
          type="text"
          value={serverUrl}
          onChange={(event) => {
            setServerUrl(event.target.value);
          }}
        />
      </label>
      <h1>Welcome to the {roomId} room!</h1>
    </>
  );
}

function App() {
  const [roomId, setRoomId] = useState("general");

  const [show, setShow] = useState(false);

  return (
    <>
      <label>
        choose the ChatRoom:{""}
        <select
          value={roomId}
          onChange={(event) => setRoomId(event.target.value)}
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>

      <button onClick={() => setShow(!show)}>
        {show ? "closeChat" : "openChat"}
      </button>
      {show && <ChatRoom roomId={roomId} />}
    </>
  );
}

export default App;
