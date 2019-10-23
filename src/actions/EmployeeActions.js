import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';
import { EMPLOYEE_UPDATE, 
    EMPLOYEE_CREATE, 
    EMPLOYEE_POPULATE,
    FETCH_EMPLOYEE_SUCCESS } from  './types';

export const employeeUpdate = ({props, value}) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: {props, value}
    };
};

export const employeeCreate = ({name, phone, shift}) => {
    const { currentUser } = firebase.auth();
    const backAction = NavigationActions.back();

    return (dispatch) => {
        
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({name, phone, shift})
            .then( () => {
                dispatch( {
                    type: EMPLOYEE_CREATE,
                });

                dispatch(backAction);
            })

        
    }
    
}

export const FetchEmployees = () => {
    const { currentUser } = firebase.auth();
    
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot => {
                dispatch({ type: FETCH_EMPLOYEE_SUCCESS, payload: snapshot.val() });
            });
    }
}

export const employeeSave = ({name, phone, shift, uid}) => {
    const { currentUser } = firebase.auth();
    const backAction = NavigationActions.back();
    
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .set({name, phone, shift})
            .then( () => {
                
                dispatch( {
                    type: EMPLOYEE_CREATE,
                });

                dispatch(backAction);
            });
    }
}

export const employeePopulate = (employee) => {
    return {
        type: EMPLOYEE_POPULATE,
        payload: employee
    }
}

export const employeeDelete = (uid) => {
    const { currentUser } = firebase.auth();
    const backToEmployeeAction = NavigationActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({routeName: 'EmployeeList'})
        ]
    });
    
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .remove()
            .then( () => {
                dispatch(backToEmployeeAction);
            });
    }
}