import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class A extends React.Component {
    render() {
        return <View>
            <View style={
                [{
                    borderTopWidth: 5,
                    borderRightWidth: 10,
                    borderBottomWidth: 15,
                    borderLeftWidth: 20,
                    borderTopColor: 'blue',
                    borderRightColor: 'green',
                    borderBottomColor: 'pink',
                    borderLeftColor: 'white',
                },
                    style.common,
                    style.red]
            }/>
            <View style={
                [{
                    borderStartWidth: 10,
                    borderEndWidth: 20,
                    borderStartColor: 'red',
                    borderEndColor: 'violet'
                },
                    style.common,
                    style.yellow
                ]}/>

            <View style={
                [{
                    borderWidth: 10, borderColor: 'pink'
                },
                    style.common,
                    style.blue
                ]}/>
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
});