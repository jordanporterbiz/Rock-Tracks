import reducers from './reducers/index'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'



export const store = createStore (
    reducers, 
    {},
    applyMiddleware(thunk)
)

