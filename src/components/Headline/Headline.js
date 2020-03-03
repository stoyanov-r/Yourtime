import React from 'react';

import classes from './Headline.module.scss';
import WithWrapper from '../../hoc/WithWrapper/WithWrapper';

const Headline = () => {
  return (
    <section className={classes.Headline}>
      <WithWrapper>
        <h1><strong>Yourtime</strong> beauty-coworking</h1>
        <p>Аренда бьюти-мест от часа | Площадка для МК</p>
        <div className={classes.button}><a href={'#Price'} >Узнать цену</a></div>
      </WithWrapper>
    </section>
  );
};

export default Headline;
