import React, {Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';

import Button from './Button';

export default class TabBar extends Component {
  render () {

    let {buttons, buttonTextColor, tabStyle, tabActiveStyle, activeTab, rippleColor} = this.props;

		let newStyle = [styles.tabs];

		if(tabStyle) {
			newStyle = newStyle.concat(tabStyle);
		}

		if(!tabActiveStyle) {
			tabActiveStyle = [];
		}

    return (
      <View style={{alignSelf: "stretch", height: 60, flexDirection: "row"}}>
        {buttons && buttons.length != 0 ? buttons.map((button, index) => {
          return (
            <View key={index} style={{flex:1}}>
              <Button isRipple onPress={button.onPress} style={newStyle.concat( activeTab == index ? tabActiveStyle : [] )} rippleColor={rippleColor}>
                <Text style={{color: buttonTextColor}}> {button.text} </Text>
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
		justifyContent: "center",
		alignItems: "center",
		height: 60
  }
})
