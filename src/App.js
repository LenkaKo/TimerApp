import Time from "./components/Time/Time";
import Button from "./components/Button/Button";
import { useState, useEffect } from "react";
import Container from './components/Container/Container.js';


const App = () => {

  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState('');

  const start = () => {
    setTimer(setInterval(() => {
      setTime(prevValue => prevValue + 1)}, 1));
  };

  const stop = () =>{
    clearInterval(timer);
  };

  const reset = () => {
    setTime(0);
  };

useEffect(() => {
  return() => {
    if(timer) clearInterval(timer)
  }
}, []);

  return (
    <Container>
      <Time time={time} />
      <Button className="start-btn" action={start}>Start</Button>
      <Button action={stop}>Stop</Button>
      <Button action={reset}>Reset</Button>
    </Container>
      
    
  );
};

export default App;
