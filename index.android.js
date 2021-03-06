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
  View,
  Navigator
} from 'react-native';
import ScanScreen from './containers/scan';
import UploadScreen from './containers/upload';
import Routes from './constants/routes';

export default class mobile extends Component {

  renderRoute = (route, navigator) => {
    switch(route.title) {
      case 'Connect':
        return <ScanScreen navigator={navigator} />
      case 'Dash':
        return <UploadScreen navigator={navigator} />
      default :
        return <Text>No Route Found</Text>
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Navigator
          initialRoute={Routes[0]}
          initialRouteStack={Routes}
          renderScene={this.renderRoute}
          configureScene={(route, routeStack) =>
            Navigator.SceneConfigs.FloatFromBottom
          }
        />
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    backgroundColor: '#303F9F'
  }
})

AppRegistry.registerComponent('mobile', () => mobile);
