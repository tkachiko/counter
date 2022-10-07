import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';

function App() {
  const [count, setCount] = useState<number>(0);
  const maxCount = 5;

  const increment = () => {
    if (count === maxCount) {
      return;
    }
    setCount(count + 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <Counter increment={increment}
               count={count}
               reset={reset}
               maxCount={maxCount}
      />
    </div>
  );
}

export default App;
