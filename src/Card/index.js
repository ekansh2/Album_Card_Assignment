import React, { useState, useEffect } from "react";
import { Listofitems } from "./Listofitems";
import "./index.css";

export const Card = () => {
  const [detailview, setdetailview] = useState(false);
  const [carddetails, setcarddetails] = useState();

  const [apidata, setapidata] = useState([]);
  function apicheck() {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((data) => setapidata(data));
  }
  useEffect(() => {
    apicheck();
  }, []);
  let newobj = {};

  for (const a of apidata) {
    if (a.userId in newobj) {
      newobj[`${a.userId}`].push(a);
    } else {
      newobj[`${a.userId}`] = [];
      newobj[`${a.userId}`].push(a);
    }
  }
  var result = Object.keys(newobj).map((key) => [key, newobj[key]]);
  const clickhandler = (item) => {
    setdetailview(true);
    setcarddetails(item);
  };
  return (
    <div className="container">
      {detailview ? (
        <Listofitems carddetails={carddetails} setdetailview={setdetailview} />
      ) : (
        result.map((item) => {
          return (
            <div
              className="albumcard"
              onClick={() => {
                clickhandler(item);
              }}
            >
              <span className="noofitems">{item[1].length}</span>
              {item[0]}
            </div>
          );
        })
      )}
    </div>
  );
};
