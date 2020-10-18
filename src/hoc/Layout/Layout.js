import React, { Component } from 'react';

import classes from './Layout.module.scss';
import Header from '../../components/Header/Header';
import Headline from '../../components/Headline/Headline';
import About from '../../components/About/About';
import Advantages from '../../components/Advantages/Advantages';
import Price from '../../components/Price/Price';
import Booking from '../../components/Booking/Booking';
import Contacts from '../../components/Contacts/Contacts';
import Reviews from '../../components/Reviews/Reviews';
import Footer from '../../components/Footer/Footer';
import TopButton from '../../components/UI/TopButton/TopButton';
import ModalPolicy from '../../components/ModalPolicy/ModalPolicy';


export class Layout extends Component {

  state = {
    winWidth: window.innerWidth,
    // scrollY: window.scrollY,

  };

  updateDimensions = () => {
    this.setState({ winWidth: window.innerWidth });
  };

  // updateScroll = () => {
  //   this.setState({ scrollY: window.scrollY})
  // }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
    // window.addEventListener('scroll', this.updateScroll);
  };

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  };

  shouldComponentUpdate() {
    if (this.state.winWidth > 1023) {
      return true;
    };
    return false;
  };

  render() {
    return (
      <div className={classes.Layout}>
        {/* <div>
          <button>UA</button>
          <button>RU</button>
        </div> */}
        <Header winWidth={this.state.winWidth} />
        <main>
          <Headline />
          <About />
          <Advantages />
          <Price />
          <Booking />
          <Reviews />
          <Contacts winWidth={this.state.winWidth} />
          <TopButton />
        </main>
        <Footer />
      </div >
    );
  };
};

export default Layout;
