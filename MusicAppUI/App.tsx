/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState, type PropsWithChildren} from 'react';
import {
  Modal,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import DockedMusicPlayer from './Components/DockedMusicController'
import CuratedPlaylist from './Components/MusicWidget'
import RecommendedSong from './Components/RecommendSong';
import MusicPlayerModal from './Components/MusicPlayerScreen';

const App = () => {
  const [modalState, setModalState] = useState(false);
  function setModalVisibility(){
    console.log("clicked");
    setModalState(true);
  }
  function unsetModalVisibility(){
    setModalState(false);
  }
  return (
        <View style = {styles.appContainer}>
          <RecommendedSong/>
          <View style = {styles.curatedPlaylist} >
            <ScrollView>
              <CuratedPlaylist/>
              <CuratedPlaylist/>
              <CuratedPlaylist/>
              <CuratedPlaylist/>
              <CuratedPlaylist/>
            </ScrollView>
          </View>
            <DockedMusicPlayer  toggleModalVisibility = {setModalVisibility}/>
            <MusicPlayerModal visibility = {modalState} toggleModalVisibility = {unsetModalVisibility} />
        </View>
  );
};

const styles = StyleSheet.create({
  appContainer:{
    flex: 1,
    alignItems: 'center'
  },
  curatedPlaylist:{
    flex:5
  }
});

export default App;
