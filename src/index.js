import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Ctx from './components/Ctx'

function Main(){
  
  const [wheelPos, setWheelPos] = useState(0);
  const [selectorBurgerIsOpened, setSelectorBurgerIsOpened] = useState(false)

  return(<React.StrictMode>
       <Ctx.Provider value={{wheelPos, setWheelPos, selectorBurgerIsOpened, setSelectorBurgerIsOpened}}>
    <App />
    </Ctx.Provider>
  </React.StrictMode>)
  
}

ReactDOM.render(<Main/>,document.getElementById('root'))
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
