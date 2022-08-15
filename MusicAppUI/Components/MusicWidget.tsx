import React  from 'react';
import {StyleSheet, Image, View, ScrollView, Text} from 'react-native';

function musicWidget(){
    return(
    <View>
    <Text>PlayList Name</Text>
    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} >
        <View style={styles.container} >
            <Image style={styles.imageArt} source={require("../Images/251a4b61a534d2a46493be7b59171202.jpg")} />
            <Image style={styles.imageArt} source={require("../Images/43fdcd46a9dc0e83c07f1c338a4aa61f.jpg")} />
            <Image style={styles.imageArt} source={require("../Images/87f2cb07ae12ba446a46d48d557d50bb.jpg")} />
            <Image style={styles.imageArt} source={require("../Images/466da0ea506e0b867c6a065b077a4334.jpg")} />
            <Image style={styles.imageArt} source={require("../Images/d00c7240ccfcc3be5b2f161aeb3c61b6.jpg")} />
        </View>
    </ScrollView>
    </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row'  
    },
    imageArt:{
        height: 140,
        width: 140,
        borderRadius: 30,
        margin: 5
    }
});

export default musicWidget;

