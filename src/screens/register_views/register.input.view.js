import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import RegisterHook from '../../hooks/register.hook'

const InputView = () => {

    const {useRegisterState, changeEmail, changePassword, changeConfirmPassword} = RegisterHook();
    const {email, password, confirm_password} = useRegisterState();

    return (
        <View style={styles.container}>
            <Text style={styles.label}>E-mail</Text>
            <TextInput 
                label='Email' 
                placeholder='example@gmail.com' 
                style={styles.input} 
                onChangeText={text => {changeEmail(text); console.log(useRegisterState)}} />

            <Text style={styles.label}>Password</Text>
            <TextInput 
                label='Password' 
                placeholder='' 
                secureTextEntry={true} 
                style={styles.input}
                onChangeText={text => {changePassword(text); console.log(useRegisterState)}} />

            <Text style={styles.label}>Confirm Password</Text>
            <TextInput 
                label='Password' 
                placeholder='' 
                secureTextEntry={true} 
                style={styles.input}
                onChangeText={text => {changeConfirmPassword(text); console.log(useRegisterState)}} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'transparent',
    },
    input: {
        width: 250,
        height: 44,
        paddingHorizontal: 0,
        borderBottomWidth: 1,
        borderColor: '#A56FF8',
        marginBottom: 15,
    },
    label:{
        color: 'grey',
        marginBottom: -5
    }
});

export default InputView
