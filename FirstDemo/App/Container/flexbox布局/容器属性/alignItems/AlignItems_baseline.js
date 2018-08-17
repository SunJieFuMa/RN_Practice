import React from 'react';
import {
    View,
    Text,
} from 'react-native';

export default class A extends React.Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'baseline',
            }}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}/>
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}/>
                <Text style={{fontSize: 38,backgroundColor:'red',paddingLeft:20}}>Text</Text>
                <Text style={{fontSize: 48,backgroundColor:'red'}}>Text</Text>
                <Text style={{fontSize: 58,backgroundColor:'red'}}>Text</Text>
                <Text style={{fontSize: 18,backgroundColor:'red'}}>Text</Text>
                <Text style={{fontSize: 8,backgroundColor:'red'}}>Text</Text>
            </View>
        );
    }
};
