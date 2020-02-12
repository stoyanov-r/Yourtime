import React from 'react';
import classes from './Button.module.scss'

const Button = ({text = 'Забронировать'}) => {
  return (
    <a href='https://clients.aihelps.com/110043' className={classes.Button}>
      {text}
    </a>
  );
}

export default Button;
