import React from 'react'
import {View} from 'react-native'

export default class A extends React.Component {
    render() {
        return (
            <View >
                <View style={{flex: 1, backgroundColor: 'powderblue'}}/>
                <View style={{flex: 2, backgroundColor: 'skyblue'}}/>
                <View style={{flex: 3, backgroundColor: 'steelblue'}}/>
            </View>
        );
    }

}