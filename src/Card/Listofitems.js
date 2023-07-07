import React, { useState } from "react";
import "./index.css";
export const Listofitems = (props) => {
  const { carddetails, setdetailview } = props;
  const [detailcardseen, setdetailcardseen] = useState([]);

  const detailcardclick = (id) => {
    setdetailcardseen((oldArray) => [...oldArray, id]);
  };

  return (
    <div className="descriptionbox">
      <div className="item1" onClick={() => setdetailview(false)}>
        Go back
      </div>
      <div className="cardetails">
        {carddetails[1].map((item) => {
          return detailcardseen.indexOf(item.id) === -1 ? (
            <div
              onClick={() => {
                detailcardclick(item.id);
              }}
              className="detailsbox"
            >
              {item.title}
            </div>
          ) : (
            <div className="detailsbox seen">{item.title}</div>
          );
          // {detailcardseen.indexOf(item.id) > -1 &&
          //   <div className="detailsbox seen">{item.title}</div>
          // }
        })}
      </div>
    </div>
  );
};
