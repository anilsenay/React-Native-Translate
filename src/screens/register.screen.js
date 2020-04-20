import React from 'react'
import { View, StyleSheet } from 'react-native'
import LoginButton from '../components/login_button'
import InputView from '../screens/register_views/register.input.view'
import HaveAccountView from '../screens/register_views/have_account.view'

const Register = ({ navigation }) => {

    const goLogin = () => {
        navigation.goBack();
    }
    
    const createdAccount = () => {
        navigation.navigate('Login', {showPopUp: true})
    }

    return (
        <View style={styles.container}>
            <InputView/>
            <LoginButton 
                text="Create new account" 
                onClick={createdAccount}
                reverse={true} 
                style={{margin: 10}}/>
            <HaveAccountView onClick={goLogin}/>
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

export default Register
