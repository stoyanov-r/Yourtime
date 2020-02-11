import React from 'react';
import classes from './Header.module.scss'
import Socials from '../Socials/Socials';
import WithWrapper from '../../hoc/WithWrapper/WithWrapper';
import Button from '../UI/Button/Button';


const Header = () => {
  return (
    <header className={classes.Header}>
      <WithWrapper>
        <div className={classes.Header__logo}>
          <a href='/'><img src='/img/Header__logo.svg' alt='Yourtime' /></a>
        </div>
        <nav className={classes.Header__nav}>
          <button className={classes.cross}>Menu</button>
          {/* <ul>
            <li><a>О нас</a></li>
            <li><a>Цены</a></li>
            <li><a>Как забронировать?</a></li>
            <li><a>Контакты</a></li>
          </ul> */}
        </nav>
        {/* <div className={classes.Header__contacts}>
          <Socials />
          <a href='tel:+380632430644'>+380632430644</a>
        </div> */}
        <Button text={'Забронировать'}/>
      </WithWrapper>

    </header>
  );
}

export default Header;
