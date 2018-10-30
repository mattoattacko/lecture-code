import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';

import createStore from '../store/';
const store = createStore();

import Header from '../components/header/';
import Footer from '../components/footer/';

export default class MyApp extends App {

  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {

    const { Component, pageProps } = this.props

    return (
      <Provider store={store}>
        <Container>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Container>
      </Provider>
    )
  }
}