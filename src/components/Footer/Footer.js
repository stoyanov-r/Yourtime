import React from 'react';

import classes from './Footer.module.scss';
import WithWrapper from '../../hoc/WithWrapper/WithWrapper';
import ModalPolicy from '../ModalPolicy/ModalPolicy';


const Footer = () => {
  const now = new Date();

  return (
    <footer className={classes.Footer}>
      <WithWrapper>
        <div className="item">YOURTIME | Beauty-coworking 2019-{now.getFullYear()}</div>
        {/* <p><a href='#Price__headline'>Условия Аренды</a></p> */}
        <div className="item"><ModalPolicy /></div>
        <div className="item">Developed by <a href='https://www.linkedin.com/in/roman-stoyanov/'> Stoyanov Roman</a></div>
      </WithWrapper>
    </footer>
  );
};

export default Footer;
