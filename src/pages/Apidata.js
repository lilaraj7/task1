import React, { useState, useEffect } from "react";
import './apidata.css'

const Apidata = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
      result.json().then((resp) => {
        console.log(resp);
        setData(resp);
        console.log(data, "data");
      });
    });
  }, []);
  return (
    <div>
      {data.map((props) => {
        const { email, name } = props;
        return (
          <div className="new-container">
            <div className="main-name">
            <h1>Name:{name}</h1>
              </div>
              <div className="main-email">
            <h1>Email:{email}</h1>
            </div>
           
          </div>
        );
      })}
    </div>
  );
};
export default Apidata;
