import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import LoginButton from '../components/login_button'
import { TextInput } from 'react-native-gesture-handler'
import InputView from '../screens/login_views/input.view'
import FlashMessage, {showMessage, hideMessage} from "react-native-flash-message";
import auth from '@react-native-firebase/auth';
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
