import React, { useState } from "react";
import "./responsivecards.css";
const Resposivecards = () => {
  const [adder, setAdder] = useState(0);
  const add = () => {
    setAdder(adder + 5);
  };
  return (
    <div className="max-container">
      <div className="adder">
        <h1>{adder}</h1>
        <button onClick={add}>Add 5</button>
      </div>
      <div className="resp-cotainer">
        <div className="row">
       
        <div className="col-1">
          <p>
            A paragraph is a self-contained unit of discourse in writing dealing
            with a particular point or idea. A paragraph consists of one or more
            sentences. Though not required by the syntax of any language, …
          </p>
        </div>
        <div className="col-1">
          <p>
            A paragraph is a self-contained unit of discourse in writing dealing
            with a particular point or idea. A paragraph consists of one or more
            sentences. Though not required by the syntax of any language, …
          </p>
        </div>
        </div>
        <div className="row">
      
        <div className="col-1">
          <p>
            A paragraph is a self-contained unit of discourse in writing dealing
            with a particular point or idea. A paragraph consists of one or more
            sentences. Though not required by the syntax of any language, …
          </p>
        </div>
        <div className="col-1">
          <p>
            A paragraph is a self-contained unit of discourse in writing dealing
            with a particular point or idea. A paragraph consists of one or more
            sentences. Though not required by the syntax of any language, …
          </p>
        </div>
        </div>
        <div className="row-1">
      
      <div className="col-1">
        <h1>hy</h1>
        <p>
          A paragraph is a self-contained unit of discourse in writing dealing
          with a particular point or idea. A paragraph consists of one or more
          sentences. Though not required by the syntax of any language, …
        </p>
      </div>
      <div className="col-1">
      <h1>hy</h1>

        <p>
          A paragraph is a self-contained unit of discourse in writing dealing
          with a particular point or idea. A paragraph consists of one or more
          sentences. Though not required by the syntax of any language, …
        </p>
      </div>
      </div>
      </div>
    </div>
  );
};
export default Resposivecards;
