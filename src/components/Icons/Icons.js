import React from 'react';

import classes from './Icons.module.scss';

const Icons = ({ types = ['none'] }) => {

  return (
    <div className={classes.Icons}>
      {types.map((type, index) => {
        const cls = [classes.Icon]
        cls.push(classes[type.key])
        return (
          <a href={type.href} key={type + index} className={cls.join(' ')}>
            {type.key}
          </a>
        )
      })}
    </div>
  );
};

export default Icons;
