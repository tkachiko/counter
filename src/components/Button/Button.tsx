import React from 'react';
import s from './Button.module.css';

type PropsType = {
  name: string
  callBack: () => void
  disabled: boolean
}

export const Button = (props: PropsType) => {
  const {name, callBack, disabled} = props;

  const onClickHandler = () => {
    callBack();
  };

  const finalClassName = s.button
    + ' ' + (disabled ? s.disabled : s.default);

  return (
    <button disabled={disabled}
            className={finalClassName}
            onClick={onClickHandler}>{name}</button>
  );
};
