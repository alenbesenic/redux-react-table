import { GET_NUMBER_OF_ALL_USERS, NUMBER_OF_ALL_USERS_ERROR } from '../../reducers/users.reducers/types'
import axios from 'axios'

export const getNumberOfAllUsers = () => async dispatch => {
    try{
        const response = await axios.get(`https://randomuser.me/api/?results=1000&seed=abc`)
        dispatch({
            type: GET_NUMBER_OF_ALL_USERS,
            payload: response.data.results.length
        })
    }
    catch(error){
        dispatch({
            type: NUMBER_OF_ALL_USERS_ERROR,
            payload: error
        })
    }
}
