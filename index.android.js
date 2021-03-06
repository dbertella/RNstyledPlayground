/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  ListView,
  View
} from 'react-native';

import { Row } from './Row';

const data = [{
    name: 'Test 1',
    date: '19th of January',
    body: 'Test Test Test Test Test'
  }, {
    name: 'Test 2',
    date: '19th of January',
    body: 'Test Test Test Test Test'
  }, {
    name: 'Test 3',
    date: '19th of January',
    body: 'Test Test Test Test Test'
  }, {
    name: 'Test 4',
    date: '19th of January',
    body: 'Test Test Test Test Test'
  }, {
    name: 'Test 5',
    date: '19th of January',
    body: 'Test Test Test Test Test'
  },
]

const Line = (rowData) => (
  <View style={{ borderBottomWidth: 1 }}>
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text>{rowData.name}</Text>
      <Text>{rowData.date}</Text>
    </View>
    <Row>
      <Text>{rowData.name}</Text>
      <Text>{rowData.date}</Text>
    </Row>
  </View>
)

export default class RNstyledComponent extends Component {
   constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(data),
    };
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={Line}
      />
    );
  }
}

AppRegistry.registerComponent('RNstyledComponent', () => RNstyledComponent);
