import {createStore, combineReducers} from 'redux'
import { userReducer } from './userReducer'
import thunk from "redux-thunk"
import {composeWithDevTools} from 'redux-devtools-extension'
import { applyMiddleware } from "redux"

const rootReducer = combineReducers({
    users: userReducer
})

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))
