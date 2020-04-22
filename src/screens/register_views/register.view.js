import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import LoginButton from '../../components/login_button'
import InputView from './register.input.view'
import HaveAccountView from './have_account.view'
import auth from '@react-native-firebase/auth';
import RegisterHook from '../../hooks/register.hook'
import {     
    invalidEmail,
    otherErrors,
    emailInUse,
    weakPassword,
    passwordNotMatch,
    emptyString,
} from '../../consts/messages'

const RegisterView = ({ navigation }) => {

    const {useRegisterState, changeEmail, changePassword, changeConfirmPassword} = RegisterHook();
    const {email, password, confirm_password} = useRegisterState();

    const goLogin = () => {
        navigation.navigate('Login');
    }
      
    const createdAccount = () => {
        if(email === "" || password === ""){
            emptyString();
        } 
        else if(confirm_password !== password){
            passwordNotMatch();
        } 
        else{

            auth().createUserWithEmailAndPassword(email, password)
                .then(() => {
                    console.log('User account created & signed in!');
                    navigation.navigate('Login', {showPopUp: "CREATED"})
                })
                .catch(function(error) {
                    switch(error.code) {
                        case 'auth/email-already-in-use' : emailInUse(); break;
                        case 'auth/invalid-email' : invalidEmail(); break;
                        case 'auth/weak-password' : weakPassword(); break;
                        default : otherErrors();
                    }
                    console.error(error);
                });
        }
    }

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/login/translate.png')} style={styles.image} resizeMode='contain'/>
            <InputView />
            <LoginButton 
                text="Create new account" 
                onClick={() => createdAccount()}
                reverse={true} 
                style={{margin: 0}}/>
            <HaveAccountView onClick={goLogin}/>
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
        alignItems: 'center', 
        justifyContent: 'center'
    }
});

export default RegisterView
