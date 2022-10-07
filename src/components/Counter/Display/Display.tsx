import React from 'react';
import s from './Display.module.css';

type DisplayPropType = {
  maxCount: number
  count: number
}

export const Display = (props: DisplayPropType) => {
  const finalClassName = s.default
    + ' ' + (props.count === props.maxCount
      ? s.red
      : s.default);

  return (
    <div className={s.display}>
      <div className={finalClassName}>
        {props.count}
      </div>
    </div>
  );
};
