import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	ToolbarAndroid,
	ViewPagerAndroid
} from 'react-native';
import {Button, ButtonToolbar} from '../components';
import ClipBoardPage from './clipboardpage';
import globalStyle from '../styles';

export default class UploadScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			serverIp: "192.168.1.6",
			selectedPage: 0
		};
	}

	updatePage = (position) => {
		this.setState({selectedPage: position});
		this.pager.setPage(position);
	}

  render () {
		const {clipBoardList, newItem, serverIp, selectedPage} = this.state;

    return (
      <View style={styles.container}>
				<ToolbarAndroid
					style={globalStyle.toolbar}
					title={serverIp}
					titleColor="#ffffff"
					actions={[{title: 'Disconnect', show: 'always'}]}
				/>
				<ButtonToolbar rippleColor="#3949AB" activeTab={selectedPage} tabActiveStyle={styles.tabsActive} tabStyle={styles.tabs} buttonTextColor="#ffffff" buttons={[{
					text: 'Files',
					onPress: () => this.updatePage(0)
				},{
					text: 'Clip Board',
					onPress: () => this.updatePage(1)
				}]} />
				<ViewPagerAndroid
		      style={styles.viewer}
					ref={c => this.pager = c}
					onPageSelected={(e) => this.updatePage(e.nativeEvent.position)}
		      initialPage={0}>
			      <View style={styles.pageStyle}>
			        <Text>First page</Text>
			      </View>
			      <View style={styles.pageStyle}>
			        <ClipBoardPage />
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
  },
	tabs: {
		backgroundColor: "#3949AB"
	},
	tabsActive: {
		backgroundColor: "#283593"
	}
});
