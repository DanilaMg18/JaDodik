import {createStore} from 'redux'
import { userReducer } from './userReducer'

const rootReducer = {
    users: userReducer
}

export const store = createStore(rootReducer)
