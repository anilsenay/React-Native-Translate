import React from 'react'
import {RegisterProvider} from '../contexts/register.context';
import RegisterView from './register_views/register.view'

const Register = ({ navigation }) => {

    return (
        <RegisterProvider>
            <RegisterView navigation={navigation}/>
        </RegisterProvider>
    )
}

export default Register
