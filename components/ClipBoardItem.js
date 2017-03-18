import React, { Component } from 'react';
import {
	View,
	Text
} from 'react-native';

export default class ClipBoardItem extends Component {
	render () {
		let {data} = this.props;
		return (
			<View>
        <Text>{data.text}</Text>
			</View>
		)
	}
}
