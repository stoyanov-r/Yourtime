import React from 'react';

import classes from './Booking.module.scss';
import WithWrapper from '../../hoc/WithWrapper/WithWrapper';
import Icons from '../Icons/Icons';
import Anchor from '../UI/Anchor/Anchor';

const Booking = () => {
  return (
    <section className={classes.Booking}>
      <Anchor anchor='Booking'/>
      <WithWrapper>
        <div className={classes.wrapper}>
          <h2>Как стать резидентом <span>YOURTIME</span>?</h2>
          <p> Для этого Вам понадобится не больше минуты</p>
          <ol>
            <li><span>1</span>Перейдите по  <a href='https://beautyprosoftware.com/b/110043'>ссылке</a></li>
            <li><span>2</span>Выберите длительность аренды</li>
            <li><span>3</span>Выберете свободное время и место онлайн</li>
            <li><span>4</span>Укажите свой номер телефона и имя</li>
          </ol>
          <p>Не нужно дополнительных звонков или подтверждений, предоплат или договоров, просто приходите
            в забронированное время. <br/>Онлайн запись доступна
            в любой день недели, круглосуточно, даже поздней ночью на самое утро.
            <br/>Также доступна запись через соцсети, по звонку или через Viber, Telegram
            <a href='tel:+38 063 243 06 44'> +38 063 243 06 44</a>.
          </p>
          <p className={classes.socials}>МЫ В СОЦСЕТЯХ</p>
          <Icons 
            types={[
              { key: 'facebook', href: 'https://www.facebook.com/yourtime.coworking' },
              { key: 'instagram', href: 'https://www.instagram.com/yourtime.coworking/' }
            ]} />
        </div>
      </WithWrapper>
    </section>
  );
};

export default Booking;
