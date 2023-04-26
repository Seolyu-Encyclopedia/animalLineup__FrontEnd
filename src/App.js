import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LaunchScreen from "./pages/LaunchScreen";
import Desk from "./pages/Desk";

function App() {
  const [showLaunchScreen, setShowLaunchScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLaunchScreen(false);
    }, 30);
  }, []);

  return (
    <div className="App">
      {showLaunchScreen ? (
        <LaunchScreen />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Desk />} />
            <Route path="/diary/:selectedPaper" element={<Desk />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
