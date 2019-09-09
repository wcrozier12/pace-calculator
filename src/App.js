import React, { useState } from "react";
import Distance from "./components/Distance";
import TotalTime from "./components/Pace";

function App() {
  const [selectedOption, setSelectedOption] = useState("pace");
  const [totalTime, setSelectedTotalTime] = useState(0);
  const [distance, setDistance] = useState(0);
  const [output, setOutput] = useState("");

  const makePacePretty = () => {
    const paceInSeconds = totalTime / distance;
    const hours = Math.floor(paceInSeconds / 3600);
    const minutes = Math.floor((paceInSeconds - (hours * 3600)) / 60);
    const seconds = (paceInSeconds - (minutes * 60))
  return `${hours && `${hours}:`}${minutes && `${minutes}:`}${seconds && `${seconds}`}`    
    
    
    
  } 
  return (
    <div className="App">
      <div>
        <select
          value={selectedOption}
          onChange={e => setSelectedOption(e.target.value)}
        >
          <option value="pace">Calculate pace</option>
          <option value="distance">Calculate distance</option>
          <option value="time">Calculate time</option>
        </select>
      </div>

      <div>
        {selectedOption === "pace" && (
          <>
            <TotalTime setSelectedTotalTime={setSelectedTotalTime} />
            <Distance setDistance={setDistance} value={distance} />
            <button onClick={() => setOutput(totalTime / distance)}>
              Calculate pace
            </button>
          </>
        )}
        {selectedOption === "distance" && (
          <>
            <input />
            <input />
          </>
        )}
        {selectedOption === "time" && (
          <>
            <input />
            <input />
          </>
        )}
        {output && <span>{`Your ${selectedOption} is ${makePacePretty()}`}</span>}
      </div>
    </div>
  );
}

export default App;
