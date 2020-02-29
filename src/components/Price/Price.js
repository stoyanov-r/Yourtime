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

const createImageArray = (dest, count) => new Array(count)
  .fill('')
  .map((_, i) => dest + i + '.jpg')


const priceList = [

  {
    title: 'Студия парикмахера',
    id: 'Price__barber',
    prices: ['1 час - 60 грн', '6 часов - 230 грн', 'День - 300 грн', '15 смен - 3000 грн'],
    sources: createImageArray('/img/Price/Price__hairdresser--', 5),
    description: 'В нашем центре создано 4 полностью укомплектованных места для стрижек, причесок и покрасок. Для формирования своего портфолио предусмотрен профессиональный софтбокс и фотозона, а для проведения полноценных фотосессий – большой 3-метровый фотофон.'
  },
  {
    title: 'Студия визажиста',
    id: 'Price__makeup',
    prices: ['1 час - 50 грн', '3 часа - 125 грн', 'День - 150 грн', '15 смен - 1400 грн'],
    sources: createImageArray('/img/Price/Price__makeup--', 4),
    description: 'В нашем центре создано 4 оборудованных места визажиста с правильной грим-подсветкой. Для формирования своего портфолио также предусмотрен профессиональный софтбокс и фотозона, а для проведения полноценных фотосессий – большой 3-метровый фотофон. Бесплатно предоставляется: бациллол, стериллиум, бумажные полотенца, ватные диски, ватные палочки, специальная лампа для идеальных портретов.'
  },
  {
    title: 'Студия кератина',
    id: 'Price__keratin',
    prices: ['1 час - 60 грн', '6 часов - 230 грн', 'День - 300 грн', '15 смен - 3000 грн'],
    sources: createImageArray('/img/Price/Price__keratin--', 2),
    description: "Отдельный кабинет с дополнительной вентиляцией для комфортного выполнения кератинового выпрямления, ламинирования и других процедур, которые имеют запах. Для формирования своего портфолио предусмотрен профессиональный софтбокс и фотозона, а для проведения полноценных фотосессий – большой 3-метровый отрывной фотофон. Бесплатно предоставляются: Полотенца, бумажные накладки на шею для защиты от волос, ультразвуковой стерилизатор, бациллол, стериллиум, накидка, салфетки, одноразовые накидки для клиента, специальная лампа для идеальных портретов. Дополнительно можно приобрести: Одноразовые накидки для мастера при покраске, шапочки для покраски, перчатки, фольгу, шампуни, бальзамы и маски для мытья волос от брендов Estel, L'Oréal Professionnel, Matrix, как расходные материалы."
  },
  {
    title: 'Лекторий',
    id: 'Price__lectory',
    prices: ['1 час - 200 грн', 'День - 1100 грн'],
    sources: createImageArray('/img/Price/Price__lectory--', 3),
    description: 'Удобное, стильное и полностью оборудованное помещение, в котором можно проводить нетворкинги, лекции, презентации, мастер-классы тут же отрабатывая практику (благодаря зеркалам) или используя для этого отдельное помещение на 9 рабочих мест. Лекторий оборудован современным телевизором, позволяющим вести мастер-классы с прямой проекцией на экран. В лектории имеются фоны для фотосессий и фото-штатив, что позволяет арендовать его для проведения фэшн-съемок или съемок своего портфолио. Вместительность лектория - 25 человек. Бесплатно предоставляется: флипчарт, маркеры, столы, стулья. За дополнительную плату предоставляются: телевизор, ноутбук, аудиосистема, видеокамера, фото-, видео- штатив, микрофоны, бумага для флипчартов, кушетки, большой бумажный фотофон (3 метра), софтбокс, посуда, расходные материалы, отдельное помещение для практических занятий.'
  },
  {
    title: 'Косметический кабинет',
    id: 'Price__cosmetology',
    prices: ['1 час - 100грн.', '1 день - 400 грн.'],
    sources: createImageArray('/img/Price/Price__cosmetology--', 3),
    description: 'Отдельный кабинет с кушеткой – рай для лешмейкера, мастера перманентного макияжа, шугаринга, массажиста и смежных специальностей. Только вы и ваш клиент Бесплатно предоставляется: бациллол, стериллиум, бумажные полотенца, хлоргексидин, ватные диски, ватные палочки, лампа-лупа, косметологическая тележка, одноразовая простынь.'
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