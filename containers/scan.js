import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	Animated,
	Easing,
	TextInput,
	BackAndroid,
	StatusBar,
	ActivityIndicator
} from 'react-native';

import {Button} from '../components';
import Routes from '../constants/routes';

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
		// this.props.navigator.push(Routes[1]);
		this.setState({
			isLoading: true
		})
	}

	_exit = () => {
		BackAndroid.exitApp();
	}

	componentDidMount () {
		Animated.sequence([
			this.imageBounce(),
			this.fadeInButton()
		]).start();
		// change status bar color
		StatusBar.setBackgroundColor("#303F9F");
	}

	render () {

		const {isLoading} = this.state;

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
					<Text style={styles.logo}> Senfil </Text>
					<Text style={styles.tagline}> Enter Desktop IP Address </Text>
					<Animated.Image style={{transform: [{scale: scale}], width: 100, height: 100}} source={require('../assets/desktop.png')} />
				</View>
				<Animated.View style={[styles.buttonContainer, {opacity: scanButton}]}>
					<TextInput
						placeholder="Your IP Address"
						placeholderTextColor="#a7a7a7"
						underlineColorAndroid='rgba(0,0,0,0)'
						style={styles.addressInput}
						onChangeText={(address) => this.setState({address})}
						value={this.state.address}
						keyboardType="numeric"/>
					<View>
						{isLoading ? <View style={styles.loading}>
								<ActivityIndicator color="#7E57C2" size="large" animating={true} />
							</View> : <Button isRipple onPress={this._onPressButton} style={styles.scanButton} rippleColor="#81D4FA">
							<Text style={{color: "#ffffff"}}> Connect </Text>
						</Button>}
					</View>
				</Animated.View>
			</View>
		)
	}
}

let styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		flex: 1
	},
	logoContainer: {
		flex: 3,
		backgroundColor: '#303F9F',
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
		flex: 1,
		paddingTop: 20,
		paddingLeft: 10,
		paddingRight: 10,
	},
	scanButton: {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#7E57C2",
		height: 45,
		marginTop: 10,
		borderRadius: 5
	},
	loading: {
		paddingTop: 20,
		alignItems: "center"
	},
	addressInput: {
		height: 40,
		backgroundColor: "#e0e0e0",
		borderRadius: 5,
		padding: 10,
		color: "#607D8B"
	}
})
