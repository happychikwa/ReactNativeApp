import React from 'react';
import {View, Text, Image, StyleSheet, Pressable, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Progress from 'react-native-progress';

function dockedMusicController(props: any){
    function undockMusicPlayer(){
        console.log("clicked");
        props.toggleModalVisibility();
    }
    return(
    
        <View style = {styles.container}>
            <Pressable onPress={undockMusicPlayer} >
                <View style = {styles.childOne} >
                    <Image source = {require('../Images/sample.jpg')} style = {styles.miniAlbumArt}/>
                        <View style = {{flex:3, marginLeft: 10}}>
                            <Text>Artist Name</Text>
                            <Text>Artist Song</Text>                        
                        </View>
                        <Icon name = "cards-heart-outline" size = {40} style = {{flex:1, color: 'red'}}/>
                </View>
                <Progress.Bar width={300} color = {'#9570FF'} />
                <View style = {styles.controllerContainer}>
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
           </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    miniAlbumArt:{
        flex: 1,
        height: 50,
        width : 50
    },
    container:{
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    childOne:{
        flexDirection: 'row',
        padding: 5
    },
    playButton:{
        padding:10
    },
    timer:{
        padding:20
    },
    controllerContainer:{
        flexDirection: 'row',
        margin: 25,
    },
});

export default dockedMusicController;