import React, { Component } from 'react';
import classes from './Layout.module.scss'
import Header from '../../components/Header/Header';
import Headline from '../../components/Headline/Headline';
import About from '../../components/About/About';
import Advantages from '../../components/Advantages/Advantages';
import Price from '../../components/Price/Price';
import Booking from '../../components/Booking/Booking';
import Contacts from '../../components/Contacts/Contacts';
import Reviews from '../../components/Reviews/Reviews';
import Footer from '../../components/Footer/Footer';


export class Layout extends Component {

  state = {
    winWidth: window.innerWidth,
  };

  updateDimensions = () => {
    this.setState({ winWidth: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  };

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  };

  shouldComponentUpdate() {
    if (this.state.winWidth > 1023) {
      return true
    }
    return false
  }

  render() {
    return (
      <div className={classes.Layout}>
        {/* <div>
          <button>UA</button>
          <button>RU</button>
        </div> */}
        <Header isMenuOpen={this.state.isMenuOpen} winWidth={this.state.winWidth} />
        <main>
          <Headline />
          <About />
          <Advantages />
          <Price />
          <Booking />
          <Reviews />
          <Contacts winWidth={this.state.winWidth} />
        </main>
        <Footer />
      </div >
    );
  }
}

export default Layout;
