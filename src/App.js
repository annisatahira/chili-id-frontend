import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Import component
import AppBar from './components/AppBar';
import Banner from './components/Banner';
import FooterBar from './components/Footer';
import CarouselProduct from './components/CarouselItem';
import Product from './components/Product';
import Login from './components/Login';
import Register from './components/Register';
import Home from './layouts/Home';
import { Container, Grid } from '@material-ui/core';

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppBar />

        <Switch>
          <Route exact path="/home">
            {/* Sending props name */}
            <Home />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/pre-order"></Route>
          <Route path="/about">
            <Product />
          </Route>
          <Route path="/login">
            {/* component class*/}
            <Login />
          </Route>
          <Route path="/register">
            {/* component function*/}
            <Register />
          </Route>
        </Switch>

        <FooterBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
