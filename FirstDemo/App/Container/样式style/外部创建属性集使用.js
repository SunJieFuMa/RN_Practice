import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import style from './sheets/CommonStyle'

export default class A extends React.Component {
    render() {
        return (
            <View style={{
                flex: 1,
            }}>
                <Text style={{height: 100, fontSize: 48, backgroundColor: 'blue'}}>Text</Text>
                <Text style={style.common}>Text</Text>
                <Text style={[style.common, {backgroundColor: 'yellow'}]}>Text</Text>
                <Text style={[style.common, style.pink, {marginLeft: 80}]}>Text</Text>
            </View>
        );
    }
};

