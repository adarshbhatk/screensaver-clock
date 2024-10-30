import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  const [currentTime, setTime] = useState(time);
  function updateTime() {
    time = new Date().toLocaleTimeString();
    setTime(time);
  }
  setInterval(updateTime, 1000);
  return (
    <div className="container">
      <h1>{currentTime}</h1>
    </div>
  );
}

export default App;
