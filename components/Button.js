import React, { Component } from 'react';
import {
	View,
	TouchableNativeFeedback
} from 'react-native';

export default class Button extends Component {
	render () {
		let {onPress, isRipple, rippleColor, children, style} = this.props;
		return (
			<View>
				<TouchableNativeFeedback
					onPress={onPress}
					background={isRipple ? TouchableNativeFeedback.Ripple(rippleColor || "#000000") : null}>
					<View style={style}>
						{children}
					</View>
				</TouchableNativeFeedback>
			</View>
		)
	}
}
