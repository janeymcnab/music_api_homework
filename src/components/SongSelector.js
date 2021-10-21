const SongSelector = ({onSelectedSongIncrement, onSelectedSongDecrement}) => {
    return(
        <>
        <button onClick={onSelectedSongDecrement}>Previous Song</button>
        <button onClick={onSelectedSongIncrement}>Next Song</button>
        </>
    );
}

export default SongSelector;