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
                flexWrap: 'wrap',
            }}>
                <Text style={[{display: 'none'}, style.common, style.powderblue]}>1</Text>
                <Text style={{display: 'flex'}, [style.common, style.steelblue]}>2</Text>
                <Text style={[{opacity:0}, style.common, style.yellow]}>3</Text>
                <Text style={[style.common, style.pink, {width: 0},]}>4</Text>
                <Text style={[{visibility: 'gone'}, style.common, style.red]}>5</Text>
                <Text style={[{hide: true}, style.common, style.yellow]}>6</Text>
            </View>
        );
    }
};

const style = StyleSheet.create({
    common: {
        width: 150,
        height: 100,
        fontSize: 48,
        textAlign: 'center',
    },
    powderblue: {
        backgroundColor: 'powderblue'
    },
    skyblue: {
        backgroundColor: 'skyblue'
    },
    steelblue: {
        backgroundColor: 'steelblue'
    },
    yellow: {
        backgroundColor: 'yellow'
    },
    pink: {
        backgroundColor: 'pink'
    },
    red: {
        backgroundColor: 'red'
    },
});