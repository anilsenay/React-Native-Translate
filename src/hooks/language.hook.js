import React, { useContext } from 'react';

import {LanguageContext, LanguageContextDispatch} from '../contexts/language.context';

const LanguagesHook = () => {
    
    const {languagesState } = useContext(LanguageContext);
    const {languagesDispatch } = useContext(LanguageContextDispatch);

    const useLanguageState = () => {
        return languagesState;
    }

    const changeInput = (value) => {
        languagesDispatch({
            type: 'SET_INPUT',
            payload: value,
        })
    };
    const changeOutput = (value) => {
        languagesDispatch({
            type: 'SET_OUTPUT',
            payload: value,
        })
    };

    return {
        useLanguageState,
        changeInput,
        changeOutput,
    };
}

export default LanguagesHook;