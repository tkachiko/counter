import React from 'react';
import {Display} from './Display/Display';
import s from './Counter.module.css';
import {Settings} from './Settings/Settings';

export type CounterPropType = {
  increment: () => void
  count: number
  reset: () => void
  maxValue: number
  startValue: number
  setValues: (start: number, max: number) => void
  setStart: (value: number) => void
  setMax: (value: number) => void
}

export const Counter = (props: CounterPropType) => {
  const {count, maxValue, startValue, increment, reset, setValues, setStart, setMax} = props;

  return (
    <div className={s.counter}>
      <Settings maxValue={maxValue}
                startValue={startValue}
                setMax={setMax}
                setStart={setStart}
                setValues={setValues}
      />
      {/*
      * TODO: add layout and styles
      */}
      <Display count={count}
               maxValue={maxValue}
               reset={reset}
               increment={increment}
               startValue={startValue}
      />
    </div>
  );
};
