import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Clipboard
} from 'react-native';

import {Button} from '../components';
import globalStyle from '../styles';

export default class ClipBoardPage extends Component {

  constructor (props) {
    super(props);
    this.state = {
      newValue: '',
      height: 100
    }
  }

  updateSize = (height) => {
    this.setState({
      height
    });
  }

  componentDidMount = () => {
    Clipboard.getString()
      .then((newValue) => this.setState({newValue}));
  }

  render () {
    const {newValue, height} = this.state;

    let newStyle = {
      height
    }

    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
        <TextInput
          placeholder="Paste your text here"
          placeholderTextColor="#a7a7a7"
          underlineColorAndroid='rgba(0,0,0,0)'
          onChangeText={(newValue) => this.setState({newValue})}
          style={[styles.addressInput, newStyle]}
          editable={true}
          value={newValue}
          multiline={true}
          onContentSizeChange={(e) => this.updateSize(e.nativeEvent.contentSize.height)}
          />
          <Button isRipple onPress={this._onPressButton} style={[globalStyle.button, styles.scanButton]} rippleColor="#81D4FA">
            <Text style={{color: "#ffffff"}}> Send To PC </Text>
          </Button>
        </View>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
  },
  buttonContainer: {
		flex: 1
	},
  scanButton: {
    borderRadius: 0,
    marginTop: 0
  },
  addressInput: {
		backgroundColor: "#e0e0e0",
		// borderRadius: 5,
		padding: 10,
		color: "#607D8B"
	}
});
