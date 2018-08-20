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
                flexWrap:'wrap',
                alignContent:'space-between'
            }}>
                <Text style={{width: 150, height: 100, fontSize: 48, backgroundColor: 'powderblue'}}>Text</Text>
                <Text style={{width: 100, height: 100, fontSize: 48, backgroundColor: 'skyblue'}}>Text</Text>
                <Text style={{width: 150, height: 100, fontSize: 48, backgroundColor: 'steelblue'}}>Text</Text>
                <Text style={{width: 100, height: 100, fontSize: 48, backgroundColor: 'yellow'}}>Text</Text>
                <Text style={{width: 120, height: 100, fontSize: 48, backgroundColor: 'pink'}}>Text</Text>
                <Text style={{width: 100, height: 100, fontSize: 48, backgroundColor: 'red'}}>Text</Text>
                <Text style={{width: 200, height: 100, fontSize: 48, backgroundColor: 'lawngreen'}}>Text</Text>
                <Text style={{width: 200, height: 100, fontSize: 48, backgroundColor: 'beige'}}>Text</Text>
                <Text style={{width: 300, height: 100, fontSize: 48, backgroundColor: 'gold'}}>Text</Text>
                <Text style={{width: 100, height: 100, fontSize: 48, backgroundColor: 'darkorange'}}>Text</Text>
            </View>
        );
    }
};
