import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Sync from '../assets/images/home/sync.svg'
import Colors from '../consts/colors'

import LanguagesHook from '../hooks/language.hook';

const { lightPurple } = Colors;


const ChangeButton = () => {

    const {useLanguageState, changeInput, changeOutput} = LanguagesHook();
    const {input_value, output_value} = useLanguageState();


    const change = () => {

        const temp = output_value;

        changeOutput(input_value);
        changeInput(temp);
    }

    return (
        <TouchableOpacity style={styles.container} onPress={() => change()}>
            <Sync width={24} height={24}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 44,
        height: 44,
        alignContent: 'center',
        borderRadius: 100,
        padding: 10,
        backgroundColor: lightPurple,
        opacity: 0.3,
    },

});

export default ChangeButton
