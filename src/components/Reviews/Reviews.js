import React, { PureComponent } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import classes from './Reviews.module.scss';
import WithWrapper from '../../hoc/WithWrapper/WithWrapper';
import SliderButton from '../UI/SliderButton/SliderButton';

const images = new Array(11)
  .fill('')
  .map((_, i) => `/img/Reviews/Reviews--${i}.jpg`);

const settings = {
  className: "center",
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 3,
  swipeToSlide: true,
  arrows: false,
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

class Reviews extends PureComponent {

  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  };

  next() {
    this.slider.slickNext();
  };

  previous() {
    this.slider.slickPrev();
  };

  render() {
    return (
      <section className={classes.Reviews}>
        <WithWrapper>
          <h2>Отзывы</h2>
          <div className={classes.slider}>
            <div className={classes.previous}>
              <SliderButton onClick={this.previous} />
            </div>
            <Slider ref={c => (this.slider = c)} {...settings}>
              {images.map((img, i) =>
                <div className={classes.img} key={'review-' + i}>
                  <img src={img} alt={'Отзывы наших посетителей'} />
                </div>)}
            </Slider>
            <div className={classes.next}>
              <SliderButton onClick={this.next} />
            </div>
          </div>
        </WithWrapper>
      </section>
    );
  };
};

export default Reviews;