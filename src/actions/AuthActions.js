import firebase from 'firebase';
import { NavigationActions  } from 'react-navigation';

import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED, 
    LOGIN_USER_SUCCESS, 
    LOGIN_USER_FAILED,
    LOGIN_USER_ATTEMPT } from './types';

export const emailChanaged = (email) => {
    return {
        type: EMAIL_CHANGED,
        payload: email

    }
}

export const passwordChanged = (password) => {
    return {
        type: PASSWORD_CHANGED,
        payload: password
    }
}

export const loginUser = ({email, password}) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER_ATTEMPT});

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch( () => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then( user => loginUserSuccess(dispatch, user))
                .catch( () => loginUserFailed(dispatch));
        })
    };
}

const loginUserSuccess = (dispatch, user) => {

    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
    
    dispatch(NavigationActions.navigate({
        routeName: 'EmployeeStack',
        params: {}
    }));
}

const loginUserFailed = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAILED
    })
}