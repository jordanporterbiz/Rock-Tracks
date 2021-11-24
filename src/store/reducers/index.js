import { combineReducers } from 'redux'
import musicReducer from './musicReducer'


// As an application grows in complexity, enforcing a separation of concerns becomes more appropriate.
// combineReducers() function helps to combine independant state objects into a single reducing function.
const reducers = combineReducers({
    music: musicReducer
})

export default reducers;