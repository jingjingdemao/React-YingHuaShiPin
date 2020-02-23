import React, { Component } from 'react';
// import { View, Text } from 'react-native'
import { View, StyleSheet, ScrollView, PanResponder, Text } from "react-native";


class Dynamic extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
         <View></View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    pan_container: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'blue'
    },
    scroll_view: {
        backgroundColor: 'teal',
        maxHeight: 350
    }
});

export default Dynamic;