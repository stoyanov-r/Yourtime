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
    arrows: false,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: false,
        }
      },
    ]
  };
  return (
    <section className={classes.PriceItem}>
      <h3 id={item.id}>{item.title}</h3>
      <div className={classes.slider}>
        <Slider {...settings}>
          {item.sources.map((src, i) =>
            <img alt={item.title} src={src} key={'img' + i} />
          )}
        </Slider>
      </div>
      <div>
        <p className={classes.rent}>Аренда рабочего места:</p>
        <ul className={classes.list}>
          {item.prices.map((price, i) =>
            <li className={classes.listItem} key={'price' + i}>{price}</li>
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
