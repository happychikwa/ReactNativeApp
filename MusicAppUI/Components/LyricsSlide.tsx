import React from 'react';
import {StyleSheet,FlatList, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function lyricsSlide(){
    return(
            <View style = {styles.container} >
                <Icon name = 'musical-notes-outline' size = {30} style = {{color: 'black', marginTop: 20}} />
                <Text style = {{fontSize:30, marginTop: 20, marginLeft: 10, color: 'black'}} >Lyrics</Text>
                <Icon name='md-chevron-up-circle-outline' size= {30} style = {{marginTop: 20}} />
            </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'row',
        backgroundColor: "grey",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    }
    
});
export default lyricsSlide;