import React from 'react';
import classes from './Button.module.scss'

const Button = props => {
  return (
    <button style={props.styles} className={classes.Button}>
      {props.text}
    </button>
  );
}

export default Button;
