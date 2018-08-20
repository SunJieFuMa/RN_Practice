import React from 'react';
import {View} from 'react-native';

export default class A extends React.Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'stretch', // 伸展
            }}>
                <View style={{order:10,width: 50, height: 50, backgroundColor: 'powderblue'}}/>
                <View style={{height: 50, backgroundColor: 'skyblue'}}/>
                <View style={{order:1,height: 100, backgroundColor: 'steelblue'}}/>
            </View>
        );
    }
};
