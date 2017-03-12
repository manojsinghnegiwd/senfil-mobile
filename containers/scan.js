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
		alert('scan started');
	}

	render () {
		return (
			<View style={{justifyContent: "center"}}>
				<Text style={styles.logo}> Senfile </Text>
				<Button isRipple onPress={this._onPressButton} style={{ width: 100, height: 50, justifyContent: "center",alignItems: "center"}} rippleColor="red">
					<Text> Scan </Text>
				</Button>
			</View>
		)
	}
}

let styles = StyleSheet.create({
	logo: {
		fontSize: 40
	}
})