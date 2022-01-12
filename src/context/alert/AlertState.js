// actions
// i.e. when we search users and it makes a request to github
// cleaning up app.js
// using types

import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import {
    SET_ALERT, REMOVE_ALERT
} from '../types';

// using axios for requests
// useReducer is a hook

// creating initial state
const AlertState = props => {
    const initialState = null;

    // use reducer hook
    const [state, dispatch] = useReducer (AlertReducer, initialState);

    // set alert
    const setAlert = (msg, type) => {
        dispatch({
            type: SET_ALERT,
            payload: { msg, type }
        });

        setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000)
    }
    
    return (
    <AlertContext.Provider
    value ={{
        alert: state,
        setAlert
    }}>
        {props.children}
    </AlertContext.Provider>
    )
}

export default AlertState;