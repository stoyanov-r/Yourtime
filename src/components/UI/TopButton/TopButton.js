import React, { useState, useEffect, Fragment } from 'react';

import classes from './TopButton.module.scss';

const TopButton = () => {
  const [scrollY, setScrollY] = useState(window.scrollY);

  const updateScrollY = () => {
    setScrollY(window.scrollY)
  };

  useEffect (() => {
    window.addEventListener('scroll', updateScrollY)
  });

  return (
    <Fragment>
      {(scrollY > 1000) && <button className={classes.TopButton} onClick={() => window.scrollTo(0, 0)}>Наверх</button>}
    </Fragment>
  );
};

export default TopButton;
