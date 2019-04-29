import React from 'react';
import {connect} from 'react-redux';

const SongDetail = ({song}) => {
    if(!song) return <div>Select a song</div>

    return (
        <div>
            <h3> Details for: {song.title} </h3>
            <br/>
            <p> Title: {song.duration} </p>
        {/* <div>Song Detail</div> */}
        </div>
    );
}
const mapStateToProps = (state) => {
    return {song: state.selectedSong};
}
export default connect(mapStateToProps)(SongDetail);