import React from 'react'
import {
    View,
    Text,
} from 'react-native'

export default class A extends React.Component {
    render() {
        return (
            <View>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
                <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
            </View>
        );
    }

}