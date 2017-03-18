import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	ToolbarAndroid,
	ViewPagerAndroid
} from 'react-native';
import {Button, ButtonToolbar} from '../components';
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
				<ButtonToolbar tabStyle={styles.tabs} buttonTextColor="#ffffff" buttons={[{
					text: 'Files',
				},{
					text: 'Clip Board',
				}]} />
				<ViewPagerAndroid
		      style={styles.viewer}
		      initialPage={0}>
			      <View style={styles.pageStyle}>
			        <Text>First page</Text>
			      </View>
			      <View style={styles.pageStyle}>
			        <Text>Second page</Text>
			      </View>
		    </ViewPagerAndroid>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
		backgroundColor: "#ffffff",
    flex: 1
  },
	viewer: {
		flex: 1
	},
	pageStyle: {
    alignItems: 'center',
    padding: 20,
  },
	tabs: {
		backgroundColor: "#303F9F"
	},
	tabsActive: {
		borderBottomWidth: 5
	}
});
