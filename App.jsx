import './App.css'
import { useEffect, useState } from 'react';

function App() {
  const [time, setTime] = useState(0) //time is the variable, set time is the function and inial state of the value is 0
  const [running, setRunning]= useState(false)

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {setTime((prevTime) => prevTime + 10);}, 10);
    } else {
      clearInterval(interval);
    }
    
    return () => clearInterval(interval); // Cleanup to prevent memory leaks
  }, [running]);
  

  return (
    <>
    
    <div className="relative min-h-screen">
  <h1 className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center py-4 bg-white w-full shadow-md">
    Stop Watch
  </h1>
</div>


      <div className="container">
      <div>
        <span>{("0"+ Math.floor((time/60000)% 60)).toString().slice(-2)}:</span> 
        <span>{("0"+ Math.floor((time/1000)% 60)).toString().slice(-2)}:</span> 
        <span>{("0"+ ((time/10)% 100)).toString().slice(-2)}</span> 
      </div>
      <div>
        {running? (
          <button onClick={()=> {setRunning(false)}}>Stop</button>
        ): (
          <button onClick={()=> {setRunning(true)}}>Start</button>
        )}
        <button onClick={()=> {setTime(0)}}>Reset</button>
      </div>
    </div>
    </>
  );
}


export default App
