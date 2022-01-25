import React, { useState } from "react";
import InputForm from "./Copmpnents/InputForm";
import data from "./data";
function App() {
  const [paragraphs, setParagraphs] = useState([]);

 const generatorHandler = (amount) => {
   if(amount <= 0){
    amount = 1
  }
   if(amount > 8){
    amount = 9
  }
   setParagraphs(data.slice(0, amount))
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
