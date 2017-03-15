/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ScanScreen from './containers/scan.js';

export default class mobile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScanScreen />
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap'
  }
})

AppRegistry.registerComponent('mobile', () => mobile);
