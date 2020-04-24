import React, { useReducer } from 'react';

import PropTypes from 'prop-types';

import {registerReducer, registerInitialState} from '../reducers/register.reducer';

const RegisterContext = React.createContext();
const RegisterContextDispatch = React.createContext();

const RegisterProvider = ({children}) => {
    const [registerState, registerDispatch] = useReducer(
        registerReducer,
        registerInitialState,
    );

    return (
        <RegisterContext.Provider
            value={{
                registerState,
            }}
        >
            <RegisterContextDispatch.Provider
                value={{
                    registerDispatch,
                }}    >
                {children}    
            </RegisterContextDispatch.Provider>
        </RegisterContext.Provider>
    )
}

RegisterProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export {RegisterProvider, RegisterContext, RegisterContextDispatch}