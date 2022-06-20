import { GET_EMPLOYEE, ADD_EMPLOYEE, DELETE_EMPLOYEE, EDIT_EMPLOYEE } from '../../Redux.constants';

import employees from '../../../Data/employees.json';
import { createEmployee, deleteEmployee, getEmployees, updateEmployee } from './helper';

const initialState = {
    employeeList: { employees: employees, loading: false, error: false },
    addEmployee: { loading: false, error: false },
    editEmployee: { loading: false, error: false },
    deleteEmployee: { loading: false, error: false },
};

function EmployeeReducer(state = initialState, action) {
    switch (action.type) {
        case GET_EMPLOYEE:
            return getEmployees(state);
        case ADD_EMPLOYEE:
            return createEmployee(state, action.payload);
        case EDIT_EMPLOYEE:
            return updateEmployee(state, action.payload);
        case DELETE_EMPLOYEE:
            return deleteEmployee(state, action.payload);
        default:
            return state;
    }
}

export default EmployeeReducer;
