import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Image, Dimensions, SafeAreaView, ScrollView } from 'react-native'
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
        <ScrollView showsVerticalScrollIndicator={false}>
            <SafeAreaView style={styles.container}>
                <Image source={require('../../assets/images/login/pluto-bad-gateway.png')} style={styles.image} />
                <InputView/>
                <LoginButton 
                    text="Login"
                    onClick={loginEvent}
                    reverse={false}
                    style={{marginBottom: 15}}/>
                <LoginButton 
                    text="Create new account" 
                    onClick={registerEvent}
                    reverse={true}
                    style={{marginBottom: 20}}/>
            </SafeAreaView>
        </ScrollView>
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
        marginTop: 15,
        marginBottom: 20,
        resizeMode: 'contain',
        width: Dimensions.get('window').width * 0.8,
        height: Dimensions.get('window').width * 0.6,
    },
    popUp: {
        alignItems: 'center', 
        justifyContent: 'center'
    }
});

export default LoginView
