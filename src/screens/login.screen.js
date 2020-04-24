import React from 'react'
import LoginView from './login_views/login.view'
import {LoginProvider} from '../contexts/login.context';

const Login = ({ route, navigation }) => {

    return (
        <LoginProvider>
            <LoginView route={route} navigation={navigation}/>
        </LoginProvider>
    )
}

export default Login
