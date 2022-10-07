import React from 'react';
import {Button} from '../Button/Button';
import {Display} from './Display/Display';
import s from './Counter.module.css';

export type CounterPropType = {
  increment: () => void
  count: number
  reset: () => void
  maxValue: number
  startValue: number
}

export const Counter = (props: CounterPropType) => {
  const {count, maxValue, startValue, increment, reset} = props;

  const isIncButtonDisabled = count === maxValue;
  const isResetButtonDisabled = count === startValue;

  const incBtn = <span>inc</span>;
  const resBtn = <span>reset</span>;

  return (
    <div className={s.counter}>
      <Display count={count} maxValue={maxValue}/>
      <div className={s.buttons}>
        <Button disabled={isIncButtonDisabled} callBack={increment}>{incBtn}</Button>
        <Button disabled={isResetButtonDisabled} callBack={reset}>{resBtn}</Button>
      </div>
    </div>
  );
};
