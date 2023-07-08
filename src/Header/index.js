import React, { useState, useEffect } from "react";

import "./index.css";

export const Header = (props) => {
  const [searchvalue, setsearchvalue] = useState("");

  const { result, setresult, apicheckflag, setapicheckflag } = props;

  useEffect(() => {
    console.log(typeof searchvalue);
    if (!searchvalue) {
      setapicheckflag(!apicheckflag);
    }
    if (searchvalue != "") {
      let obj = result.find((temp) => temp[0] === searchvalue);
      if (obj) setresult([obj]);
    }
  }, [searchvalue]);
  return (
    <div className="header">
      <div className="logo">Logo</div>
      <div className="searchbar">
        <input
          type="text"
          name="Search"
          placeholder="Search"
          value={searchvalue}
          onChange={(event) => {
            setsearchvalue(event.target.value);
          }}
        />
      </div>
    </div>
  );
};
