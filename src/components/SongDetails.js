import '../styles/SongDetails.css'
const SongDetails = ({songs, loaded, selectedSongEntry}) => {
    
    if(!loaded){
        return(
            <p>Loading...</p>
        )
    }
    
    return (
        <>
        <div className="container">
            <div>
            <h1 className="position">Number: {selectedSongEntry +1}</h1>
            <h3 className="name">{songs.feed.entry[selectedSongEntry]["im:name"]["label"]}</h3>
            <img className="album-art" src={songs.feed.entry[selectedSongEntry]["im:image"][2]["label"]}/>
            <h3 className="artist">{songs.feed.entry[selectedSongEntry]["im:artist"]["label"]}</h3>
            <audio controls className="controls"> <source src={songs.feed.entry[selectedSongEntry].link[1].attributes.href} type="audio/mpeg"/></audio>
            </div> 
        </div>     
        </>

    );
}
export default SongDetails;

