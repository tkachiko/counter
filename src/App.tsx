import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';

function App() {
  const STEP = 1;
  const [count, setCount] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(0);
  const [startValue, setStartValue] = useState<number>(0);

  useEffect(() => {
    const storedValue = localStorage.getItem('counterValue');
    const storedStartValue = localStorage.getItem(('startValue'));
    const storedMaxValue = localStorage.getItem(('maxValue'));
    if (storedValue) {
      setCount(JSON.parse(storedValue));
      if (storedStartValue) {
        setStartValue(JSON.parse(storedStartValue));
      }
      if (storedMaxValue) {
        setMaxValue(JSON.parse(storedMaxValue));
      }
    }
  }, []);
  useEffect(() => {
    if (count) {
      localStorage.setItem('counterValue', JSON.stringify(count));
    }
  }, [count]);


  const increment = () => {
    if (count === maxValue) {
      return;
    }
    setCount(count + STEP);
  };
  const reset = () => {
    setCount(startValue);
  };
  const setValues = (start: number, max: number) => {
    localStorage.setItem('startValue', JSON.stringify(start));
    localStorage.setItem('maxValue', JSON.stringify(max));
    setStartValue(start);
    setMaxValue(max);
  };

  const setStart = (value: number) => {
    setStartValue(value);
  };
  const setMax = (value: number) => {
    setMaxValue(value);
  };

  return (
    <div className="App">
      <Counter increment={increment}
               count={count}
               reset={reset}
               maxValue={maxValue}
               startValue={startValue}
               setValues={setValues}
               setStart={setStart}
               setMax={setMax}
      />
    </div>
  );
}

export default App;
