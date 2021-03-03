import { GET_NUMBER_OF_ALL_USERS, NUMBER_OF_ALL_USERS_ERROR } from './types'

const initialState = {
    numberOfAllUsers: 0,
    numberOfAllUsersLoading: true
}

const allUsersReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_NUMBER_OF_ALL_USERS:
            return{
                ...state,
                numberOfAllUsers: action.payload,
                numberOfAllUsersLoading: false,
            }
        case NUMBER_OF_ALL_USERS_ERROR:
            return{
                numberOfAllUsersLoading: false,
                numberOfAllUsersError: action.payload
            }
        default:
            return state
    }
}

export default allUsersReducer;