import React, { Component } from 'react';
import {
	View,
	Text
} from 'react-native';

import {Button} from '../components'

export default class ScanScreen extends Component {

	_onPressButton = () => {
		console.log('hello');
	}

	render () {
		return (
			<View>
				<Button isRipple onPress={this._onPressButton} style={{ width: 100, height: 50}} rippleColor="red">
					<Text> Button </Text>
				</Button>
			</View>
		)
	}
}