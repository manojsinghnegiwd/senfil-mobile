import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	ListView,
	TextInput,
	ToolbarAndroid
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

	addToList = () => {
		const {newItem} = this.state;
		this.setState((prevState) => ({
			clipBoardList: prevState.clipBoardList.cloneWithRows([{
				text: newItem
			}])
		}))
	}

  render () {
		console.log(this.state.clipBoardList);
		const {clipBoardList, newItem} = this.state;
    return (
      <View style={styles.container}>
				<ToolbarAndroid style={globalStyle.toolbar} title="AwesomeApp" />
				<ListView
					dataSource={this.state.clipBoardList}
					renderRow={(rowData) => <ClipBoardItem data={rowData} />}/>
				<TextInput value={newItem} onChangeText={(newItem) => this.setState({newItem})}/>
        <Button onPress={this.addToList} style={globalStyle.button} isRipple rippleColor="#81D4FA">
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
    justifyContent: 'flex-end'
  }
});
