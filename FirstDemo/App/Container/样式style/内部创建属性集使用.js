import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default class A extends React.Component {
    render() {
        return (
            <View style={{
                flex: 1,
            }}>
                <Text style={style.common}>Text</Text>
                <Text style={[style.common, {backgroundColor: 'yellow'}]}>Text</Text>
                <Text style={[style.common, style.red, {marginLeft: 100}]}>Text</Text>
            </View>
        );
    }
};

let style = StyleSheet.create({
    common: {
        width: 100,
        height: 100,
        fontSize: 48,
        backgroundColor: 'green',
    },
    yellow: {
        backgroundColor: 'yellow',
    },
    red: {
        backgroundColor: 'red',
    },
    pink: {
        backgroundColor: 'pink',
    }
});