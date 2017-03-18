import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	ToolbarAndroid
} from 'react-native';
import globalStyle from '../styles';

export default class UploadScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			serverIp: "192.168.1.6"
		};
	}

  render () {
		console.log(this.state.clipBoardList);
		const {clipBoardList, newItem, serverIp} = this.state;
    return (
      <View style={styles.container}>
				<ToolbarAndroid
					style={globalStyle.toolbar}
					title={serverIp}
					titleColor="#ffffff"
					actions={[{title: 'Disconnect', show: 'always'}]}
					/>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
		backgroundColor: "#ffffff",
    flex: 1
  }
});
