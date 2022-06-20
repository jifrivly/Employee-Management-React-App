import { GET_EMPLOYEE, ADD_EMPLOYEE, DELETE_EMPLOYEE, EDIT_EMPLOYEE } from '../../Redux.constants';

export function getEmployee() {
    return (dispatch) => {
        return dispatch({
            type: GET_EMPLOYEE,
        });
    };
}

export function addEmployee(data) {
    return (dispatch) => {
        return dispatch({
            type: ADD_EMPLOYEE,
            payload: data,
        });
    };
}

export function editEmployee(data) {
    return (dispatch) => {
        return dispatch({
            type: EDIT_EMPLOYEE,
            payload: data,
        });
    };
}

export function deleteEmployee(employeeId) {
    return (dispatch) => {
        return dispatch({
            type: DELETE_EMPLOYEE,
            payload: employeeId,
        });
    };
}
