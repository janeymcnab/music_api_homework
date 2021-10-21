const SongDetails = ({song, loaded}) => {
    
    if(!loaded){
        return(
            <p>Loading...</p>
        )
    }
    console.log(song.feed.entry[0]["im:name"]["label"]);
    return (
        <>
        <h3>{song.feed.entry[0]["im:name"]["label"]}</h3>
        </>
    );
}
export default SongDetails;