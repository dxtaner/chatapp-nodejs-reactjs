import "./App.css";
import Container from "./components/Container.js";
import { ChatProvider } from "./context/ChatContext.js";

function App() {
  return (
    <ChatProvider>
      <div className="app">
        <Container />
        <footer className="footer">
          <p>
            This chat application || 2024 ||{" "}
            <a
              href="https://github.com/dxtaner"
              target="_blank"
              rel="noopener noreferrer">
              dxtaner
            </a>
          </p>
        </footer>
      </div>
    </ChatProvider>
  );
}

export default App;
