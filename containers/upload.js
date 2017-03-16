import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';
import {Button} from '../components';
import globalStyle from '../styles';

export default class UploadScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Button style={globalStyle.button}>
          <Text style={{color: "#ffffff"}}>Upload</Text>
        </Button>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 10
  }
});
