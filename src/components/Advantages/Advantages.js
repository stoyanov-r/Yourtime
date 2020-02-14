import React from 'react';
import classes from './Advantages.module.scss'
import WithWrapper from '../../hoc/WithWrapper/WithWrapper';
import List from '../UI/List/List';
const Advantages = () => {
  
  const advatagesList = [
    {
      text: 'Не нужно вносить плату за первый и последний месяц.',
      cls: 'Advantages__0'
    }, 
    {
      text: 'Появился клиент? Просто бронируй место онлайн в любое время, без подтверждений. ',
      cls: 'Advantages__1'
    },
    {
      text: 'Собрались в отпуск? Не нужно платить за пустующий кабинет или искать арендатора. ',
      cls: 'Advantages__2'
    },
    {
      text: 'Не нужно думать за электричество, уборку, дезинфеканты и другие расходы - цена окончательная.',
      cls: 'Advantages__3'
    },
    {
      text: 'Организовуй и участвуй в мастер-классах, семинарах, презинтациях, нетворкингах для собственного роста и развития индустрии красоты города.',
      cls: 'Advantages__4'
    },
    {
      text: 'Вы занимаетесь только оказанием услуг своим клиентам, об остальном мы заботимся сами. ',
      cls: 'Advantages__5'
    },
  ]

  return (
    <section className={classes.Advantages}>
      <WithWrapper>
        <h2>Почему ты выберешь <span>YOURTIME</span>?</h2>
        <div className={classes.list}>
          <List list={advatagesList} />
        </div>
        <p>Видишь, с нами удобно и выгодно!</p>
      </WithWrapper>
    </section>
  );
}

export default Advantages;
