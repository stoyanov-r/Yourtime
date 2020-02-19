import React from 'react';
import classes from './Photogallery.module.scss';
import Slider from "react-slick";


const Photogallery = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    arrow: false,
  };

  const urls = new Array(2).fill('')
    .map((_, i) => `/img/About__gallery-${i}.jpg`)

  return (
    <div className={classes.Photogallery}>
      <Slider {...settings}>
        {urls.map((url, i) => <img src={url} alt={'Фото коворкинга'} key={'img' + i} />)}
      </Slider>
    </div>
  );
}

export default Photogallery;