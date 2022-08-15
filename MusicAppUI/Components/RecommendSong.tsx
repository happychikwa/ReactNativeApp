import React, {useState} from 'react';
import {ScrollView, Text, View, Image, StyleSheet} from 'react-native';

function recommendedSong(){
    
    return (
        <View style = {styles.container} >
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} >
                <View style = {styles.songBalloon}>
                    <Image source={require('../Images/baloon1.jpg')} style = {styles.imageArt} />
                    <View>
                        <Text>ARTIST NAME</Text>
                        <Text>ARTIST SONG</Text>
                    </View>
                </View>
                <View style = {styles.songBalloon}>
                    <Image source={require('../Images/baloon3.jpg')} style = {styles.imageArt} />
                    <View>
                        <Text>ARTIST NAME</Text>
                        <Text>ARTIST SONG</Text>
                    </View>
                </View>
                <View style = {styles.songBalloon}>
                    <Image source={require('../Images/baloon4.jpg')} style = {styles.imageArt} />
                    <View>
                        <Text>ARTIST NAME</Text>
                        <Text>ARTIST SONG</Text>
                    </View>
                </View>
                <View style = {styles.songBalloon}>
                    <Image source={require('../Images/baloon5.jpg')} style = {styles.imageArt} />
                    <View>
                        <Text>ARTIST NAME</Text>
                        <Text>ARTIST SONG</Text>
                    </View>
                </View>
                <View style = {styles.songBalloon}>
                    <Image source={require('../Images/baloon6.jpg')} style = {styles.imageArt} />
                    <View>
                        <Text>ARTIST NAME</Text>
                        <Text>ARTIST SONG</Text>
                    </View>
                </View>
             </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        // flex:2,
        flexDirection: 'row'
    },
    songBalloon:{
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin:20
    },
    imageArt:{
        height:40,
        width: 40,
        borderRadius: 50,
        margin: 10
    }
});

export default recommendedSong;