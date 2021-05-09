import { FETCH_USER_FALURE, FETCH_USER_REQ, FETCH_USER_SUCCESS } from "./userTypes"

const initState = {
    loading: false,
    users: [],
    error: ""
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_USER_REQ:
            return {
                ...state,
                loading: true
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USER_FALURE:
            return {
                ...state,
                loading: false,
                users: [],
                error: action.payload
            }

        default:
            return state
    }
}

export default reducer