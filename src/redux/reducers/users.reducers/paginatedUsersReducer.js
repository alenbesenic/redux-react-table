import { GET_PAGINATED_USERS, PAGINATED_USERS_ERROR } from './types'

const initialState = {
    paginatedUsers: [],
    paginatedUsersLoading: true
}

const paginatedUsersReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_PAGINATED_USERS:
            return{
                ...state,
                paginatedUsers: action.payload.map((user) => ({
                            firstName: user.name.first,
                            lastName: user.name.last,
                            country: user.location.country,
                            dateOfBirth: user.dob.date,
                            age: user.dob.age,
                            picture: user.picture.thumbnail,
                        })),
                paginatedUsersLoading: false,
            }
        case PAGINATED_USERS_ERROR:
            return{
                paginatedUsersLoading: false,
                paginatedUsersError: action.payload
            }
        default:
            return state
    }
}

export default paginatedUsersReducer;