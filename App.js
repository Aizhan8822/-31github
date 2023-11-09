import Home from "./Home"; 
import Aizhan from "./Aizhan"
import {useState} from "react"
function App() {
  return (
    <div className="App">
      
      <Home/>
      <Aizhan/>
      
    </div>
  );
}

export default App;

function App() {
  const[state,setState]=useState(0);
}
