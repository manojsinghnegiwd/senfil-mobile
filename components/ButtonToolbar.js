import React, {Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';

import Button from './Button';

export default class ButtonToolbar extends Component {
  render () {

    const {buttons} = this.props;

    return (
      <View style={{alignSelf: "stretch", height: 60, flexDirection: "row"}}>
        {buttons && buttons.length != 0 ? buttons.map((button, index) => {
          return (
            <View key={index} style={{flex:1}}>
              <Button isRipple onPress={this._onPressButton} style={styles.tabs} rippleColor="#81D4FA">
                <Text style={{color: "#ffffff"}}> {button.text} </Text>
              </Button>
            </View>
          )
        }) : null}
      </View>
    )
  }
}

var styles = StyleSheet.create({
  tabs: {
		backgroundColor: "red",
		justifyContent: "center",
		alignItems: "center",
		height: 60
  }
})
