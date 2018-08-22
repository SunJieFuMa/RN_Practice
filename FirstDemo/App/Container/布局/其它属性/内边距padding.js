import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class A extends React.Component {
    render() {
        return <View>
            <Text style={
                [{
                    padding: 10,
                },
                    style.common,
                    style.red]
            }>1</Text>

            <View style={[{height: 1}, style.black]}/>
            <Text style={
                [{
                    paddingHorizontal: 10,
                    paddingVertical: 20,
                },
                    style.common,
                    style.yellow
                ]}>2</Text>

            <View style={[{height: 1}, style.black]}/>
            <Text style={
                [{
                    paddingTop: 5,
                    paddingRight: 10,
                    paddingBottom: 15,
                    paddingLeft: 20,
                },
                    style.common,
                    style.blue
                ]}>3</Text>

            <View style={[{height: 1}, style.black]}/>
            <Text style={[style.common, style.green]}>4</Text>


        </View>
    }
}

const style = StyleSheet.create({
    common: {
        fontSize: 48,
        height: 100,
        width: 100,
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