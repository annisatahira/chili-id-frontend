import React, { Component } from 'react';
import { ProductCard } from 'react-ui-cards';
import {
  Container,
  Paper,
  Grid,
  makeStyles,
} from '@material-ui/core';

class Product extends Component {
  render() {
    const useStyles = makeStyles(theme => ({
      root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(0),
        textAlign: 'center',
        alignItems: 'flex-start',
        boxShadow: 0,
      },
    }));

    return (
      <div>
        <div
          style={{
            backgroundColor: '#0f2027',
          }}
        >
          <Container>
            <div className={useStyles.root}>
              <Grid container spacing={6} bool="false">
                <Grid item xs={3} boxShadow={0}>
                  <Paper
                    className={useStyles.paper}
                    elevation={0}
                    style={{
                      backgroundColor: '#0f2027',
                    }}
                  >
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
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper
                    className={useStyles.paper}
                    elevation={0}
                    style={{
                      backgroundColor: '#0f2027',
                    }}
                  >
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
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper
                    className={useStyles.paper}
                    elevation={0}
                    style={{
                      backgroundColor: '#0f2027',
                    }}
                  >
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
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper
                    className={useStyles.paper}
                    elevation={0}
                    style={{
                      backgroundColor: '#0f2027',
                    }}
                  >
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
                  </Paper>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}

export default Product;
