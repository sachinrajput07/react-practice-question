import { useState } from "react";
import './index.css'


function App() {

  let [Counter, setcounter] = useState(15);

  let addValue = ()=>{
    if (Counter <= 20) {
      setcounter(Counter + 1)
    }
    
  }
  let removeValue = ()=> {
    if (Counter >= 1) {
      setcounter(Counter - 1)
    }
    
  }

  return (
    <div>
    <h1>Counter Update : {Counter}</h1>
    <button onClick={addValue}>Increament</button>
    <button onClick={removeValue}>Dcreament</button>
    </div>
  )   
}

export default App;
