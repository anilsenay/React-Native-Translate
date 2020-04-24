import React, { useReducer } from 'react';

import PropTypes from 'prop-types';

import {loginReducer, loginInitialState} from '../reducers/login.reducer';

const LoginContext = React.createContext();
const LoginContextDispatch = React.createContext();

const LoginProvider = ({children}) => {
    const [loginState, loginDispatch] = useReducer(
        loginReducer,
        loginInitialState,
    );

    return (
        <LoginContext.Provider
            value={{
                loginState,
            }}
        >
            <LoginContextDispatch.Provider
                value={{
                    loginDispatch,
                }}    >
                {children}    
            </LoginContextDispatch.Provider>
        </LoginContext.Provider>
    )
}

LoginProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export {LoginProvider, LoginContext, LoginContextDispatch}