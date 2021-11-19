

import Counter from './Counter';
import { useState } from 'react'
    
function App() {
 
  const[state,setState] = useState(false)
    return (
        <div className="App">
            <h1 onClick={()=>setState(!state)}>Click me</h1> 
            {/* if statement */}
            {/* {state ? <Counter/>:null} */}
            {state && <Counter/>}
           
        </div>
  );
}

export default App;
