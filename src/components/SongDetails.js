import '../styles/SongDetails.css'
import ReactAudioPlayer from 'react-audio-player';

const SongDetails = ({songs, loaded, selectedSongEntry}) => {
    
    if(!loaded){
        return(
            <p>Loading...</p>
        )
    }
    
    return (
        <>
            <div>
            <h1 className="position">Number: {selectedSongEntry +1}</h1>
            <h3 className="name">{songs.feed.entry[selectedSongEntry]["im:name"]["label"]}</h3>
            <img className="album-art" src={songs.feed.entry[selectedSongEntry]["im:image"][2]["label"]}/>
            <h3 className="artist">{songs.feed.entry[selectedSongEntry]["im:artist"]["label"]}</h3>
            <ReactAudioPlayer src={songs.feed.entry[selectedSongEntry].link[1].attributes.href} controls/>
            </div>   
        </>

    );
}
export default SongDetails;

