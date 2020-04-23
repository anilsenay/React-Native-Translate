import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import LoginButton from '../../components/login_button'
import InputView from './input.view'
import LoginHook from '../../hooks/login.hook'
import auth from '@react-native-firebase/auth';
import {     
    emptyString,
    wrongPassword,
    invalidEmail,
    userNotFound,
    otherErrors,
    accountCreated,
    logout,
} from '../../consts/messages'
import Colors from '../../consts/colors'

const LoginView = ({ route, navigation }) => {

    const {useLoginState} = LoginHook();
    const {email, password} = useLoginState();
    
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }
    
    useEffect(() => {
        if(route.params?.showPopUp === "CREATED"){
            accountCreated();
        }
        if(route.params?.showPopUp === "LOGOUT"){
            logout();
        }
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
        return subscriber; // unsubscribe on unmount
    }, [route.params]);
    
    if (initializing) return null;

    if (user) {
        navigation.navigate('Search', {showPopUp: route.params?.showPopUp})
    }

    const loginEvent = () => {
        if(email === "" || password === ""){
            emptyString();
        } else {
        auth().signInWithEmailAndPassword(email, password).then(() => navigation.navigate('Search',{showPopUp: "LOGIN"}))
            .catch(function(error) {
                console.log(error.code)
                // Handle Errors here.
                switch(error.code) {
                    case 'auth/wrong-password' : wrongPassword(); break;
                    case 'auth/invalid-email' : invalidEmail(); break;
                    case 'auth/user-not-found' : userNotFound(); break;
                    default : otherErrors();
                }
            });
        }
    }
    const registerEvent = () => {
        navigation.navigate('Register')
    }

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/login/translate.png')} style={styles.image} resizeMode='contain'/>
            <InputView/>
            <LoginButton 
                text="Login"
                onClick={loginEvent}
                reverse={false}
                style={{marginBottom: 10}}/>
            <LoginButton 
                text="Create new account" 
                onClick={registerEvent}
                reverse={true}
                style={{marginBottom: 20}}/>
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
        borderColor: Colors.buttonPurple,
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

export default LoginView
