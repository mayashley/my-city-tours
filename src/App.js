import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Destinations from "./Components/Destinations/Destinations";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div>
        <Destinations />
      </div>
    </div>
  );
}

export default App;
