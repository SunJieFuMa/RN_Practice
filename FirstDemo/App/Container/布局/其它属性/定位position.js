import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class A extends React.Component {

    render() {
        return (
            <View style={{flex: 1}}>
                <Text>FlexBox布局</Text>
                <View style={styles.container}>
                    <View style={styles.box1}/>
                    <View style={[styles.box2]}/>
                    <View style={[styles.box3]}/>
                </View>
                <Text>position=relative,top:20</Text>
                <View style={styles.container}>
                    <View style={styles.box1}/>
                    <View style={[styles.box2, {position: 'relative', left: 10,right: 10,bottom:10}]}/>
                    <View style={styles.box3}/>
                </View>
                <Text>position=absolute,top:20</Text>
                <View style={{padding:10,backgroundColor:'black'}}>
                    <View style={styles.container}>
                        <View style={styles.box1}/>
                        <View style={[styles.box2, {position: 'absolute',left: 10,right: 10}]}/>
                        <View style={styles.box3}/>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = {
    container: {
        height: 180,
        backgroundColor: '#CCCCCC',
        marginBottom: 10,
    },
    box1: {
        width: 50,
        height: 50,
        backgroundColor: '#FF0000'
    },
    box2: {
        width: 50,
        height: 50,
        backgroundColor: '#00FF00'
    },
    box3: {
        width: 50,
        height: 50,
        backgroundColor: '#0000FF'
    }
};