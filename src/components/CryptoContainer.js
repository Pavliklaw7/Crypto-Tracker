import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';

class CryptoContainer extends Component {
  render() {
    return (
      <View >
        <Text style={ cryptoContainerText }>Container</Text>
      </View>
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
  }
})

const { cryptoContainerText } = styles;

export default connect(mapStateToProps)(CryptoContainer)
