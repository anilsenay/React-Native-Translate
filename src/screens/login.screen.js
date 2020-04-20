import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import LoginButton from '../components/login_button'
import { TextInput } from 'react-native-gesture-handler'
import InputView from '../screens/login_views/input.view'

const Login = ({ route, navigation }) => {
    console.log(route.params)

    const loginEvent = () => {
        navigation.navigate('Search')
    }
    const registerEvent = () => {
        navigation.navigate('Register')
    }

    return (
        <View style={styles.container}>
            <InputView/>
            <LoginButton 
                text="Login"
                onClick={loginEvent}
                reverse={false}
                style={{marginBottom: 14, marginTop: 20}}/>
            <LoginButton 
                text="Create new account" 
                onClick={registerEvent}
                reverse={true}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      height: '100%',
      flex: 1,
      justifyContent: 'flex-start',
      paddingTop: '50%',
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
});

export default Login
