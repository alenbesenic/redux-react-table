import { GET_USER_DETAILS, USER_DETAILS_ERROR } from '../../reducers/user.reducers/types'
import axios from 'axios'

export const getUser = (pageNumber, pageSize, firstname, lastname, ) => async dispatch => {
    try{
        const response = await axios.get(`https://randomuser.me/api/?page=${pageNumber}&results=${pageSize}&seed=abc`)
        dispatch({
            type: GET_USER_DETAILS,
            payload: response.data.results.filter((user) => user.name.first === firstname && user.name.last === lastname)
        })
    }
    catch(error){
        dispatch({
            type: USER_DETAILS_ERROR,
            payload: error
        })
    }
}