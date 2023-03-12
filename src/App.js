import { useState } from 'react';
import './App.css';

function App () {

  const [result , setResult] = useState("");
  
  const Controler = (event)=>{
    setResult(result.concat(event.target.value))
  }
  
  const clearText = ()=>{
    setResult("")
  }

  const Calculate = ()=>{
   setResult(eval(result))
  }

  return (
    <div className="container">
       <h1 className='text-center mt-5 text-muted bg-body border-bottom shadow rounded '>Developed By : Ali Bahadur &copy; </h1>
    <div className="App calCul  "> 
      <input type="text" placeholder='0' className='rounded' id='shower' value={result} />
      <input type="button" className='button rounded' value='9' onClick={Controler}/>
      <input type="button" className='button rounded' value='8' onClick={Controler}/>
      <input type="button" className='button rounded' value='7' onClick={Controler}/>
      <input type="button" className='button rounded' value='6'onClick={Controler}/>
      <input type="button" className='button rounded' value='5'onClick={Controler}/>
      <input type="button" className='button rounded' value='4'onClick={Controler}/>
      <input type="button" className='button rounded' value='3'onClick={Controler}/>
      <input type="button" className='button rounded' value='2'onClick={Controler}/>
      <input type="button" className='button rounded' value='1' onClick={Controler}/>
      <input type="button" className='button rounded' value='0' onClick={Controler}/>
      <input type="button" className='button rounded' value='.' onClick={Controler}/>
      <input type="button" className='button rounded' value='+' onClick={Controler}/>
      <input type="button" className='button rounded' value='-' onClick={Controler}/>
      <input type="button" className='button rounded' value='*' onClick={Controler}/>
      <input type="button" className='button rounded' value='/' onClick={Controler}/>
      <input type="button" className='button rounded' value='%' onClick={Controler}/>
      <input type="button" className='button button2 rounded' value='Clear' onClick={clearText} />
      <input type="button" className='button button2 rounded' value='=' onClick={Calculate}/>
    </div>
    </div>
  );
}

export default App;
