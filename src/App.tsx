import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';

function App() {
  const MAX_VALUE = 5;
  const START_VALUE = 0;
  const STEP = 1;
  const [count, setCount] = useState<number>(START_VALUE);

  const increment = () => {
    if (count === MAX_VALUE) {
      return;
    }
    setCount(count + STEP);
  };
  const reset = () => {
    setCount(START_VALUE);
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
