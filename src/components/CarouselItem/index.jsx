import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React, { Component } from 'react';
import { ProductCard } from 'react-ui-cards';
import {
  Container,
  Paper,
  Grid,
  makeStyles,
} from '@material-ui/core';

class CarouselProduct extends Component {
  render() {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };
    return (
      <>
        <div>
          <Container>
            <Carousel responsive={responsive}>
              <div>
                <ProductCard
                  photos={[
                    'https://i.imgur.com/jRVDeI8.jpg',
                    'https://i.imgur.com/raPe27t.jpg',
                    'https://i.imgur.com/IpEsYSH.jpg',
                  ]}
                  price="$99"
                  productName="Headphones"
                  description="Donec lectus nulla, molestie aliquam nisl vitae, tempor placerat magna. Morbi dignissim in felis vel aliquet."
                  buttonText="Add to cart"
                  rating={3}
                  url="https://github.com/nukeop"
                />
              </div>
              <div>
                <ProductCard
                  photos={[
                    'https://i.imgur.com/jRVDeI8.jpg',
                    'https://i.imgur.com/raPe27t.jpg',
                    'https://i.imgur.com/IpEsYSH.jpg',
                  ]}
                  price="$99"
                  productName="Headphones"
                  description="Donec lectus nulla, molestie aliquam nisl vitae, tempor placerat magna. Morbi dignissim in felis vel aliquet."
                  buttonText="Add to cart"
                  rating={3}
                  url="https://github.com/nukeop"
                />
              </div>
              <div>
                <ProductCard
                  photos={[
                    'https://i.imgur.com/jRVDeI8.jpg',
                    'https://i.imgur.com/raPe27t.jpg',
                    'https://i.imgur.com/IpEsYSH.jpg',
                  ]}
                  price="$99"
                  productName="Headphones"
                  description="Donec lectus nulla, molestie aliquam nisl vitae, tempor placerat magna. Morbi dignissim in felis vel aliquet."
                  buttonText="Add to cart"
                  rating={3}
                  url="https://github.com/nukeop"
                />
              </div>
              <div>
                <ProductCard
                  photos={[
                    'https://i.imgur.com/jRVDeI8.jpg',
                    'https://i.imgur.com/raPe27t.jpg',
                    'https://i.imgur.com/IpEsYSH.jpg',
                  ]}
                  price="$99"
                  productName="Headphones"
                  description="Donec lectus nulla, molestie aliquam nisl vitae, tempor placerat magna. Morbi dignissim in felis vel aliquet."
                  buttonText="Add to cart"
                  rating={3}
                  url="https://github.com/nukeop"
                />
              </div>
            </Carousel>
          </Container>
        </div>
      </>
    );
  }
}

export default CarouselProduct;
