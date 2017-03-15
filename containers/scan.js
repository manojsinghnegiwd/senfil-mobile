import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	Animated,
	Easing,
	TextInput,
	BackAndroid
} from 'react-native';

import {Button} from '../components';

export default class ScanScreen extends Component {

	constructor (props) {
		super(props);
		this.scale = new Animated.Value(0);
		this.scanButton = new Animated.Value(0);
		this.state = {address: ''}
	}

	imageBounce = () => {
		this.scale.setValue(0);
		return Animated.spring(
			this.scale,
			{
				toValue: 1,
				duration: 1000,
				easing: Easing.linear
			}
		);
	}

	fadeInButton = () => {
		this.scanButton.setValue(0);
		return Animated.timing(
			this.scanButton,
			{
				toValue: 1,
				duation: 5500,
				easing: Easing.linear
			}
		);
	}

	_onPressButton = () => {
		console.log('scan started');
	}

	_exit = () => {
		BackAndroid.exitApp();
	}

	componentDidMount () {
		Animated.sequence([
			this.imageBounce(),
			this.fadeInButton()
		]).start();
	}

	render () {

		const scale = this.scale.interpolate({
			inputRange: [0, 1],
			outputRange: [0.8, 1.1]
		});

		const scanButton = this.scanButton.interpolate({
			inputRange: [0, 1],
			outputRange: [0, 1]
		});

		return (
			<View style={styles.container}>
				<View style={styles.logoContainer}>
					<Text style={styles.logo}> Senfile... </Text>
					<Text style={styles.tagline}> Scan QR code to proceed </Text>
					<Animated.Image style={{transform: [{scale: scale}]}} source={require('../assets/qrcode.png')} />
				</View>
				<Animated.View style={[styles.buttonContainer, {opacity: scanButton}]}>
					<TextInput
						placeholder="Your ip address"
						placeholderTextColor="#a7a7a7"
						underlineColorAndroid='rgba(0,0,0,0)'
						style={styles.addressInput}
						onChangeText={(address) => this.setState({address})}
						value={this.state.address}
						keyboardType="numeric"/>
					<Button isRipple onPress={this._onPressButton} style={styles.scanButton} rippleColor="#81D4FA">
						<Text style={{color: "#ffffff"}}> Connect </Text>
					</Button>
				</Animated.View>
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
		justifyContent: 'space-between',
		flex: 1,
		padding: 10
	},
	scanButton: {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#03A9F4",
		height: 45,
		marginTop: 10,
		borderRadius: 5
	},
	addressInput: {
		height: 40,
		backgroundColor: "#e0e0e0",
		borderRadius: 5,
		padding: 10,
	}
})
