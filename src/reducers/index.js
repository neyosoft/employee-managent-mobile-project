import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeReducer from './EmployeesReducer';

const reducers = (navReducer) => {
    return combineReducers({
        auth: AuthReducer,
        nav: navReducer,
        employeeForm: EmployeeFormReducer,
        employees: EmployeeReducer
    });
}

export default reducers;