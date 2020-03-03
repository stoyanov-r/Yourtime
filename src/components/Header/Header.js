import React, { useState, useEffect, Fragment } from 'react';

import classes from './Header.module.scss'
import Icons from '../Icons/Icons';
import WithWrapper from '../../hoc/WithWrapper/WithWrapper';
import Button from '../UI/Button/Button';

const menuList =
  [
    { name: 'О нас', anchor: '#About' },
    { name: 'Цены', anchor: '#Price' },
    { name: 'Как забронировать?', anchor: '#Booking' },
    { name: 'Контакты', anchor: '#Contacts' },
  ];

const Header = ({ winWidth }) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (winWidth > 1023) {
      setIsMenuOpen(true);
    };
  }, [winWidth]); 

  const linkClickHandler = () => {
    if (winWidth < 1024) {
      setIsMenuOpen(false);
    }
  }

  return (
    <header className={classes.Header}>
      <WithWrapper>
        <div className={classes.logo}>
          <a href='/'><img src='/img/Header/Header__logo.svg' alt='Yourtime' /></a>
        </div>
        <nav className={classes.nav}>
          <button
            className={isMenuOpen ? classes.cross : null}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >Menu</button>
          {isMenuOpen && <Fragment>
            <ul>
              {menuList.map((item, i) =>
                <li className={classes.link} key={'menu' + i}>
                  <a href={item.anchor} onClick={linkClickHandler} >{item.name}</a>
                </li>
              )}
            </ul>
            <div className={classes.contacts}>
              <Icons
                types={[
                  { key: 'facebook', href: 'https://www.facebook.com/yourtime.coworking' },
                  { key: 'instagram', href: 'https://www.instagram.com/yourtime.coworking/' }
                ]} />
              <a className={classes.tel} href='tel:+380632430644'>+380632430644</a>
            </div>
          </Fragment>
          }
        </nav>
        <div className={classes.booking}>
          <Button />
        </div>
      </WithWrapper>

    </header>
  );
};

export default Header;
