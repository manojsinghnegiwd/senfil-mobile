import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

import {Button} from '../components'

export default class ScanScreen extends Component {

	constructor (props) {
		super(props);
	}

	_onPressButton = () => {
		console.log('scan started');
	}

	render () {
		return (
			<View style={styles.container}>
				<View style={styles.logoContainer}>
					<Text style={styles.logo}> Senfile </Text>
					<Text style={styles.tagline}> Scan QR code to proceed </Text>
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