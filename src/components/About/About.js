import React from 'react';

import classes from './About.module.scss';
import Button from '../UI/Button/Button';
import WithWrapper from '../../hoc/WithWrapper/WithWrapper';
import Photogallery from '../Photogallery/Photogallery';
import List from '../UI/List/List';
import Anchor from '../UI/Anchor/Anchor';

const list = [
  { text: 'Студия парикмахера', cls: 'barber' },
  { text: 'Студия визажиста', cls: 'visage' },
  { text: 'Косметический кабинет', cls: 'cosmetology' },
  { text: 'Лекторий', cls: 'lectory' },
  { text: 'Студия кератина', cls: 'ceratin' },
  { text: 'Бар', cls: 'bar' },
];

const About = () => {
  return (
    <section className={classes.About}>
      <Anchor anchor='About' />
      <WithWrapper>
        <h2>О коворкинге</h2>
        <div className={classes.text}>
          <p>
            <strong>YOURTIME</strong> – это первый в Николаеве бьюти-коворкинг, в котором парикмахер, барбер, визажист, бровист, лешмейкер, косметолог, специалист по шугарингу и смежным специальностям может арендовать полностью оборудованное рабочее место на час/день/месяц без предварительных звонков, договоров или предоплат, просто забронировав удобное время через онлайн запись или по телефону <a href='tel:+380632430644'>+380632430644</a>.
          </p>
          <p className={classes.directions}>Центр включает в себя 6 основных пространств: </p>
          <List list={list} />
        </div>
        <div>
          <div className={classes.galleryWrapper}>
            <Photogallery />
          </div>
          <div className={classes.button}>
            <Button text='Забронировать' />
          </div>
        </div>
      </WithWrapper>
    </section>
  );
};

export default About;