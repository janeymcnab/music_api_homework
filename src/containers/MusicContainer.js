import {useState, useEffect} from 'react';
import SongDetails from '../components/SongDetails';
import SongSelector from '../components/SongSelector';

const MusicContainer = () => {

    const [song, setSong] = useState({});
    const [selectedSongEntry, setSelectedSongEntry] = useState(1);
    const [loaded, setLoaded] = useState(false);

    const getSong = () => {
        console.log('getting song information');
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
        .then(response => response.json())
        .then(data => setSong(data))
        .then(()=>setLoaded(true))
        
    }

    useEffect(()=>{
        getSong();
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
        <h1>Music Container</h1>
        <SongSelector
        onSelectedSongIncrement = {() => upSelectedSong()}
        onSelectedSongDecrement = {() => downSelectedSong()}
        />
        <SongDetails
        song = {song}
        loaded = {loaded}
        />
        </>
    );
}

export default MusicContainer;