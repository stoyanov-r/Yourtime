import React from 'react';
import classes from './Price.module.scss'
import PriceItem from './PriceItem/PriceItem';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
// import { SampleNextArrow, SamplePrevArrow } from '../UI/Arrows/Arrows';
import WithWrapper from '../../hoc/WithWrapper/WithWrapper';
import Button from '../UI/Button/Button'

const priceList = [
  {
    title: 'Косметический кабинет',
    prices: ['1 час - 100грн.', '1 день - 400 грн.'],
    sources: ['/img/Price__cosmetology.jpg', '/img/Price__cosmetology-1.jpg', '/img/Price__cosmetology-2.jpg'],
    description: 'Отдельный кабинет с кушеткой – рай для лешмейкера, мастера перманентного макияжа, шугаринга, массажиста и смежных специальностей. Только вы и ваш клиент Бесплатно предоставляется: бациллол, стериллиум, бумажные полотенца, хлоргексидин, ватные диски, ватные палочки, лампа-лупа, косметологическая тележка, одноразовая простынь.'
  },
  {
    title: 'РАБОЧЕЕ МЕСТО ПАРИКМАХЕРА',
    prices: ['1 час - 60 грн', '6 часов - 230 грн', 'День - 300 грн', '15 смен - 3000 грн'],
    sources: ['/img/Price__cosmetology.jpg'],
    description: 'В нашем центре создано 4 полностью укомплектованных места для стрижек, причесок и покрасок. Для формирования своего портфолио предусмотрен профессиональный софтбокс и фотозона, а для проведения полноценных фотосессий – большой 3-метровый фотофон.'
  },
  {
    title: 'РАБОЧЕЕ МЕСТО ВИЗАЖИСТА ',
    prices: ['1 час - 50 грн', '3 часа - 125 грн', 'День - 150 грн', '15 смен - 1400 грн'],
    sources: ['/img/Price__cosmetology.jpg'],
    description: 'В нашем центре создано 4 оборудованных места визажиста с правильной грим-подсветкой. Для формирования своего портфолио также предусмотрен профессиональный софтбокс и фотозона, а для проведения полноценных фотосессий – большой 3-метровый фотофон. Бесплатно предоставляется: бациллол, стериллиум, бумажные полотенца, ватные диски, ватные палочки, специальная лампа для идеальных портретов.'
  },
]

const Price = () => {

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
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
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />
  };


  return (
    <section className={classes.Price}>
      <WithWrapper>
        <h2 id='Price__headline'>Цены</h2>
        <div className={classes.slider}>
          <Slider {...settings}>
            {priceList.map((item, i) => <PriceItem item={item} key={'item' + i} />)}
          </Slider>
        </div>
        <div className={classes.button}>
          <Button />
        </div>
      </WithWrapper>
    </section>
  );
}

export default Price;