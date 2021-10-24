import {useState, useEffect} from 'react';
import SongDetails from '../components/SongDetails';
import SongSelector from '../components/SongSelector';
import SongList from '../components/SongList';
// import AudioPlayer from '../components/AudioPlayer';

const MusicContainer = () => {

    const [songs, setSongs] = useState({});
    const [selectedSongEntry, setSelectedSongEntry] = useState(0);
    const [loaded, setLoaded] = useState(false);
    // const [isPlaying, setIsPlaying] = useState(false);

    // const togglePlayPause = () => {
    //     setIsPlaying(! isPlaying);
    // }


    const getSongs = () => {
        console.log('getting song information');
        fetch(`https://itunes.apple.com/gb/rss/topsongs/limit=20/json`)
        .then(response => response.json())
        .then(data => setSongs(data))
        .then(()=>setLoaded(true))
        
    }

    useEffect(()=>{
        getSongs();
    },[selectedSongEntry])

    const upSelectedSong = () => {
        const nextSongEntry = selectedSongEntry +1
        if (nextSongEntry <= 20){
            setSelectedSongEntry(nextSongEntry);
        } 
    }

    const downSelectedSong = () => {
        const nextSongEntry = selectedSongEntry - 1
        if (nextSongEntry >= 0){
            setSelectedSongEntry(nextSongEntry);
        } 
    }

    return(
        <>
        <SongDetails
        songs = {songs}
        loaded = {loaded}
        selectedSongEntry = {selectedSongEntry}
        />
        <SongSelector
        onSelectedSongIncrement = {() => upSelectedSong()}
        onSelectedSongDecrement = {() => downSelectedSong()}
        />
        {/* <AudioPlayer
        songs = {songs}
        loaded = {loaded}
        selectedSongEntry = {selectedSongEntry}
        // togglePlayPause = {() => togglePlayPause()}
        // isPLaying = {isPlaying}
        /> */}
         <SongList
         songs = {songs}
         loaded = {loaded}
         selectedSongEntry = {selectedSongEntry}/>
        </>
    );
}

export default MusicContainer;