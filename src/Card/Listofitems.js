import React, { useState } from "react";
import "./index.css";
export const Listofitems = (props) => {
  const { carddetails, setdetailview, detailcardseen, setdetailcardseen } =
    props;

  const detailcardclick = (cardId, itemId) => {
    var count = 0;
    let newarray = detailcardseen.map((obj) => {
      if (obj.id == cardId) {
        count = 1;
        return { ...obj, values: [...obj.values, itemId] };
      }
      return obj;
    });
    if (count == 0) newarray.push({ id: cardId, values: [itemId] });
    setdetailcardseen(newarray);
  };

  return (
    <div className="descriptionbox">
      <div className="item1" onClick={() => setdetailview(false)}>
        Go back
      </div>
      <div className="cardetails">
        {carddetails[1].map((item) => {
          console.log(carddetails[0]);
          return detailcardseen
            .find((obj) => obj.id === carddetails[0])
            ?.values.indexOf(item.id) > -1 ? (
            <div className="detailsboxseen">{item.title}</div>
          ) : (
            <div
              className="detailsbox"
              onClick={() => {
                detailcardclick(carddetails[0], item.id);
              }}
            >
              {item.title}
            </div>
          );
        })}
      </div>
    </div>
  );
};
