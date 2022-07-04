import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  const [employeeList, setEmployeeList] = useState([]);

  const addEmployee = () => {
    console.log("addEmployee 실행");
    axios
      .post("http://localhost:4002/create", {
        name: name,
        age: age,
        country: country,
        position: position,
        wage: wage,
      })
      .then(() => {
        setEmployeeList([
          ...employeeList,
          {
            name: name,
            age: age,
            country: country,
            position: position,
            wage: wage,
          },
        ]);
      });
  };

  const getEmployee = () => {
    axios.get("http://localhost:4002/employees").then((response) => {
      setEmployeeList(response.data);
    });
  };

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
            setCountry(event.target.value);
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
        <button onClick={addEmployee}>직원 추가</button>
      </div>

      <div className="employees">
        <button onClick={getEmployee}>직원 보기</button>

        {employeeList.map((val, key) => {
          return (
            <div className="employee" key={key}>
              <h3>이름: {val.name}</h3>
              <h3>나이: {val.age}</h3>
              <h3>국적: {val.country}</h3>
              <h3>위치: {val.position}</h3>
              <h3>연봉: {val.wage}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
