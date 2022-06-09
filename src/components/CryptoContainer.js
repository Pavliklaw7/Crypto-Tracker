import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import FetchCoinData from '../Actions/FetchCoinData'
import CoinCard from './CoinCard';
import Spinner from 'react-native-loading-spinner-overlay';

class CryptoContainer extends Component {
  componentDidMount() {
    this.props.FetchCoinData();
  }

  renderCoinCards() {
    const { crypto } = this.props

    return crypto.data.map((coin, index) => {
      return (
        <CoinCard
          key={ index }
          coin_name={ coin.name }
          coin_symbol={ coin.symbol }
          quote={ coin.quote }
        />
      )
    })
  }

  render() {
    const { crypto } = this.props

    if (crypto.isFetching) {
      return (
        <View >
          <Spinner
            visible={ crypto.isFetching }
            textContent={ 'Loading...' }
            textStyle={ '#fff' }
            animation='fade'
          />

        </View>
      )
    }

    return (
      <ScrollView style={ container }>
        { this.renderCoinCards() }
      </ScrollView>
    )
  }
}

function mapStateToProps(state) {
  return {
    crypto: state.crypto
  }
}

const styles = StyleSheet.create({
  cryptoContainerText: {
    color: '#fff',
  },
  container: {
    marginTop: 16,
    marginBottom: 16,
  }
})

const { cryptoContainerText, container } = styles;

export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer)
