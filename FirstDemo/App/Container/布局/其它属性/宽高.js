import React from 'react'
import {
    View,
    Text,
} from 'react-native'

export default class A extends React.Component {
    render() {
        return (
            <View>
                <View style={{width: '10%', height: '10%', backgroundColor: 'red'}}/>
                <View style={{width: '50%', height: '50%', backgroundColor: 'yellow'}}/>
                <View style={{width: '33%', height: '33%', backgroundColor: 'black'}}>
                    <View style={{width: '50%', height: '50%', backgroundColor: 'green'}}/>
                </View>
            </View>
        );
    }

}