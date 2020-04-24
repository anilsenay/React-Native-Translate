const loginInitialState = {
    email: "",
    password: "",
}

const loginReducer = (state, action) => {
    switch(action.type) {
        case 'SET_EMAIL':
            return {
                ...state,
                email: action.payload,
            };
        case 'SET_PASSWORD':
            return {
                ...state,
                password: action.payload,
            };
        case 'SET_RESET':
            return {
                email: "",
                password: "",
            };
        default:
            return state;
    }
}

export {loginInitialState, loginReducer};