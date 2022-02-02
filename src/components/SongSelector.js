import '../styles/SongSelector.css'

const SongSelector = ({audio, onSelectedSongIncrement, onSelectedSongDecrement}) => {
    return(
        <>
        <div className="button-container">
        <button className="button-down"onClick={onSelectedSongDecrement}>{'<<'}  Previous</button>
        <button className="button-up"onClick={onSelectedSongIncrement}>Next  {'>>'}</button>
        </div>
        </>
    );
}

export default SongSelector;