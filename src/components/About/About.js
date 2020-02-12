import React from 'react';
import Button from '../UI/Button/Button';
import WithWrapper from '../../hoc/WithWrapper/WithWrapper';
import Photogallery from '../Photogallery/Photogallery';
import classes from './About.module.scss';


const About = () => {
  return (
    <section className={classes.About}>
      <WithWrapper>
        <h2 id='About__headline'>О коворкинге</h2>
        <div className={classes.text}>
          <p>
            <strong>YOURTIME</strong> – это первый в Николаеве бьюти-коворкинг, в котором парикмахер, барбер, визажист, бровист, лешмейкер, косметолог, специалист по шугарингу и смежным специальностям может арендовать полностью оборудованное рабочее место на час/день/месяц без предварительных звонков, договоров или предоплат, просто забронировав удобное время через онлайн запись или по телефону <a href='tel:+380632430644'>+380632430644</a>.
          </p>
          <p className={classes.directions}>Центр включает в себя 6 основных пространств: </p>
          <ul>
            
            <li>Студия парикмахера</li>
            <li>Студия визажиста</li>
            <li>Косметический кабинет</li>
            <li>Лекторий</li>
            <li>Студия кератина</li>
            <li>Бар</li> 
          </ul>
        </div>
        <div className={classes.button}>
          <Button text='Забронировать' />
        </div>
        <div>
          <Photogallery />
        </div>
      </WithWrapper>
    </section>
  );
}

export default About;
