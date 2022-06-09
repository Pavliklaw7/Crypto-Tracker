import { Text, View, StyleSheet, Image } from 'react-native'
import React, { Component } from 'react'
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'

const CoinCard = ({ coin_name, coin_symbol, quote }) => {

  return (
    <View style={ coinCardContainer }>
      {/* <Image
        style={ styles.image }
        source={ { url: imaegs[ symbol ] } }
      /> */}
      <Text style={ coinCardText }>{ coin_name }</Text>
      <Text style={ coinCardText }>{ coin_symbol }</Text>
      <Text style={ coinCardText }>Price: { quote.USD.price }</Text>
      <Text style={ coinCardText }>volume change (24h): { quote.USD.volume_change_24h }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  coinCardText: {
    color: '#fff'
  },
  coinCardContainer: {
    marginBottom: 16,
    borderColor: '#fff',
    borderWidth: 1,
    padding: 8,
  }
})

const { coinCardText, coinCardContainer } = styles;

export default CoinCard
