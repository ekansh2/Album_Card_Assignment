import React, { useState, useEffect } from "react";
import "./App.css";
import { Card } from "./Card/index";
import { Header } from "./Header/index";
function App() {
  const [apidata, setapidata] = useState([]);
  const [apicheckflag, setapicheckflag] = useState(false);

  const [result, setresult] = useState([]);
  function apicheck() {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((data) => setapidata(data));
  }
  useEffect(() => {
    apicheck();
  }, [apicheckflag]);
  useEffect(() => {
    let newobj = {};
    for (const a of apidata) {
      if (a.userId in newobj) {
        newobj[`${a.userId}`].push(a);
      } else {
        newobj[`${a.userId}`] = [];
        newobj[`${a.userId}`].push(a);
      }
    }
    var tempresult = Object.keys(newobj).map((key) => [key, newobj[key]]);

    setresult(tempresult);
  }, [apidata]);

  return (
    <div className="App">
      <Header
        result={result}
        setresult={setresult}
        apicheckflag={apicheckflag}
        setapicheckflag={setapicheckflag}
      />
      <Card result={result} />
    </div>
  );
}

export default App;
