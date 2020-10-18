import React from 'react';

import classes from './Footer.module.scss';
import WithWrapper from '../../hoc/WithWrapper/WithWrapper';
import ModalPolicy from '../ModalPolicy/ModalPolicy';


const Footer = () => {
  const now = new Date();

  return (
    <footer className={classes.Footer}>
      <WithWrapper>
        <p>YOURTIME | Beauty-coworking 2019-{now.getFullYear()}</p>
        {/* <p><a href='#Price__headline'>Условия Аренды</a></p> */}
        <p><ModalPolicy /></p>
        <p>Developed by <a href='https://www.linkedin.com/in/roman-stoyanov/'> Stoyanov Roman</a></p>
      </WithWrapper>
    </footer>
  );
};

export default Footer;
