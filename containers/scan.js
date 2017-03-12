import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	Animated,
	Easing
} from 'react-native';

import {Button} from '../components'

export default class ScanScreen extends Component {

	constructor (props) {
		super(props);
		this.scale = new Animated.Value(0)
	}

	imageBounce = () => {
		this.scale.setValue(0);
		Animated.spring(
			this.scale,
			{
				toValue: 1,
				duration: 1000,
				easing: Easing.linear
			}
		).start();
	}

	_onPressButton = () => {
		console.log('scan started');
	}

	componentDidMount () {
		this.imageBounce();
	}

	render () {

		const scale = this.scale.interpolate({
			inputRange: [0, 1],
			outputRange: [0.8, 1.1]
		});

		return (
			<View style={styles.container}>
				<View style={styles.logoContainer}>
					<Text style={styles.logo}> Senfile... </Text>
					<Text style={styles.tagline}> Scan QR code to proceed </Text>
					<Animated.Image style={{transform: [{scale: scale}]}} source={require('../assets/qrcode.png')} />
				</View>
				<View style={styles.buttonContainer}>
					<Button isRipple onPress={this._onPressButton} style={styles.scanButton} rippleColor="#4FC3F7">
						<Text style={{color: "#ffffff"}}> Scan </Text>
					</Button>
				</View>
			</View>
		)
	}
}

let styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		flexGrow: 1
	},
	logoContainer: {
		flex: 3,
		backgroundColor: '#03A9F4',
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	logo: {
		fontSize: 40,
		color: "#ffffff"
	},
	tagline: {
		color: '#ffffff',
		fontSize: 25
	},
	buttonContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1
	},
	scanButton: { 
		width: 100,
		height: 50,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#03A9F4"
	}
})