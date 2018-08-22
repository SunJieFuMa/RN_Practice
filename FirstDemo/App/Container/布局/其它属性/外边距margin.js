import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class A extends React.Component {
    render() {
        return <View>
            <View style={
                [{
                    margin: 10,
                },
                    style.common,
                    style.red]
            }/>

            <View style={[{height:1},style.black]}/>
            <View style={
                [{
                    marginHorizontal: 10,
                    marginVertical: 20,
                },
                    style.common,
                    style.yellow
                ]}/>

            <View style={[{height:1},style.black]}/>
            <View style={
                [{
                    marginTop: 5,
                    marginRight: 10,
                    marginBottom: 15,
                    marginLeft: 20,
                },
                    style.common,
                    style.blue
                ]}/>

            <View style={[{height:1},style.black]}/>
            <View style={[style.common, style.green]}/>
        </View>
    }
}

const style = StyleSheet.create({
    common: {
        fontSize: 48,
        height: 100,
        width: 100,
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
    black: {
        backgroundColor: 'black'
    },
});