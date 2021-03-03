import { GET_PAGINATED_USERS, PAGINATED_USERS_ERROR } from '../../reducers/users.reducers/types'
import axios from 'axios'

export const getPaginatedUsers = (pageNumber, pageSize) => async dispatch => {
    try{
        const response = await axios.get(`https://randomuser.me/api/?page=${pageNumber}&results=${pageSize}&seed=abc`)
        dispatch({
            type: GET_PAGINATED_USERS,
            payload: response.data.results
        })
    }
    catch(error){
        dispatch({
            type: PAGINATED_USERS_ERROR,
            payload: error
        })
    }
}
