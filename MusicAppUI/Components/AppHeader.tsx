import React from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function musicAppHeader(props:any){
    return(
        <View style = {styles.container} >
            <Icon name='keyboard-backspace' size={40} style = {styles.icon} onPress = {props.toggleModalVisibility}/>
            <Text style = {styles.pageName} >Now Playing</Text>
            <Icon name='dots-vertical' size = {40} style = {styles.icon}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    icon:{
        margin: 10,
        alignItems : 'center',
        color: 'black',    
    },
    pageName:{
        color: 'black',
        fontSize: 20,
        padding: 20,
        fontWeight: 'bold'
    }
});

export default musicAppHeader;