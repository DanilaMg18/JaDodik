import { addManyUsers } from "../store/userReducer";

export const fetchUsers = () => {
    return function(dispatch) {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => dispatch(addManyUsers(json)))
    }
}