import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput
} from 'react-native';


export default class ClipBoardPage extends Component {

  constructor (props) {
    super(props);
    this.state = {
      newValue: ''
    }
  }

  render () {
    const {newValue} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
        <TextInput
          placeholder="Your IP Address"
          placeholderTextColor="#a7a7a7"
          underlineColorAndroid='rgba(0,0,0,0)'
          onChangeText={(newValue) => this.setState({newValue})}
          style={styles.addressInput}
          editable={true}
          multiline={true}
          value={newValue}
          onContentSizeChange={(e) => console.log(e.nativeEvent)}
          />
        </View>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch"
  },
  buttonContainer: {
		flex: 1,
		paddingTop: 20,
		paddingLeft: 10,
		paddingRight: 10
	},
  addressInput: {
		backgroundColor: "#e0e0e0",
		borderRadius: 5,
		padding: 10,
		color: "#607D8B"
	}
});
