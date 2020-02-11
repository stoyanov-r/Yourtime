import React, { Component } from 'react';
import classes from './Layout.module.scss'
import Header from '../../components/Header/Header';
import Headline from '../../components/Headline/Headline';
import About from '../../components/About/About';
import Advantages from '../../components/Advantages/Advantages';
import Price from '../../components/Price/Price';
import Booking from '../../components/Booking/Booking';
import Contacts from '../../components/Contacts/Contacts';


// class ShowWindowDimensions extends React.Component {
  //   state = { width: 0, height: 0 };
  //   render() {
  //     return <span>Window size: {this.state.width} x {this.state.height}</span>;
  //   }
  //   updateDimensions = () => {
  //     this.setState({ width: window.innerWidth, height: window.innerHeight });
  //   };
  //   componentDidMount() {
  //     window.addEventListener('resize', this.updateDimensions);
  //   }
  //   componentWillUnmount() {
  //     window.removeEventListener('resize', this.updateDimensions);
  //   }
  // }

export class Layout extends Component {
  render() {
    return (
      <div className={classes.Layout}>
        {/* <div>
          <button>UA</button>
          <button>RU</button>
        </div> */}
        <Header />
        <main>
          <Headline />
          <About />
          <Advantages />
          <Price />
          <Booking />
          <Contacts />
        </main>
        <footer>

        </footer>
      </div>
    );
  }
}

export default Layout;
