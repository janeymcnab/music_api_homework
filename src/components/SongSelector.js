import '../styles/SongSelector.css'

const SongSelector = ({audio, onSelectedSongIncrement, onSelectedSongDecrement}) => {
    return(
        <>
        <div className="button-container">
        <button className="button-down"onClick={onSelectedSongDecrement}>Previous Song</button>
        <button className="button-up"onClick={onSelectedSongIncrement}>Next Song</button>
        </div>
        </>
    );
}

export default SongSelector;