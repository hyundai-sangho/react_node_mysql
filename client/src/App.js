import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [county, setCounty] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState("");

  return (
    <div className="App">
      <div className="information">
        <label>이름: </label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>나이: </label>
        <input
          type="number"
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <label>국가: </label>
        <input
          type="text"
          onChange={(event) => {
            setCounty(event.target.value);
          }}
        />
        <label>위치: </label>
        <input
          type="text"
          onChange={(event) => {
            setPosition(event.target.value);
          }}
        />
        <label>연봉</label>
        <input
          type="number"
          onChange={(event) => {
            setWage(event.target.value);
          }}
        />
        <button>직원 추가</button>
      </div>
    </div>
  );
}

export default App;
