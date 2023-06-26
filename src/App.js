import React from 'react';
import add,{sub,multiply,division} from './Calc';
function App(){
  return(
    <>
    <ol>
      <li>{add(1,2)}</li>
      <li>{sub(5,2)}</li>
      <li>{multiply(1,2)}</li>
      <li>{division(11.66,3)}</li>
    </ol>
    </>
  )
}

export default App;