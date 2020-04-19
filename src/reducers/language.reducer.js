import React from 'react';

const languagesInitialState = {
    input_value = "tr",
    output_value = "en",
}

const languageReducer = (state, action) => {
    console.log('state, action', state, action);
    switch(action.type) {
        case 'SET_INPUT':
            return {
                ...state,
                input_value: action.payload.input,
            };
        case 'SET_OUTPUT':
            return {
                ...state,
                output_value: action.payload.output,
            };
        default:
            return state;
    }
}

export {languagesInitialState, languageReducer};