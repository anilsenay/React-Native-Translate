import React from 'react';

const languagesInitialState = {
    input_value: "tr",
    output_value: "en",
}

const languageReducer = (state, action) => {
    switch(action.type) {
        case 'SET_INPUT':
            return {
                ...state,
                input_value: action.payload,
            };
        case 'SET_OUTPUT':
            return {
                ...state,
                output_value: action.payload,
            };
        default:
            return state;
    }
}

export {languagesInitialState, languageReducer};