import { useSelector } from "react-redux"
const userDefaultState = {
    regularUsers: [{
        name: 'Danila',
        lastname: 'GGG'
    }]
}

export const userReducer = (state = userDefaultState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return {...state, regularUsers: action.payload}

        default: return state
    }
}