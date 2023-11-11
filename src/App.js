import './App.css';
import About from './components/About';

import Inputform from './components/Inputform';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Alertcomp from './components/Alertcomp';


import {
 
  Route,
  Link,
  Routes,
  
  BrowserRouter
} from "react-router-dom";


function App() {
const [mode, setmode] = useState("light");
const [alert, setalert] = useState(null)




const showAlert =(message,type)=>{

setalert({
  msg:message ,
  type:type
})
setTimeout(() => {
  setalert(null)
}, 1500);

}







const toggleMode =() =>{
  if (mode==="light") {
    setmode("dark");
    document.body.style.backgroundColor='#042743' ;
    document.body.style.color='white' ;
    showAlert("dark mode has been enabled","success")
  }
  else{
    setmode("light");
    document.body.style.backgroundColor='white';
    document.body.style.color='black' ;
    showAlert("light mode has been enabled","success")
  }
}
  return (
  <>
 <BrowserRouter>
      <Navbar title='TextMan' mode={mode} toggleMode={toggleMode} />
      <Alertcomp alert={alert} />
      <div className="container-md my-3">
        <Routes>
          <Route path="/" element={<Inputform showAlert={showAlert} heading="Enter The Text To Analyze below" />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>

  </>
  );
}

export default App;
