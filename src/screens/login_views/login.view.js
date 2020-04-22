import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import LoginButton from '../../components/login_button'
import InputView from './input.view'
import FlashMessage, {showMessage, hideMessage} from "react-native-flash-message";
import LoginHook from '../../hooks/login.hook'
import auth from '@react-native-firebase/auth';

const LoginView = ({ route, navigation }) => {

    const {useLoginState, changeEmail, changePassword} = LoginHook();
    const {email, password} = useLoginState();
    
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }
    
    useEffect(() => {
        if(route.params?.showPopUp){
            showMessage({
                message: "Account created! You can login now!",
                type: "success",
              });
        }

        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, [route.params]);
    
    if (initializing) return null;

    if (user) {
        navigation.navigate('Search')
        console.log("logged")
    }


    const loginEvent = () => {
        auth().signInWithEmailAndPassword(email, password).then(() => navigation.navigate('Search',{showPopUp: "LOGIN"}))
            .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode === 'auth/wrong-password') {
                    alert('Wrong password.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
            });
        
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
        alignItems: 'center', 
        justifyContent: 'center'
    }
});

export default LoginView
