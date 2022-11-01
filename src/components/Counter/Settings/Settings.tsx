import React, {ChangeEvent} from 'react';
import s from './Settings.module.css';
import {Button} from '../../Button/Button';

export type SettingsPropType = {
  maxValue: number
  startValue: number
  setStart: (value: number) => void
  setMax: (value: number) => void
  setValues: (start: number, max: number) => void
}

export const Settings = (props: SettingsPropType) => {
  const {startValue, maxValue, setStart, setMax, setValues} = props;

  const finalClassName = s.default
    + ' ' + (startValue === maxValue || startValue > maxValue || startValue < 0
      ? s.red
      : s.default);

  const setBtn = <span>set</span>;

  const isSetButtonDisabled = startValue === maxValue || startValue > maxValue || startValue < 0;

  const set = () => {
    if (startValue < maxValue) {
      setValues(startValue, maxValue);
    }
    console.log('values set!');
  };

  const setStartValue = (e: ChangeEvent<HTMLInputElement>) => {
    setStart(JSON.parse(e.currentTarget.value));
  };
  const setMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    setMax(JSON.parse(e.currentTarget.value));
  };

  return (
    <div className={s.settings}>
      <div className={finalClassName}>
        <div className={s.value}>
          <span>max value:</span>
          <input onChange={setMaxValue} type="number" value={maxValue}/>
        </div>
        <div className={s.value}>
          <span>start value:</span>
          <input onChange={setStartValue} type="number" value={startValue}/>
        </div>
      </div>
      <div className={s.buttons}>
        <Button disabled={isSetButtonDisabled} callBack={set}>{setBtn}</Button>
      </div>
    </div>
  );
};
