import { GET_EMPLOYEE } from '../../Redux.constants';

export function getEmployee() {
    return (dispatch) => {
        return dispatch({
            type: GET_EMPLOYEE,
        });
    };
}
