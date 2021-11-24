import {
    FETCH_TRACK_DETAILS_REQUEST,
    SET_TRACKLIST
} from '../../store/action-creators/musicTypes'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styles/TrackStyles.module.css'
const axios = require('axios');

export default function TrackList() {

        const tracks = useSelector(state => state.music.tracks)
        const track = useSelector(state => state.music.track)

        useEffect(() => {
            fetchData();

        })

    const dispatch = useDispatch();


    const fetchData = async () => {
        // This endpoint produces an opaque response as
        // no 'Allow-Control-Allow-Access' headers are present
        // const url = 'https://itunes.apple.com/search?term=rock&media=music';
        // To get around this, data has been pulled into a local data.json file. 
        try {
                const response = await axios.get('/data/data.json').then(function (response) {
                // handle success
                dispatch({
                    type: SET_TRACKLIST,
                    payload: response.data.results,
                })
                

              })
              .catch(function (error) {
                // handle error
                // future development - dispatch failure action
                console.log(error);
              })
              .then(function () {
                // always executed
              });
          } catch (error) {
            console.error(error);
          }
  }
    

    const selectTrack = (e) => {
        dispatch({type: FETCH_TRACK_DETAILS_REQUEST, payload: e.target.value })
        console.log(track)
    }

    return (
        <div>
              {/* Check if tracks array is not empty. If it is, render message   */}
              {/* If tracks array isn't empty, map through tracks and render data */}

            <div className={styles.tracklistContainer}>
                  { tracks.length === 0 ? <h3>No tracks to display.</h3> : (

                    tracks.map(track => (
                        <div className={styles.trackCard} key={track.trackId}>
                            <ul className={styles.track}>
                                <li><h4>Track name: </h4> <p>{track.trackName} </p></li>
                                <li><h4>Artist: </h4> <p>{track.artistName}</p></li>
                                <li><h4>Price: </h4> <p> {track.trackPrice}</p></li>
                                <li><h4>Artwork URL: </h4> <p><a href={track.artworkUrl100} target='_blank' rel='noreferrer'>{track.artworkUrl100}</a></p></li>
                            </ul>
                            <Link to='/track-details'>
                            <button className={styles.trackDetailsBtn} onClick={selectTrack} value={track.trackId}>Track Details</button>
                            </Link>
                        </div>
                        ))
                    )}           
            </div>

        </div>
    )
}
