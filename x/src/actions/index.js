// this file just exists as shortener for imports outside of `actions` folder

// Action creator
export const selectSong = (song) => {
    // Return an action;
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};

