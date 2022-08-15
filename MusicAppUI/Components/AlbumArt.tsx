import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
 StyleSheet,
 Image,
 View,
 Button
} from 'react-native';

function AlbumArtSlider(){
    return(
        <View style = {styles.container} >
            <Image 
                style = {styles.albumArt}
                source = {require('../Images/sample.jpg')} />
            <Icon
                name = "cards-heart-outline"
                size={50}
                style = {{color: 'red'}}
            ></Icon>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 4,
        flexDirection: 'column',
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center'

    },
    albumArt:{
        height : 250,
        width : 250,
        borderRadius : 50
    },
    // likeButton:
});

export default AlbumArtSlider;