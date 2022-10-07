import React from 'react';
import {Button} from '../Button/Button';
import {Display} from './Display/Display';
import s from './Counter.module.css';

type CounterPropType = {
  increment: () => void
  count: number
  reset: () => void
  maxCount: number
}

export const Counter = (props: CounterPropType) => {

  return (
    <div className={s.counter}>
      <Display count={props.count} maxCount={props.maxCount}/>
      <div className={s.buttons}>
        <Button name={'inc'} disabled={props.count === 5} callBack={props.increment}/>
        <Button name={'reset'} disabled={props.count === 0} callBack={props.reset}/>
      </div>
    </div>
  );
};
