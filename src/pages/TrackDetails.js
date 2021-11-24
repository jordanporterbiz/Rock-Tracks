import { useSelector } from 'react-redux';


export default function TrackDetails() {

    const track = useSelector(state => state.music.track)

    const singleTrack = track.[0];
    console.log('TRACK')
    console.log(singleTrack)

    let millis = singleTrack.trackTimeMillis
    let duration = millisToMinutesAndSeconds(millis)



    function millisToMinutesAndSeconds(millis) {
        let minutes = Math.floor(millis / 60000);
        let seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
      }
      

    return (
        <div>
            <h3>Track Details </h3>
            <h4>Track name:</h4> <p>{singleTrack.trackName}</p>
            <h4>Artwork URL: </h4> <p>{singleTrack.artworkUrl30}</p>
            <h4>Artist: </h4> <p>{singleTrack.artist}</p>
            <h4>Track Price: </h4> <p>{singleTrack.trackPrice}</p>
            <h4>Duration: </h4> <p>{duration}</p>
            <h4>Release Date: </h4> <p>{singleTrack.releaseDate}</p>

            <button>
                <a href={singleTrack.trackViewUrl} target='_blank' rel='noreferrer'>
                    More details
                </a>
            </button>
        </div>
    )
}
