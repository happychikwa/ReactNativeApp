import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Progress from 'react-native-progress';

function musicController(){
    return(
    <View style = {styles.controllerContainer}>
        <Progress.Bar width={300} color = {'#9570FF'} style = {{margin:10}} />
        <View style = {styles.container}>
        <Text style = {styles.timer} >Timer 1</Text>
            <Icon
                name ='skip-previous'
                size = {30}
                color = 'black'
                style = {styles.playButton}
            >
            </Icon>
            <Icon
                name = 'play'
                size={50}
                color = 'black'
                style = {styles.playButton}
            >
            </Icon>
            <Icon
                name='skip-next'
                size={30}
                color = 'black'
                style = {styles.playButton}
            >   
            </Icon>
            <Text style = {styles.timer} >Timer 2</Text>
        </View>
       </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 3,
        flexDirection: 'row',
    },
    playButton:{
        padding:10
    },
    timer:{
        padding:20,
        color: 'black'
    },
    controllerContainer:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default musicController;