import React from 'react';
import s from './Display.module.css';

export type DisplayPropType = {
  maxValue: number
  count: number
}

export const Display = (props: DisplayPropType) => {
  const {count, maxValue} = props;

  const finalClassName = s.default
    + ' ' + (count === maxValue
      ? s.red
      : s.default);

  return (
    <div className={s.display}>
      <div className={finalClassName}>
        {count}
      </div>
    </div>
  );
};
