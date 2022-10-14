import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';

function App() {
  const MAX_VALUE = 5;
  const START_VALUE = 0;
  const STEP = 1;
  const [count, setCount] = useState<number>(START_VALUE);

  useEffect(() => {
    const storedValue = localStorage.getItem('counterValue');
    if (storedValue) {
      const newCountValue = JSON.parse(storedValue);
      setCount(newCountValue);
    }
  }, []);
  useEffect(() => {
    if (count) {
      localStorage.setItem('counterValue', JSON.stringify(count));
    }
  }, [count]);


  const increment = () => {
    if (count === MAX_VALUE) {
      return;
    }
    setCount(count + STEP);
  };
  const reset = () => {
    setCount(START_VALUE);
    localStorage.clear()
  };

  return (
    <div className="App">
      <Counter increment={increment}
               count={count}
               reset={reset}
               maxValue={MAX_VALUE}
               startValue={START_VALUE}
      />
    </div>
  );
}

export default App;
