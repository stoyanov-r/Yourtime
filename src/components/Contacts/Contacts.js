import React from 'react';
import WithWrapper from '../../hoc/WithWrapper/WithWrapper';
import classes from './Contacts.module.scss';
import Icons from '../Icons/Icons';
import Button from '../UI/Button/Button'
import Calendar from '../Calendar/Calendar';

const Contacts = () => {
  return (
    <section className={classes.Contacts}>
      <WithWrapper>
        <h2>Контакты</h2>
        <div className={classes.icons}>
          <Icons
            types={[
              { key: 'facebook', href: 'https://www.facebook.com/yourtime.coworking' },
              { key: 'instagram', href: 'https://www.instagram.com/yourtime.coworking/' }
            ]} />
            <a className={classes.link} href='https://www.instagram.com/yourtime.coworking/'>@yourtime.coworking</a>
        </div>
        <div className={classes.icons}>
          <Icons
            types={[
              { key: 'facebook', href: 'viber://add?number=380632430644' },
              { key: 'telegram', href: 'tg://resolve?domain=roman_stoyanov' }
            ]} />
            <a className={classes.link} href='tel: +380632430644'>+380632430644</a>
        </div>
        <div className={classes.icons}>
          <Icons
            types={[
              { key: 'gps', href: 'https://www.facebook.com/yourtime.coworking' },
            ]} />
            <a className={classes.link} href="google.navigation:q=59.918423, 30.347444&amp;mode=d">г.Николаев, пр. Мира 11/11</a>
          
        </div>
        <section className={classes.calendar}>
          <p>Узнать свободные даты</p>
          <div className={classes.dates}>
            <Calendar />
          </div>
          {/* <Button /> */}
        </section>
        <div className={classes.map}>

        </div>
      </WithWrapper>
    </section>
  );
}

export default Contacts;
