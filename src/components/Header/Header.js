import React, { useState } from 'react';
import classes from './Header.module.scss'
import Icons from '../Icons/Icons';
import WithWrapper from '../../hoc/WithWrapper/WithWrapper';
import Button from '../UI/Button/Button';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'


const Header = ({ winWidth }) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuList =
    [
      { name: 'О нас', anchor: '#About__headline' },
      { name: 'Цены', anchor: '#About__headline' },
      { name: 'Как забронировать?', anchor: '#About__headline' },
      { name: 'Контакты', anchor: '#About__headline' },
    ]
  return (
    <header className={classes.Header}>
      <WithWrapper>
        <div className={classes.logo}>
          <a href='/'><img src='/img/Header__logo.svg' alt='Yourtime' /></a>
        </div>
        <nav className={classes.nav}>
          <button
            className={isMenuOpen ? classes.cross : null}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >Menu</button>
          {isMenuOpen && <Auxiliary>
            <ul>
              {menuList.map((item, i) =>
                <li key={'menu' + i}>
                  <a href={item.anchor}>{item.name}</a>
                </li>
              )}
            </ul>
            <div className={classes.contacts}>
              <Icons 
                types={[
                  {key: 'facebook', href:'https://www.facebook.com/yourtime.coworking'}, 
                  {key: 'instagram', href: 'https://www.instagram.com/yourtime.coworking/'}
                  ] }  />
              <a className={classes.tel} href='tel:+380632430644'>+380632430644</a>
            </div>
          </Auxiliary>
          }
        </nav>
        <div className={classes.booking}>
          <Button text={'Забронировать'} />
        </div>
      </WithWrapper>

    </header>
  );
}

export default Header;
