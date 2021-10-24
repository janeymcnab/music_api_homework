// import styles from '../styles/AudioPlayer.css'


// const AudioPlayer = ({songs, loaded, selectedSongEntry, isPlaying, togglePlayPause}) => {

//     if(!loaded){
//         return(
//             <p>Loading...</p>
//         )
//     }


//     return (
//         <>
//         <div className={styles.audioPlayer}>
//         <audio src={songs.feed.entry[selectedSongEntry].link[1].attributes.href}/>
//         <button onClick={togglePlayPause}>
//             {isPlaying ? <p>Pause</p> : <p>Play</p>}
//         </button>
//          <div><input type="range"/></div>
//          </div>
//         </>
//     )
// }



// export default AudioPlayer;