import React, { useState } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import LoginButton from '../../components/login_button'
import InputView from './register.input.view'
import HaveAccountView from './have_account.view'
import auth from '@react-native-firebase/auth';
import RegisterHook from '../../hooks/register.hook'
import FlashMessage, {showMessage, hideMessage} from "react-native-flash-message";

const RegisterView = ({ navigation }) => {

    const {useRegisterState, changeEmail, changePassword, changeConfirmPassword} = RegisterHook();
    const {email, password, confirm_password} = useRegisterState();

    const goLogin = () => {
        navigation.navigate('Login');
    }

    const confirmCreate = () => {
        if(password === confirm_password){
            createdAccount();
            console.log("creadted")
        }
        else {
            console.log("show")
            hideMessage();
            showMessage({
                message: "Passwords do not match!",
                type: "success",
              });
        }

    }
    
    const createdAccount = () => {
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                console.log('User account created & signed in!');
                navigation.navigate('Search', {showPopUp: "CREATED"})
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
                }

                console.error(error);
            });

    }

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/login/translate.png')} style={styles.image} resizeMode='contain'/>
            <InputView />
            <LoginButton 
                text="Create new account" 
                onClick={confirmCreate}
                reverse={true} 
                style={{margin: 0}}/>
            <HaveAccountView onClick={goLogin}/>
            <FlashMessage position="bottom" style={styles.popUp} titleStyle={{fontSize: 16}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      height: '100%',
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    input: {
        width: 250,
        height: 44,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#A56FF8',
        marginBottom: 10,
    },
    image:{
        flex:1,
    },
    popUp: {
        width: '100%',
        height: 40,
        alignItems: 'center', 
        justifyContent: 'center'
    }
});

export default RegisterView
