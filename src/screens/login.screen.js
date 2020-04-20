import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import LoginButton from '../components/login_button'
import { TextInput } from 'react-native-gesture-handler'
import InputView from '../screens/login_views/input.view'
import FlashMessage, {showMessage, hideMessage} from "react-native-flash-message";

const Login = ({ route, navigation }) => {
    
    

    useEffect(() => {
        if(route.params?.showPopUp){
            showMessage({
                message: "Account created! You can login now!",
                type: "success",
              });
        }
    }, [route.params])


    const loginEvent = () => {
        navigation.navigate('Search')
    }
    const registerEvent = () => {
        navigation.navigate('Register')
    }

    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/login/translate.png')} style={styles.image} resizeMode='contain'/>
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

export default Login
