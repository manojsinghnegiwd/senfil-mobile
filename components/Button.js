import React, { Component } from 'react';
import {
	View,
	TouchableNativeFeedback,
	Text
} from 'react-native';

export default class ScanScreen extends Component {
	render () {
		let {onPress} = this.props;
		return (
			<View>
				<TouchableNativeFeedback
					onPress={onPress}
					background={TouchableNativeFeedback.Ripple('#000000')}>
					<View style={{width: 150, height: 100, backgroundColor: 'red'}}>
						<Text style={{margin: 30}}>Button</Text>
					</View>
				</TouchableNativeFeedback>
			</View>
		)
	}
}