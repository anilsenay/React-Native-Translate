import React, { useReducer } from 'react';

import PropTypes from 'prop-types';

import {languageReducer, languagesInitialState} from '../reducers/language.reducer';

const LanguageContext = React.createContext();
const LanguageContextDispatch = React.createContext();

const LanguageProvider = ({children}) => {
    const [languagesState, languagesDispatch] = useReducer(
        languageReducer,
        languagesInitialState,
    );

    return (
        <LanguageContext.Provider
            value={{
                languagesState,
            }}
        >
            <LanguageContextDispatch.Provider
                value={{
                    languagesDispatch,
                }}    >
                {children}    
            </LanguageContextDispatch.Provider>
        </LanguageContext.Provider>
    )
}

LanguageProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export {LanguageProvider, LanguageContext, LanguageContextDispatch}