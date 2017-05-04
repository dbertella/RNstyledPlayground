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
import styled from 'styled-components/native';
import { Row } from './Row';
import Container from './Container';

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
const ContainerWithBorder = styled(Container)`
  borderBottomWidth: 1
`;

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
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text>{rowData.name}</Text>
      <Text>{rowData.date}</Text>
    </View>
    
    <Text>{rowData.body}</Text>
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

  /*render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={Line}
      />
    );
  }*/
  render() {
    return (
      <ContainerWithBorder>
        <Text>This is my container</Text>
      </ContainerWithBorder>
    );
  }
}

AppRegistry.registerComponent('RNstyledComponent', () => RNstyledComponent);
