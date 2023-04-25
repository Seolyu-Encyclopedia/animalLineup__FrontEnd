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
    }, 3000);
  }, []);

  return (
    <div className="App">
      {showLaunchScreen ? (
        <LaunchScreen />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Desk />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
