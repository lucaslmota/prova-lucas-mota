import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class JustifyContentBasics extends Component {
  render() {
    return (
      // Try setting `justifyContent` to `center`.
      // Try setting `flexDirection` to `row`.
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-center',
        textAlign: 'center',
      }}>
        <View style={{ width: 100, height: 100, backgroundColor: '#00ffff' }} >
          <Text style={{ textAlign: 'center' }} >Square 1</Text>
        </View>
        <View style={{ width: 100, height: 100, backgroundColor: '#20b2aa' }}>
          <Text style={{ textAlign: 'center' }} >Square 2</Text>
        </View>
        <View style={{ width: 100, height: 100, backgroundColor: '#fa8072' }}>
          <Text style={{ textAlign: 'center' }} >Square 3</Text>
        </View>
      </View>
    );
  }
};