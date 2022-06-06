import { GET_EMPLOYEE } from '../../Redux.constants';

import employees from '../../../Data/employees.json';

const initialState = {
    loading: false,
    error: false,
    employees: employees,
};

function EmployeeReducer(state = initialState, action) {
    switch (action.type) {
        case GET_EMPLOYEE:
            return { ...state };
        default:
            return state;
    }
}

export default EmployeeReducer;
