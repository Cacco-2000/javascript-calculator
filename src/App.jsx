import { useState } from "react";
import { evaluate } from "mathjs";
import Display from "./Display";
import Buttons from "./Buttons";
import "./App.css";

function App() {
  const [input, setInput] = useState("0")

  const handleButtonClick = (value)=>
  {
    if(value === "C")
    {
      setInput("0");
      return;
    }


    if (value === "=")
    {
      try
      {
        const result = evaluate(input);
        setInput(result.toString());
      }
      catch
      {
        setInput("Errore");
      }
      return;
    }
    
    setInput((prev) => {
      if(prev === "0" && value === "0") return "0";

      if (value === ".") {
        const lastOperatorIndex = Math.max(
          prev.lastIndexOf("+"),
          prev.lastIndexOf("-"),
          prev.lastIndexOf("*"),
          prev.lastIndexOf("/")
        );
        const currentNumber = prev.slice(lastOperatorIndex + 1);
        if (currentNumber.includes(".")) return prev;
      }

      if ("+-*/".includes(value)) {
        if (
          prev.length >= 2 &&
          "+-*/".includes(prev.slice(-2, -1)) &&
          prev.slice(-1) === "-" &&
          value !== "-"
        ) {
          return prev.slice(0, -2) + value;
        }
        if (value === "-" && "+-*/".includes(prev.slice(-1))) {
          return prev + value;
        }
        if ("+-*/".includes(prev.slice(-1))) {
          return prev.slice(0, -1) + value;
        }
      }

      return prev === "0" ? value : prev + value;
    });
  };
  return (
    <div className="app-container">
      <div className="calculator">
        <Display value={input} />
        <Buttons onButtonClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default App;