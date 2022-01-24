import React, { useState } from "react";
import InputForm from "./Copmpnents/InputForm";
import data from "./data";
function App() {
  const [paragraphs, setParagraphs] = useState([]);

 const generatorHandler = (num) => {
   setParagraphs(data.slice(0, num))
 }
  
  

 


  return (
    <section className="section-center">
      <h2>Tired of boring lorel ipsum</h2>
      <InputForm onGenerate={generatorHandler}/>
      <section>
        {paragraphs.map((par, index)=> <p key={index}>{par}</p>)}
      </section>
    </section>
  );
}

export default App;
