const loginInitialState = {
    email: "",
    password: "",
}

const loginReducer = (state, action) => {
    console.log('state, action', state, action);
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
        default:
            return state;
    }
}

export {loginInitialState, loginReducer};