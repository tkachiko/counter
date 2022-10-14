import React, {ChangeEvent} from 'react';
import {Button} from '../Button/Button';
import {Display} from './Display/Display';
import s from './Counter.module.css';

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

  const isIncButtonDisabled = count === maxValue;
  const isResetButtonDisabled = count === startValue;

  const incBtn = <span>inc</span>;
  const resBtn = <span>reset</span>;
  const setBtn = <span>set</span>;

  const set = () => {
    setValues(startValue, maxValue);
  };

  const setStartValue = (e: ChangeEvent<HTMLInputElement>) => {
    setStart(JSON.parse(e.currentTarget.value));
  };
  const setMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    setMax(JSON.parse(e.currentTarget.value));
  };

  return (
    <div className={s.counter}>
      <Display count={count} maxValue={maxValue}/>
      <input onChange={setStartValue} type="number"/>{startValue}
      <input onChange={setMaxValue} type="number"/>{maxValue}

      <div className={s.buttons}>
        <Button disabled={isIncButtonDisabled} callBack={increment}>{incBtn}</Button>
        <Button disabled={isResetButtonDisabled} callBack={reset}>{resBtn}</Button>
        <Button disabled={false} callBack={set}>{setBtn}</Button>
      </div>
    </div>
  );
};
