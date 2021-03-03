import { combineReducers } from 'redux'
import paginatedUsersReducer from './users.reducers/paginatedUsersReducer'
import numberOfAllUsersReducer from './users.reducers/numberOfAllUsersReducer'
import userReducer from './user.reducers/userReducer'

export default combineReducers({
    paginatedUsersList: paginatedUsersReducer,
    userDetails: userReducer,
    numberOfAllUsers: numberOfAllUsersReducer,
})