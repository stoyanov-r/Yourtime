import React from 'react';

import classes from './SliderButton.module.scss';


const SliderButton = ({text, onClick}) => {
  return (
      <button className={classes.SliderButton} onClick={onClick}>
        {text}
      </button>
  );
};

export default SliderButton;
