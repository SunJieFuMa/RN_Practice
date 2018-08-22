import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class A extends React.Component {
    render() {
        return <View>
            <View style={[{aspectRatio: 0.5, width: 100}, style.common, style.red]}/>
            <View style={[{aspectRatio: 2, width: 100}, style.common, style.yellow]}/>
            <View style={{height: 40}}/>
            <View style={[{aspectRatio: 0.5, height: 100, width: 100}, style.common, style.blue]}/>
            <View style={[{aspectRatio: 2, width: 100, height: 100}, style.common, style.green]}/>
        </View>
    }
}

const style = StyleSheet.create({
    common: {
        fontSize: 48,
        textAlign: 'center',
    },
    yellow: {
        backgroundColor: 'yellow'
    },
    pink: {
        backgroundColor: 'pink'
    },
    red: {
        backgroundColor: 'red'
    },
    blue: {
        backgroundColor: 'blue'
    },
    green: {
        backgroundColor: 'green'
    },
});