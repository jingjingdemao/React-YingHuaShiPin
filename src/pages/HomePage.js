import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'

import { Container, Tab, Tabs, ScrollableTab } from 'native-base';

import Live from './home_sub_pages/Live';
import Recommended from './home_sub_pages/Recommended';
import Hot from './home_sub_pages/Hot';
import Bangumi from './home_sub_pages/Bangumi';
import Movie from './home_sub_pages/Movie';
import SeventyYears from './home_sub_pages/SeventyYears';

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      locked: false
    }
  }
  render() {
    return (
      <Container>
        {/* <Header hasTabs /> */}
        
        <Tabs locked={this.state.locked}
          initialPage={1}
          tabBarUnderlineStyle={{ backgroundColor: '#fb7b9e', marginLeft: '4.2%', height: 2, width: 20 }}
          renderTabBar={() => <ScrollableTab tabsContainerStyle={styles.tabsContainerStyle} style={{ height: 35, width: '100%' }}
          />}>
          <Tab heading="直播"
            textStyle={styles.textStyle}
            tabStyle={styles.tabStyle}
            activeTextStyle={styles.activeTextStyle}
            activeTabStyle={styles.activeTabStyle}
          >
            <Live></Live>
          </Tab>
          <Tab heading="推荐"
            textStyle={styles.textStyle}
            tabStyle={styles.tabStyle}
            activeTextStyle={styles.activeTextStyle}
            activeTabStyle={styles.activeTabStyle}
          >
            <Recommended></Recommended>
          </Tab>
          <Tab heading="热门"
            textStyle={styles.textStyle}
            tabStyle={styles.tabStyle}
            activeTextStyle={styles.activeTextStyle}
            activeTabStyle={styles.activeTabStyle}
          >
            <Hot></Hot>
          </Tab>
          <Tab heading="追番"
            textStyle={styles.textStyle}
            tabStyle={styles.tabStyle}
            activeTextStyle={styles.activeTextStyle}
            activeTabStyle={styles.activeTabStyle}
          >
            <Bangumi></Bangumi>
          </Tab>
          <Tab heading="影视"
            textStyle={styles.textStyle}
            tabStyle={styles.tabStyle}
            activeTextStyle={styles.activeTextStyle}
            activeTabStyle={styles.activeTabStyle}
          >
            <Movie></Movie>
          </Tab>
          <Tab heading="70年"
            textStyle={styles.textStyle}
            tabStyle={styles.tabStyle}
            activeTextStyle={styles.activeTextStyle}
            activeTabStyle={styles.activeTabStyle}
          >
            <SeventyYears></SeventyYears>
          </Tab>
        </Tabs>
      </Container>
    )
  }
}
const styles = StyleSheet.create({
  tabStyle: {
    // width: 84,
    margin: 0,
    padding: 0,
    backgroundColor: '#fff',
    alignItems: 'center',

  },
  activeTabStyle: {
    // width: 84,
    backgroundColor: '#fff'
  },
  textStyle: {
    textAlign: 'center',
    color: '#444'
  },
  activeTextStyle: {
    textAlign: 'center',
    color: '#fb7b9e',
    fontWeight: 'bold'
  },
  tabsContainerStyle: {
    // width: 400,
    backgroundColor: '#fff'
  }
})

export default HomePage;