import React from 'react';

import classes from './Contacts.module.scss';
import WithWrapper from '../../hoc/WithWrapper/WithWrapper';
import Icons from '../Icons/Icons';
import Button from '../UI/Button/Button';
import Calendar from '../Calendar/Calendar';
import Anchor from '../UI/Anchor/Anchor';

const Contacts = ({ winWidth }) => {

  return (
    <section className={classes.Contacts}>
      <Anchor anchor='Contacts' />
      <WithWrapper>
        <h2>Контакты</h2>
        <div className={[classes.icons, classes.first].join(' ')}>
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
              { key: 'viber', href: 'viber://add?number=380632430644' },
              { key: 'telegram', href: 'tg://resolve?domain=roman_stoyanov' }
            ]} />
          <a className={classes.link} href='tel: +380632430644'>+380632430644</a>
        </div>
        <div className={[classes.icons, classes.last].join(' ')}>
          <Icons
            types={[
              { key: 'gps', href: 'google.navigation:q=59.918423, 30.347444&amp;mode=d' },
            ]} />
          <a className={classes.link} href="google.navigation:q=59.918423, 30.347444&amp;mode=d">г.Николаев, пр. Мира 11/11</a>
        </div>
        <section className={classes.calendar}>
          <div className={classes.booking}>
            {winWidth > 1023
              ? <Button text='Узнать свободные даты' />
              : <p>Узнать свободные даты</p>
            }
          </div>
          <div className={classes.dates}>
            <Calendar />
          </div>
        </section>
      </WithWrapper>
      <div className={classes.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10894.245431026173!2d32.0431161!3d46.9506596!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaae037271f0c81e6!2zIllvdXJ0aW1lInwg0JHRjNGO0YLQuC3QutC-0LLQvtGA0LrQuNC90LMgfCDQkNGA0LXQvdC00LAg0YDQsNCx0L7Rh9C10LPQviDQvNC10YHRgtCw!5e0!3m2!1sru!2sua!4v1582024749470!5m2!1sru!2sua"
          title='Как добраться'
          width='100%'
          height='100%'
          frameBorder="0"
          allowFullScreen=""></iframe>
      </div>
    </section>
  );
};

export default Contacts;
