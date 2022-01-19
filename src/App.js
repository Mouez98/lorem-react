import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, settext] = useState([]);

 const onSubmitHandler = (e) => {
     e.preventDefault();
     console.log("submited")
 }


  return (
    <section className="section-center">
      <h2>Tired of boring lorel ipsum</h2>
      <form className="lorem-form" onSubmit={onSubmitHandler}>
        <label htmlFor="amount">Paragraph:</label>
        <input
          id="amount"
          type="number"
          min="0" 
          onChange={(e)=> setCount(e.target.value)}         
        />

       
        <button
          type="submit"
          className="btn"
        >
          Generate
        </button>
      </form>
  

    </section>
  );
}

export default App;
