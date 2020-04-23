import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import LoginHook from '../../hooks/login.hook'
import Colors from '../../consts/colors'

const InputView = () => {

    const {useLoginState, changeEmail, changePassword} = LoginHook();
    const {email, password} = useLoginState();

    return (
        <View style={styles.container}>
            <Text style={styles.label}>E-mail</Text>
            <TextInput 
                label='Email' 
                placeholder='example@gmail.com' 
                style={styles.input} 
                onChangeText={text => changeEmail(text)} />

            <Text style={styles.label}>Password</Text>
            <TextInput 
                label='Password' 
                placeholder='' 
                secureTextEntry={true} 
                style={styles.input}
                onChangeText={text => changePassword(text)} />
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
        borderColor: Colors.buttonPurple,
        marginBottom: 25,
    },
    label:{
        color: 'grey',
        marginBottom: -5
    }
});

export default InputView
