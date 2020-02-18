import React, { useState } from 'react';
import Slider from "react-slick";
import classes from './PriceItem.module.scss'

const PriceItem = ({ item }) => {

  const [isMoreClicked, setisMoreClicked] = useState('false');

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    arrow: false,
  };
  return (
    <section className={classes.PriceItem}>
      <h3>{item.title}</h3>
      <div className={classes.slider}>
        <Slider {...settings}>
          {item.sources.map((src, i) =>
            <img alt={item.title} src={src} key={'img' + i} />
          )}
        </Slider>
      </div>
      <div>
        <p className={classes.rent}>Аренда рабочего кабинета:</p>
        <ul>
          {item.prices.map((price, i) =>
            <li key={'price' + i}>{price}</li>
          )}
        </ul>
        <div className={classes.description}>

          {isMoreClicked
            ? <div className={classes.gradient}>
              <p>{item.description}<span></span></p>
              <button onClick={() => setisMoreClicked(!isMoreClicked)} className={classes.more}>Подробнее</button>
            </div>
            : <div className={classes.noGradient}>
              <p>{item.description}</p>
              <button onClick={() => setisMoreClicked(!isMoreClicked)} className={classes.more}>Скрыть</button>
            </div>
          }
        </div>
      </div>
    </section>
  );
}

export default PriceItem;
