import React from 'react';
import WithWrapper from '../../hoc/WithWrapper/WithWrapper';
import Slider from 'react-slick';
import classes from './Reviews.module.scss';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const images = new Array(5)
  .fill('')
  .map((_, i) => `/img/Reviews-${i}.jpg`)

const settings = {
  className: "center",
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 3,
  swipeToSlide: true,
  arrow: false,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
      }
    },
  ]
};

const Reviews = () => {
  return (
    <section className={classes.Reviews}>
      <WithWrapper>
        <h2>Отзывы</h2>
        <div className={classes.slider}>
        <Slider {...settings}>
          {images.map((img, i) =>
            <div className={classes.img}  key={'review-' + i}><img
              src={img}
              alt={'Отзывы наших посетителей'}
            /> </div>)}
        </Slider>
        </div>
      </WithWrapper>
    </section>
  );
}

export default Reviews;
