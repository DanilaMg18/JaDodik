import { useSelector } from "react-redux"

const userDefaultState = {
    regularUsers: [{
        id: 1,
        name: 'Danila',
        lastname: 'GGG'
    },{
        id: 2,
        name: 'Alexandr',
        lastname: 'Gudkov'
    },{
        id: 3,
        name: 'Pusha',
        lastname: 'T'
    }],

    selectedUser:{}
}

let ADD_USER = 'ADD_USER'
let ADD_MANYUSERS = 'ADD_MANYUSERS'
let REMOVE_USER = 'REMOVE_USER'
let EDIT_USER = 'EDIT_USER'


export const userReducer = (state = userDefaultState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {...state, regularUsers: [...state.regularUsers, action.payload]}

        case EDIT_USER:
            return {...state, selectedUser: action.payload}
        
        case ADD_MANYUSERS:
            return {...state, regularUsers: action.payload}
        
        case 'REMOVE_USER':
            return {...state, regularUsers: state.regularUsers.filter(user => {
                return user.id !== action.payload
            })}
    
        default: return state
    }
}

export const addManyUsers = (payload) => {
    return {type: ADD_MANYUSERS, payload}
}

export const addNewUser = (payload) => {
    return {type: ADD_USER, payload}
}

export const deleteUser = (payload) => {
    return {type: REMOVE_USER, payload}
}