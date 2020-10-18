import React from 'react';

import classes from './Button.module.scss';

const Button = ({ text = 'Забронировать', id }) => {
  return (
    <a
      href='https://beautyprosoftware.com/b/110043'
      className={classes.Button}
      id={id}
    >
      {text}
    </a>
  );
};

export default Button;
