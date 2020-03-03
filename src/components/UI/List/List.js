import React from 'react';

import classes from './List.module.scss';

const List = ({list}) => {
  return (
    <ul className={classes.List}>
      {list.map((item, index) => 
      <li 
        key={item.cls+index} 
        className={classes[item.cls]}
      >{item.text}</li>
      )}
    </ul>
  );
};

export default List;
