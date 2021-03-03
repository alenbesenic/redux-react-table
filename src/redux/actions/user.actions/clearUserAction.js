import { CLEAR_USER_DETAILS } from '../../reducers/user.reducers/types'

export const clearUser = () => dispatch => {
    dispatch({
        type: CLEAR_USER_DETAILS
    })
}