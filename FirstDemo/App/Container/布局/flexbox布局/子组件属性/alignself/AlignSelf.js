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
                flexWrap: 'wrap',
            }}>
                <Text style={{alignSelf:'flex-start',width: 150, height: 100, fontSize: 48, backgroundColor: 'powderblue'}}>Text</Text>
                <Text style={{alignSelf:'flex-end',width: 100, height: 100, fontSize: 48, backgroundColor: 'skyblue'}}>Text</Text>
                <Text style={{alignSelf:'center',width: 150, height: 100, fontSize: 48, backgroundColor: 'steelblue'}}>Text</Text>
                <Text style={{alignSelf:'baseline',width: 100, height: 100, fontSize: 48, backgroundColor: 'yellow'}}>Text</Text>
                <Text style={{alignSelf:'stretch', height: 100, fontSize: 48, backgroundColor: 'pink'}}>Text</Text>
                <Text style={{width: 100, height: 100, fontSize: 48, backgroundColor: 'red'}}>Text</Text>
            </View>
        );
    }
};
