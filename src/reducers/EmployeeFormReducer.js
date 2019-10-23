import {EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEE_POPULATE } from  '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: 'Monday'
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case EMPLOYEE_UPDATE: 
            return {
                ...state,
                [action.payload.props]: action.payload.value
            }
        case EMPLOYEE_CREATE:

            return INITIAL_STATE;

        case EMPLOYEE_POPULATE:
            return action.payload;
            
        default: 
            return state;
    }
}