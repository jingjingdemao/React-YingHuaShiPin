/**
 * 朱继王超
 * 2019-12-09
 * 首页-热门
 */

import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, FlatList, TouchableHighlight } from 'react-native'

class Hot extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hotList: [],
            topItem: [],
            testItem: [1, 2, 3]
        }
    }

    componentDidMount() {
        this._getHotList();
    }


    _getHotList() {
        const url = 'https://app.bilibili.com/x/v2/show/popular/index?build=5470400&mobi_app=android&idx=0';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data.code === 0) {
                    this.setState((state) => {
                        return {
                            hotList: state.hotList.concat(data.data),
                            topItem: data.config.top_items
                        }
                    })
                }
            })
    }

    //列表元素按下事件
    _onPress(item) {
        console.log(item);
    }

    //渲染top图标
    _renderTopItem = () => {
        return this.state.topItem.map((item, index) => {
            if (index === 0 || index === 5 || index === 6) {
                return (
                    <View style={styles.topItem} key={index}>
                        <Image
                            style={{ width: 40, height: 40 }}
                            source={{ uri: item.icon }}
                        />
                        <Text style={styles.title}>{item.title}</Text>
                    </View>
                )
            }
        })
    }

    //推荐理由样式
    _setRcmdReasonStyle = (item) => {
        if (item.rcmd_reason_style && item.rcmd_reason_style.bg_style === 1 ||
            item.top_rcmd_reason_style && item.top_rcmd_reason_style.bg_style === 1
        ) {
            return styles.rcmdReasonTextA
        } else if (item.rcmd_reason_style && item.rcmd_reason_style.bg_style === 2 ||
            item.top_rcmd_reason_style && item.top_rcmd_reason_style.bg_style === 2
        ) {
            return styles.rcmdReasonTextB
        }
        return;
    }

    //渲染横向滚动元素
    _renderthreeItem = ({ item }) => {
        return (
            <TouchableHighlight>
                <View
                    style={styles.threeItem}>
                    <View style={styles.threeItemCoverBox}>
                        <Image style={{ width: '100%', height: '100%', borderRadius: 2 }} source={{ uri: 'http://i1.hdslb.com/bfs/archive/4a634498278c15bdc6076cc244629829a2cd0b69.jpg' }} />
                    </View>
                    {/* <Text>{item.title}</Text> */}
                    <Text numberOfLines={2} ellipsizeMode={'tail'}>"吃超漂亮的澳洲白螃蟹！一斤四百但蟹黄会打消你的购买欲！</Text>
                </View>
            </TouchableHighlight>
        )
    }

     //热门列表渲染每个item
    _renderHotListItem = (item) => {
        return <TouchableHighlight
            underlayColor="#f3f3f3"
            onPress={() => this._onPress(item)}
        >
            <View style={styles.hotItem}>
                <View style={styles.hotItemLeft}>
                    <Image style={styles.itemImage}
                        source={{ uri: item.cover }} />
                    <Text style={styles.time}>{item.cover_right_text_1}</Text>
                </View>
                <View style={styles.hotItemRight}>
                    <Text numberOfLines={2} ellipsizeMode={'tail'} style={styles.itemTitle}>{item.title}</Text>
                    <View>
                        <View style={styles.recmView}>
                            <Text style={this._setRcmdReasonStyle(item)}>{item.rcmd_reason_style && item.rcmd_reason_style.text}</Text>
                        </View>
                        <Text style={styles.desc}>{item.right_desc_1}</Text>
                        <Text style={styles.desc}>{item.right_desc_2}</Text>
                    </View>
                </View>
            </View>
        </TouchableHighlight>
    }

    //热门列表渲染
    _renderHotList = () => {
        return ({ item, index, separators }) => {
            if (index === 0) {
                return (
                    <View>
                        <View style={styles.topItemList}>
                            {this._renderTopItem()}
                        </View>
                        {this._renderHotListItem(item)}
                    </View>

                )
            } else if (item.card_type === "three_item_all_v2") {
                return <View style={styles.hotItemRcmd}>
                    <View style={styles.rcmdTop}>
                        <View style={styles.rcmdTopLeft}>
                            <Image style={styles.upCover} source={{ uri: item.cover }} />
                            <View style={styles.upInfoBox}>
                                <Text style={styles.upName}>{item.title}</Text>
                                <View style={styles.recmView}>
                                    <Text style={this._setRcmdReasonStyle(item)}>{item.top_rcmd_reason_style && item.top_rcmd_reason_style.text}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.rcmdTopRight}>
                            <Text style={styles.concern}>＋ 关注</Text>
                        </View>
                    </View>
                    <View style={styles.rcmdBody}>
                        <FlatList
                            // data={item.item}
                            data={this.state.testItem}
                            keyExtractor={(item, index) => index}
                            renderItem={this._renderthreeItem}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>
            } else {
                return this._renderHotListItem(item);
            }
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>

                    <FlatList
                        onRefresh={() => { }}
                        refreshing={false}
                        data={this.state.hotList}
                        renderItem={this._renderHotList()}
                        keyExtractor={(item, index) => item.param + index}
                    />
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    topItemList: {
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    topItem: {
        alignItems: 'center'
    },
    title: {
        marginTop: 4,
        fontSize: 12,
        color: '#444'
    },
    hotItem: {
        height: 120,
        borderBottomColor: '#f4f4f4',
        borderBottomWidth: 0.5,
        padding: 10,
        flexDirection: 'row'
    },
    hotItemLeft: {
        width: '45%',
        height: '100%',
        position: 'relative'
    },
    itemImage: {
        width: '100%',
        height: '100%',
        borderRadius: 5
    },
    time: {
        position: 'absolute',
        bottom: 8,
        right: 5,
        fontSize: 12,
        padding: 4,
        paddingTop: 2,
        paddingBottom: 2,
        backgroundColor: 'rgba(0,0,0,0.4)',
        borderRadius: 2,
        color: '#fff'
    },
    hotItemRight: {
        width: '55%',
        height: '100%',
        paddingLeft: 8,
        justifyContent: 'space-between'
    },
    itemTitle: {
        fontSize: 14,
        color: '#000',
        width: '100%',
        overflow: 'hidden',
    },
    desc: {
        fontSize: 12,
        color: '#c4c4c4',
        marginTop: 5,
    },
    recmView: {
        position: 'relative',
        height: 20
    },
    rcmdReasonTextA: {
        paddingLeft: 2,
        paddingRight: 2,
        borderWidth: 1,
        borderRadius: 2,
        fontSize: 10,
        bottom: 0,
        left: 0,
        position: 'absolute',
        backgroundColor: '#f5992a',
        borderColor: '#f5992a',
        color: '#fff'
    },
    rcmdReasonTextB: {
        paddingLeft: 2,
        paddingRight: 2,
        borderWidth: 1,
        borderRadius: 2,
        fontSize: 10,
        bottom: 0,
        left: 0,
        position: 'absolute',
        borderColor: '#fdd849',
        color: '#fdd849'
    },
    hotItemRcmd: {
        height: 200,
        borderBottomColor: '#f4f4f4',
        borderBottomWidth: 0.5,
        padding: 10
    },
    rcmdTop: {
        height: '28%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    rcmdTopLeft: {
        flexDirection: 'row',
    },
    upCover: {
        height: 40,
        width: 40,
        borderRadius: 50,
        marginRight: 5
    },
    upInfoBox: {
        position: 'relative',
        width: '60%'
    },
    upName: {
        fontSize: 14,
        fontWeight: '700',
        color: '#000'
    },
    rcmdTopRight: {
        height: '50%',
        width: '20%',
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#fb7b9e',
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    concern: {
        fontSize: 12,
        color: '#fb7b9e'
    },
    rcmdBody: {
        height: '75%',
    },
    threeItem: {
        width: 150,
        height: '100%',
        marginRight: 10
    },
    threeItemCoverBox: {
        width: '100%',
        height: '70%',
    },
    threeItemContentBox: {

    }
})

export default Hot;