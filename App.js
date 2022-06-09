import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Provider } from 'react-redux';

import Store from './src/Store'
import { Header, CryptoContainer, Footer } from './src/components';


export default class App extends Component {
  render() {
    return (
      <Provider store={ Store }>
        <View style={ styles.container }>
          <Header />
          <CryptoContainer />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    color: '#fff',
  },
});
