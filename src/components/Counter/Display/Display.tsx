import React from 'react';
import s from './Display.module.css';
import {Button} from '../../Button/Button';

export type DisplayPropType = {
  maxValue: number
  count: number
  startValue: number
  reset: () => void
  increment: () => void
}

export const Display = (props: DisplayPropType) => {
  const {count, maxValue, startValue, reset, increment} = props;

  const isIncButtonDisabled = count === maxValue
    // || startValue >= maxValue;

  // const isResetButtonDisabled = count === startValue || startValue > maxValue;

  const incBtn = <span>inc</span>;
  const resBtn = <span>reset</span>;

  const finalClassName = s.default
    + ' ' + (isIncButtonDisabled
      ? s.red
      : s.default);

  return (
    <div className={s.display}>
      <div className={finalClassName}>
        {count}
      </div>

      <div className={s.buttons}>
        <Button disabled={isIncButtonDisabled} callBack={increment}>{incBtn}</Button>
        <Button disabled={false} callBack={reset}>{resBtn}</Button>
      </div>
    </div>
  );
};
