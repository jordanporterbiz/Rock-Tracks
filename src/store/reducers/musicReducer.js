import {
    FETCH_TRACKLIST_REQUEST,
    FETCH_TRACK_DETAILS_REQUEST, 
    SET_TRACKLIST
} from '../action-creators/musicTypes'

const initialState = {
    loading: true,
    tracks: [],
    track: [],
    error: ''
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case FETCH_TRACKLIST_REQUEST: 
            return {
                ...state,
                loading: true
            }
        case FETCH_TRACK_DETAILS_REQUEST:
            const tracks = state.tracks;
            const id = action.payload
            const filterTrack = (tracks) => {
                return tracks.trackId.toString() === id
            }
            const filteredTrack = tracks.filter((filterTrack));
            return {
                ...state,
                track: filteredTrack
            }

            case SET_TRACKLIST: 
            return {
                ...state,
                tracks: action.payload,
                loading: false
            }
        default: 
            return state;
    }
}

export default reducer; 
