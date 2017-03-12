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
		flex: 3
	},
	logo: {
		fontSize: 40
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