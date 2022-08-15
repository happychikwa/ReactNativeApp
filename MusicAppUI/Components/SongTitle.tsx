import {View, Text} from 'react-native';
import { StyleSheet } from 'react-native';
import React from 'react';

function songTitle(){
    return(
        <View style = {styles.container} >
            <Text style = {styles.textSize}>Song Title</Text>
            <Text style = {styles.textSize} >Artist Name</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textSize:{
        fontSize: 20,
    }
});

export default songTitle;