import React, { Component } from 'react';
import CarouselProduct from '../../components/CarouselItem';
import Banner from '../../components/Banner';

class Home extends Component {
  render() {
    return (
      <div>
        <Banner />
        <CarouselProduct />
      </div>
    );
  }
}

export default Home;
