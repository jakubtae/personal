import "./App.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    document.title = "Jakub Tomczyk";
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Strona w budowie</h1>
        <h3>Prosimy o cierpliwośc</h3>
      </header>
    </div>
  );
}

export default App;
