import React, { useState } from "react";
import MadlibForm from "./MadlibForm";


function Madlib() {
  const [words, setWords] = useState([]);

  const renderMadlib = (data) => {
      for (let item in data){
          words.push(data[item])
      }
      const form = document.getElementById("MadlibForm");
      form.style.display = "none"
      setWords(words)
      const finishedMadlib = `There was a ${words[2]} ${words[0]} that loved a ${words[3]} ${words[1]}`
      setWords(words)
      const finishedMadlibP = document.getElementById("finishedMadlib")
      finishedMadlibP.innerText = finishedMadlib
      finishedMadlibP.style.display = ""
  };


  return (
    <div className="Madlib">
    <h1>Madlibs!</h1>
      <p id="finishedMadlib" style={{display: "none"}}></p>
      <MadlibForm renderMadlib={renderMadlib}/>
    </div>
  );
};

export default Madlib;
