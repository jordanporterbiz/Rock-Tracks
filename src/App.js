import './styles/App.css';
import TrackList from './pages/Tracks/TrackList';
import TrackDetails from './pages/TrackDetails'
import { Route, Switch } from 'react-router-dom'


function App() {

  return (
    <div className="App">
     
     <h1>Rock Tracks</h1>
     <Switch>
      <Route exact path="/">
        <TrackList/>
      </Route>

      <Route exact path="/track-details">
        <TrackDetails/>
      </Route>
    </Switch>
    </div>
  );
}

export default App;
