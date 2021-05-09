import { FETCH_USER_FALURE, FETCH_USER_REQ, FETCH_USER_SUCCESS } from "./userTypes"
import axios from 'axios'


export const fetchUserData = () => {
    return {
        type: FETCH_USER_REQ
    }
}

export const fetchUserSuccess = users => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}

export const fetchUserFailure = error => {
    return {
        type: FETCH_USER_FALURE,
        payload: error
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUserData)
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users = response.data
                dispatch(fetchUserSuccess(users))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchUserFailure(errorMsg))
            })
    }
}