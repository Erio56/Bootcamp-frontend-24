import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const [result, setResult] = useState(); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
  	// Add the code for the minus function
    e.preventDefault();
    if(result){
      setResult(result - Number(inputRef.current.value));
      return;
    }
    setResult(inputRef.current.value); 
    
  };
 
  function times(e) { 
    // Add the code for the multiply function
    e.preventDefault(); 

    if(result){
      setResult((result) => result * Number(inputRef.current.value));
      return;
    }
    setResult(inputRef.current.value); 
  }; 
 
  function divide(e) { 
    // Add the code for the divide function 
    e.preventDefault();
    if(result){
      if(inputRef.current.value > 0){
        setResult((result) => result / Number(inputRef.current.value)); 
      }
    }
    setResult(inputRef.current.value); 
  };
 
  function resetInput(e) { 
    // Add the code for the resetInput function 
    e.preventDefault();
    setResult(0);
  }; 
 
  function resetResult(e) { 
  	// Add the code for the resetResult function 
    e.preventDefault();
    inputRef.current.value = '';
    setResult(0);
  };
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Calculadora</h1>
      </div>
      <form> 
        <h2>
          {result}
        </h2> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>add</button>
        <button onClick={minus}>subtract</button>
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>resetInput</button>
        <button onClick={resetResult}>resetResult</button> 
      </form> 
    </div> 
  ); 
} 
 
export default App; 
