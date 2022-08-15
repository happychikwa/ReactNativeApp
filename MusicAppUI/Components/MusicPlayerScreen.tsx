import React from "react";
import { Modal } from "react-native";
import MusicAppHeader from "./AppHeader";
import AlbumArtSlider from "./AlbumArt";
import SongTitle from "./SongTitle";
import MusicController from "./MusicController";
import LyricsSlide from "./LyricsSlide";


 function musicPlayerModal( props : any){
    return(
        <Modal
            animationType='slide'
            visible={props.visibility}
        >
            <MusicAppHeader toggleModalVisibility = {props.toggleModalVisibility} />
            <AlbumArtSlider/>
            <SongTitle/>
            <MusicController/>
            <LyricsSlide/>
        </Modal>
    );
 }

 export default musicPlayerModal;