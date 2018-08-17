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
                // flexDirection: 'column',
                flexWrap: 'wrap',
            }}>
                <Text style={{width: 100, height: 100, fontSize: 88, backgroundColor: 'powderblue'}}>Text</Text>
                <Text style={{width: 100, height: 100, fontSize: 48, backgroundColor: 'skyblue'}}>Text</Text>
                <Text style={{width: 100, height: 100, fontSize: 58, backgroundColor: 'steelblue'}}>Text</Text>
                <Text style={{width: 100, height: 100, fontSize: 78, backgroundColor: 'yellow'}}>Text</Text>
                <Text style={{width: 100, height: 100, fontSize: 68, backgroundColor: 'pink'}}>Text</Text>
                <Text style={{width: 100, height: 100, fontSize: 98, backgroundColor: 'red'}}>Text</Text>
                <Text style={{width: 100, height: 100, fontSize: 98, backgroundColor: 'red'}}>Text</Text>
                <Text style={{width: 100, height: 100, fontSize: 98, backgroundColor: 'red'}}>Text</Text>
            </View>
        );
    }
};
