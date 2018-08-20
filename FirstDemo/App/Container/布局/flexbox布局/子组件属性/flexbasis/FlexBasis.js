import React from 'react'
import {View,Text} from 'react-native'

export default class A extends React.Component {
    render() {
        return (
            <View style={{
                flex: 1,
            }}>
                <Text style={{ width: 150, height: 200,flexBasis:"auto", fontSize: 48, backgroundColor: 'powderblue'}}>Text</Text>
                <Text style={{ width: 150, height: 200,flexBasis:100, fontSize: 48, backgroundColor: 'skyblue'}}>Text</Text>
                <Text style={{ width: 150, height: 200, fontSize: 48, backgroundColor: 'steelblue'}}>Text</Text>
            </View>
        );
    }

}