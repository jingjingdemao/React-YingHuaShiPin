import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import TabNavigator from 'react-native-tab-navigator'
import { Container, Header, Title, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right, Badge } from 'native-base';



import HomePage from './src/pages/HomePage';
import Classify from './src/pages/Classify';
import Dynamic from './src/pages/Dynamic';
import MemberBuy from './src/pages/MemberBuy';



const App: () => React$Node = () => {
    const [selectedTab, onChangeSelectedTab] = React.useState("首页")


    return (
        <View style={{ flex: 1 }}>
            {/* 头部 */}
            <Header style={{ backgroundColor: "#fb7b9e", position: "relative" }}>
                <Left>
                    <TouchableHighlight>
                        <Thumbnail small source={require("./src/assets/images/bili_default_avatar.png")} />
                    </TouchableHighlight>
                </Left>

                <Body style={{ position: "absolute", left: "50%", marginLeft: -8, }}>
                    <Title style={{ fontSize: 16 }}>{selectedTab}</Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Right>
            </Header>

            <TabNavigator
                tabBarShadowStyle={{ backgroundColor: "#ccc" }}>
                {/* HomePage Tab栏 */}
                <TabNavigator.Item
                    title="首页" // 表示 tabbar 上展示的内容
                    selectedTitleStyle={{ color: "#fb7b9e" }}
                    renderIcon={() => <Icon type="FontAwesome" name="home" style={{ fontSize: 23, color: 'gray' }} />} // 未选中状态下，展示的图标
                    renderSelectedIcon={() => <Icon type="FontAwesome" name="home" style={{ fontSize: 23, color: '#fb7b9e' }} />}
                    onPress={() => onChangeSelectedTab("首页")} // 点击Tab栏的操作
                    selected={selectedTab === '首页'} // 判断当前的 tab栏是否被选中的
                >
                    <HomePage></HomePage>
                </TabNavigator.Item>
                {/* Classify Tab栏 */}
                <TabNavigator.Item
                    selected={selectedTab === '频道'} // 判断当前的 tab栏是否被选中的
                    selectedTitleStyle={{ color: "#fb7b9e" }}
                    title="频道" // 表示 tabbar 上展示的内容
                    onPress={() => onChangeSelectedTab("频道")} // 点击Tab栏的操作
                    renderIcon={() => <Icon type="FontAwesome" name="slideshare" style={{ fontSize: 20, color: 'gray' }} />} // 未选中状态下，展示的图标
                    renderSelectedIcon={() => <Icon type="FontAwesome" name="slideshare" style={{ fontSize: 20, color: '#fb7b9e' }} />}
                >
                    <Classify></Classify>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={selectedTab === '动态'} // 判断当前的 tab栏是否被选中的
                    selectedTitleStyle={{ color: "#fb7b9e" }}
                    title="动态" // 表示 tabbar 上展示的内容
                    onPress={() => onChangeSelectedTab("动态")} // 点击Tab栏的操作
                    renderIcon={() => <Icon type="FontAwesome" name="modx" style={{ fontSize: 20, color: 'gray' }} />} // 未选中状态下，展示的图标
                    renderSelectedIcon={() => <Icon type="FontAwesome" name="modx" style={{ fontSize: 20, color: '#fb7b9e' }} />}
                >
                    <Dynamic></Dynamic>
                </TabNavigator.Item>
                {/* MemberBuy Tab栏 */}
                <TabNavigator.Item
                    selected={selectedTab === '会员购'}
                    selectedTitleStyle={{ color: "#fb7b9e" }}
                    title="会员购"
                    onPress={() => onChangeSelectedTab("会员购")}
                    renderIcon={() => <Icon type="FontAwesome" name="shopping-cart" style={{ fontSize: 23, color: 'gray' }} />} // 未选中状态下，展示的图标
                    renderSelectedIcon={() => <Icon type="FontAwesome" name="shopping-cart" style={{ fontSize: 23, color: '#fb7b9e' }} />}
                >
                    <MemberBuy></MemberBuy>
                </TabNavigator.Item>
            </TabNavigator>
        </View>
    );
}




export default App;