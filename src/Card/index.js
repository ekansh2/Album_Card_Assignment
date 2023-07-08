import React, { useState, useEffect } from "react";
import { Listofitems } from "./Listofitems";
import "./index.css";

export const Card = (props) => {
  const { result } = props;
  const [detailview, setdetailview] = useState(false);
  const [carddetails, setcarddetails] = useState();
  const [detailcardseen, setdetailcardseen] = useState([
    { id: "1", values: [] },
  ]);
  console.log(detailcardseen);

  const clickhandler = (item) => {
    setdetailview(true);
    setcarddetails(item);
  };
  return (
    <div className="container">
      {detailview ? (
        <Listofitems
          carddetails={carddetails}
          setdetailview={setdetailview}
          detailcardseen={detailcardseen}
          setdetailcardseen={setdetailcardseen}
        />
      ) : (
        result.map((item) => {
          return (
            <div
              className="albumcard"
              onClick={() => {
                clickhandler(item);
              }}
            >
              <span className="noofitems">
                {detailcardseen.find((temp) => temp.id === item[0])
                  ? item[1].length -
                    detailcardseen.find((temp) => temp.id === item[0])?.values
                      .length
                  : item[1].length}
              </span>
              <span className="id">{item[0]}</span>
            </div>
          );
        })
      )}
    </div>
  );
};
