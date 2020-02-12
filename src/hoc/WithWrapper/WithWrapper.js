import React from 'react';
import classes from './WithWrapper.module.scss'

const WithWrapper = props => {
  return (
    <div style={props.styles} className={classes.WithWrapper}>
      {props.children}
    </div>
  );
}

export default WithWrapper;
