import { combineReducers } from 'redux';

import Login from './Login';
import EmployeeReducer from './Employees';

export default combineReducers({
    Login,
    EmployeeReducer,
});
