// import {
//     FETCH_TRACKLIST_REQUEST,
//     FETCH_TRACK_DETAILS_REQUEST,
//     SET_TRACKLIST,
    // FETCH_TRACKS_SUCCESS,
    // FETCH_TRACKS_FAILURE,
    // FETCH_TRACK_DETAILS_SUCCESS,
    // FETCH_TRACK_DETAILS_FAILURE
// } from '../action-creators/musicTypes'

// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//     loading: false,
//     tracklist: [],
//     track: {},
//     trackId: '',
//     error: ''
// }

// export const musicSlice = createSlice({
//     name: 'music',
//     initialState: initialState,
//     reducers: {
        // trackDetails(state) {
        // //    const singleTrack = state.tracklist.filter(track => state.tracklist.trackId === id)
        //   // console.log(singleTrack)
        // },
        // fetchTracklist() {

        // },
//     }
// })


// export const musicActions = musicSlice.actions;

// export const fetchTracklist = (tracklistUrl) => {
//     return async (dispatch) => {
//         dispatch({
//             type: FETCH_TRACKLIST_REQUEST,
//             payload: tracklistUrl,
//         });

//         const sendRequest = async () => {
//             const response = await fetch(tracklistUrl,
//                 {
//                     method: 'GET',
//                 });

//                 if(!response.ok){
//                     throw new Error('Retrieving music data failed.')
//                 }
//                 let tracks = response.results.json()
//                 //dispatch(fetchTracklistSuccess(tracks))
//         }

//         try {
//             await sendRequest();
//         } catch(error) {
//             console.log(error)
//             //dispatch(fetchTracklistFailure(error))
//         }
     
//     };
// };

// export const fetchTrackDetails = (track) => {
//     return async (dispatch) => {
//         dispatch({
//             type: FETCH_TRACK_DETAILS_REQUEST,
//             payload: track
//         });

//         const sendRequest = async () => {
//             const response = await fetch('',
//                 {
//                     method: 'GET',
//                 });
//                 if(!response.ok){
//                     throw new Error('Retrieving track details data failed.')
//                 }
//         }

//         try {
//             await sendRequest();
//         } catch (error) {
//             console.log(error)
//         }      
//     };
// };

// // Fetch Tracklist success action
// export const fetchTracklistSuccess = tracks => {
//     return {
//         type: FETCH_TRACKS_SUCCESS,
//         payload: tracks
//     };
// };

// // Fetch Tracklist failure action
// export const fetchTracklistFailure = error => {
//     return {
//         type: FETCH_TRACKS_FAILURE,
//         payload: error
//     };
// };

// // Fetch Track details success action
// export const fetchTrackDetailsSuccess = track => {
//     return {
//         type: FETCH_TRACK_DETAILS_SUCCESS,
//         payload: track
//     };
// };

// // Fetch Track details success action

// export const fetchTrackDetailsFailure = error => {
//     return {
//         type: FETCH_TRACK_DETAILS_FAILURE,
//         payload: error
//     };
// };