import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import RegisterHook from '../../hooks/register.hook'
import Colors from '../../consts/colors'

const InputView = () => {

    const {changeEmail, changePassword, changeConfirmPassword} = RegisterHook();

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

            <Text style={styles.label}>Confirm Password</Text>
            <TextInput 
                label='Password' 
                placeholder='' 
                secureTextEntry={true} 
                style={styles.input}
                onChangeText={text => changeConfirmPassword(text)} />
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
        marginBottom: 15,
    },
    label:{
        color: 'grey',
        marginBottom: -5
    }
});

export default InputView
