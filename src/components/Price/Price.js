import React, { PureComponent } from 'react';
import classes from './Price.module.scss'
import PriceItem from './PriceItem/PriceItem';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
// import { SampleNextArrow, SamplePrevArrow } from '../UI/Arrows/Arrows';
import WithWrapper from '../../hoc/WithWrapper/WithWrapper';
import Button from '../UI/Button/Button'
import SliderButton from '../UI/SliderButton/SliderButton';

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

const priceList = [
  {
    title: 'Косметический кабинет',
    id:'Price__cosmetology',
    prices: ['1 час - 100грн.', '1 день - 400 грн.'],
    sources: ['/img/Price__cosmetology.jpg', '/img/Price__cosmetology-1.jpg', '/img/Price__cosmetology-2.jpg'],
    description: 'Отдельный кабинет с кушеткой – рай для лешмейкера, мастера перманентного макияжа, шугаринга, массажиста и смежных специальностей. Только вы и ваш клиент Бесплатно предоставляется: бациллол, стериллиум, бумажные полотенца, хлоргексидин, ватные диски, ватные палочки, лампа-лупа, косметологическая тележка, одноразовая простынь.'
  },
  {
    title: 'Студия парикмахера',
    id:'Price__barber',
    prices: ['1 час - 60 грн', '6 часов - 230 грн', 'День - 300 грн', '15 смен - 3000 грн'],
    sources: ['/img/Price__cosmetology.jpg'],
    description: 'В нашем центре создано 4 полностью укомплектованных места для стрижек, причесок и покрасок. Для формирования своего портфолио предусмотрен профессиональный софтбокс и фотозона, а для проведения полноценных фотосессий – большой 3-метровый фотофон.'
  },
  {
    title: 'Студия визажиста',
    id:'Price__makeup',
    prices: ['1 час - 50 грн', '3 часа - 125 грн', 'День - 150 грн', '15 смен - 1400 грн'],
    sources: ['/img/Price__cosmetology.jpg'],
    description: 'В нашем центре создано 4 оборудованных места визажиста с правильной грим-подсветкой. Для формирования своего портфолио также предусмотрен профессиональный софтбокс и фотозона, а для проведения полноценных фотосессий – большой 3-метровый фотофон. Бесплатно предоставляется: бациллол, стериллиум, бумажные полотенца, ватные диски, ватные палочки, специальная лампа для идеальных портретов.'
  },
]

class Price extends PureComponent {

  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  


  render() {

    return (
      <section className={classes.Price}>
        <WithWrapper>
          <h2>Цены</h2>
          <div className={classes.slider}>
            <div className={classes.previous}>
              <SliderButton text='previous' onClick={this.previous} />
            </div>
            <Slider ref={c => (this.slider = c)} {...settings}>
              {priceList.map((item, i) => <PriceItem item={item} key={'item' + i} />)}
            </Slider>
            <div className={classes.next}>
              <SliderButton text='next' onClick={this.next} />
            </div>

          </div>

          <div className={classes.button}>
            <Button id='Booking' />
          </div>
        </WithWrapper>
      </section>
    );
  }
}

export default Price;