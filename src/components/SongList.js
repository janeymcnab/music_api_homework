import '../styles/SongList.css'
import SongDetails from "./SongDetails";

const SongList = ({songs, loaded, selectedSongEntry}) => {

    if(!loaded){
        return(
            <p>Loading...</p>
        )
    }

    const fullList = songs.feed.entry
    const newList = fullList.map((song) => <li key={song["im:name"]["label"]}><a href={song.link[0].attributes.href} target="_blank">{song["im:name"]["label"]}</a> by {song["im:artist"]["label"]} </li>);

    return(
        <>
        <div className="list">
        <h3>Top 20</h3>
        <li>{newList}</li>
        </div>
        </>
    )

}



export default SongList;