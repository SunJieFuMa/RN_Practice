import React from 'react'
import {View,Text} from 'react-native'

export default class A extends React.Component {
    render() {
        return (
            <View style={{
                flex: 1,
            }}>
                <Text style={{flexShrink:0,width: 150, height: 200, fontSize: 48, backgroundColor: 'powderblue'}}>Text</Text>
                <Text style={{flexShrink:2,width: 100, height: 200, fontSize: 48, backgroundColor: 'skyblue'}}>Text</Text>
                <Text style={{flexShrink:3,width: 150, height: 200, fontSize: 48, backgroundColor: 'steelblue'}}>Text</Text>
                <Text style={{flexShrink:4,width: 150, height: 200, fontSize: 48, backgroundColor: 'red'}}>Text</Text>
                <Text style={{width: 100, height: 200, fontSize: 48, backgroundColor: 'yellow'}}>Text</Text>
            </View>
        );
    }

}