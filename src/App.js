import logo from "./logo.svg";
import "./App.css";
import Zoom from "./Zoom";
import { useState } from "react";

function App() {
  const [joinMeeting, setJoinMeeting] = useState(false);
  return (
    <div className="App">
      {joinMeeting ? (
        <Zoom />
      ) : (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <button
            style={{ border: "1px solid #2681F2" }}
            onClick={() => setJoinMeeting(true)}
          >
            Join Meeting
          </button>
        </header>
      )}
    </div>
  );
}

export default App;
