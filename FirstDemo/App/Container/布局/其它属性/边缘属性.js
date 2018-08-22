import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class A extends React.Component {

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={styles.container}>
                    <View style={[{top: 10}, styles.box1]}/>
                    <View style={[{left: 10, top: 30,}, styles.box2]}/>
                    <View style={[styles.box3]}/>
                </View>
                <View style={styles.container}>
                    <View style={[{position: 'absolute', top: 10}, styles.box1]}/>
                    <View style={[{position: 'absolute', left: 10, top: 30,}, styles.box2]}/>
                    <View style={[styles.box3]}/>
                </View>
                <View style={styles.container}>
                    <View style={[{position: 'absolute', top: 10}, styles.box1]}/>
                    <View style={[{position: 'absolute', marginLeft: 10, marginTop: 30,}, styles.box2]}/>
                    <View style={[styles.box3]}/>
                </View>
                <View style={styles.container}>
                    <View style={[{position: 'absolute', top: 10}, styles.box1]}/>
                    <View style={[{position: 'absolute', right: 10, top: 30,}, styles.box2]}/>
                    <View style={[styles.box3]}/>
                </View>
                <View style={styles.container}>
                    <View style={[{position: 'absolute', top: 10}, styles.box1]}/>
                    <View style={[{position: 'absolute', marginRight: 10, marginTop: 30,}, styles.box2]}/>
                    <View style={[styles.box3]}/>
                </View>

            </View>
        );
    }
}

const styles = {
    container: {
        height: 100,
        backgroundColor: '#CCCCCC',
        marginBottom: 10,
    },
    box1: {
        width: 30,
        height: 30,
        backgroundColor: '#FF0000'
    },
    box2: {
        width: 30,
        height: 30,
        backgroundColor: '#00FF00'
    },
    box3: {
        width: 30,
        height: 30,
        backgroundColor: '#0000FF'
    }
};