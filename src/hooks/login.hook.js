import { useContext } from 'react';

import {LoginContext, LoginContextDispatch} from '../contexts/login.context';

const LoginHook = () => {
    
    const {loginState } = useContext(LoginContext);
    const {loginDispatch } = useContext(LoginContextDispatch);

    const useLoginState = () => {
        return loginState;
    }

    const changeEmail = (value) => {
        loginDispatch({
            type: 'SET_EMAIL',
            payload: value,
        })
    };
    const changePassword = (value) => {
        loginDispatch({
            type: 'SET_PASSWORD',
            payload: value,
        })
    };
    const resetLogin = (value) => {
        loginDispatch({
            type: 'SET_RESET',
            payload: value,
        })
    };

    return {
        useLoginState,
        changeEmail,
        changePassword,
        resetLogin,
    };
}

export default LoginHook;