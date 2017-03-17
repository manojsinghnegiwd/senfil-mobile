import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	ListView
} from 'react-native';
import {Button, ClipBoardItem} from '../components';
import globalStyle from '../styles';

export default class UploadScreen extends Component {
	constructor(props) {
		super(props);
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			clipBoardList: ds.cloneWithRows([{
				text: 'Hello'
			}])
		};
	}
  render () {
    return (
      <View style={styles.container}>
				<ListView
					dataSource={this.state.clipBoardList}
					renderRow={(rowData) => <ClipBoardItem data={rowData} />}/>
        <Button style={globalStyle.button} isRipple rippleColor="#81D4FA">
          <Text style={{color: "#ffffff"}}>Send</Text>
        </Button>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
		backgroundColor: "#ffffff",
    flex: 1,
    justifyContent: 'flex-end',
    padding: 10
  }
});
