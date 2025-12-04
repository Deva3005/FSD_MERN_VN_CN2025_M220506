// 5. Create a small form with “Name” and “Email” fields. On submit, display both values
// below without refreshing the page.

import React from "react";
import { useState } from "react";
import style from "./T05.module.css";

const T05 = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [resultArr, setresultArr] = useState([]); // Used ChatGPT here !
  const Handler = (e) => {
    e.preventDefault();
    let name = document.getElementById("uname").value;
    let email = document.getElementById("uemail").value;
    setname(name);
    setemail(email);
    setresultArr((prev) => {
      return [
        ...prev,
        {
          name,
          email,
          time: new Date().toDateString(),
        },
      ];
    });
  };
  return (
    <div className={style.fieldsI}>
      <form
        onSubmit={(e) => {
          Handler(e);
        }}
      >
        <div>
          <label htmlFor="uname">
            <p>Name</p>
          </label>
          <input type="text" id="uname" />
        </div>
        <div>
          <label htmlFor="uemail">
            <p>Email</p>
          </label>
          <input type="email" id="uemail" />
        </div>
        <div>
          <button id="capture">Capture 📷</button>
        </div>
      </form>
      <div>
        <button
          className={style.clear}
          onClick={() => {
            setresultArr([]);
          }}
        >
          Clear 🗑️
        </button>
      </div>
      <div id="result">
        {resultArr.map((ele) => {
          return (
            <div style={{ borderBottom: "2px solid white" }}>
              <p>Name.....{ele.name}</p>
              <p>Email....{ele.email}</p>
              <p>
                Captured at <i>{ele.time}</i>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default T05;
