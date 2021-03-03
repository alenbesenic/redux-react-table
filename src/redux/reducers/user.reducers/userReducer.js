import { GET_USER_DETAILS, USER_DETAILS_ERROR, CLEAR_USER_DETAILS } from './types'
import { format } from 'date-fns'

const initialState = {
    user: {},
    userLoading: true
}

const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_USER_DETAILS:
            return{
                ...state,
                user: action.payload.map((user) => ({
                            title: user.name.title,
                            firstName: user.name.first,
                            lastName: user.name.last,
                            country: user.location.country,
                            streetName: user.location.street.name,
                            streetNumber: user.location.street.number,
                            city: user.location.city,
                            email: user.email,
                            dateOfBirth: format(new Date(user.dob.date), 'dd/MM/yyyy'),
                            age: user.dob.age,
                            picture: user.picture.large,
                            gender: user.gender,
                            phoneNumber: user.phone,
                            cellphone: user.cell,
                            nationality: user.nat
                        })),
                userLoading: false
            }
        case CLEAR_USER_DETAILS:
            return{
                user: initialState.user,
                userLoading: true
            }
        case USER_DETAILS_ERROR:
            return{
                userLoading: false,
                userError: action.payload
            }
        default:
            return state
    }
}

export default usersReducer;