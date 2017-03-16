import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

export default class UploadScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Upload</Text>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  }
});
