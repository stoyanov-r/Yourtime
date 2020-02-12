import React from 'react';
import classes from './Icons.module.scss'

const Icons = ({ types = ['none'] }) => {

  return (
    <div className={classes.Icons}>
      {types.map((type, index) => {
        const cls = [classes.Icon]
        cls.push(classes[type])
        return (
          <div key={type + index} className={cls.join(' ')}>{type}</div>
        )
      })}
    </div>
  );
}

export default Icons;
