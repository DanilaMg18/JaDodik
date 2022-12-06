import React, {useState} from "react";
import Plus from "./components/plus";
import Minus from "./components/minus";

function App() {
  let [count, setCount] = useState(0)

  let plusCount = () => {
    setCount(prev => prev + 1)
  }

  let minusCount = () => {
    setCount(prev => {
      if(prev === 0) {
        return 0
      }
      else {
        return prev - 1
      }
    })

    }

  return (
    <div className="App">
        <div className="counter">{count}</div>
        <Minus handleClick={minusCount}/>
        <Plus handleClick={plusCount}/>
    </div>
  );
}

export default App;
