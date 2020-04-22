import { useContext } from 'react';

import {RegisterContext, RegisterContextDispatch} from '../contexts/register.context';

const RegisterHook = () => {
    
    const {registerState } = useContext(RegisterContext);
    const {registerDispatch } = useContext(RegisterContextDispatch);

    const useRegisterState = () => {
        return registerState;
    }

    const changeEmail = (value) => {
        registerDispatch({
            type: 'SET_EMAIL',
            payload: value,
        })
    };
    const changePassword = (value) => {
        registerDispatch({
            type: 'SET_PASSWORD',
            payload: value,
        })
    };
    const changeConfirmPassword = (value) => {
        registerDispatch({
            type: 'SET_CONFIRM_PASSWORD',
            payload: value,
        })
    };

    return {
        useRegisterState,
        changeEmail,
        changePassword,
        changeConfirmPassword,
    };
}

export default RegisterHook;