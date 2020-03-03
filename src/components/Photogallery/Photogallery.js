import React from 'react';
import Slider from "react-slick";

import classes from './Photogallery.module.scss';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipe: true,
  arrows: false,
};

const urls = new Array(7)
  .fill('')
  .map((_, i) => `/img/About/About__gallery--${i}.jpg`);

const Photogallery = () => {

  return (
    <div className={classes.Photogallery}>
      <Slider {...settings}>
        {urls.map((url, i) =>
          <img
            src={url}
            alt={'Фото коворкинга'}
            key={'img' + i}
          />)}
      </Slider>
    </div>
  );
};

export default Photogallery;