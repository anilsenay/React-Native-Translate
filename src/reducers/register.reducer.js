const registerInitialState = {
    email: "",
    password: "",
    confirm_password: "",
}

const registerReducer = (state, action) => {
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
        case 'SET_CONFIRM_PASSWORD':
            return {
                ...state,
                confirm_password: action.payload,
            };
        default:
            return state;
    }
}

export {registerInitialState, registerReducer};