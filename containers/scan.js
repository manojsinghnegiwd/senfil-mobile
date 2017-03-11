import React, { Component } from 'react';
import {
	View,
} from 'react-native';

import {Button} from '../components'

export default class ScanScreen extends Component {

	_onPressButton = () => {
		console.log('hello');
	}

	render () {
		return (
			<View>
				<Button onPress={this._onPressButton} />
			</View>
		)
	}
}