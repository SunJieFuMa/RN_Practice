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
            }}>
                <Text style={{width: 100, height: 100, fontSize: 48, backgroundColor: 'yellow'}}>Text</Text>
                <Text style={{height: 100, fontSize: 48, backgroundColor: 'pink'}}>Text</Text>
                <Text style={{width: 100, height: 100, fontSize: 48, backgroundColor: 'red'}}>Text</Text>
            </View>
        );
    }
};
