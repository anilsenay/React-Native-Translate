import React, { useRef, useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Animated, Easing } from 'react-native'
import Sync from '../assets/images/home/sync.svg'
import Colors from '../consts/colors'

import LanguagesHook from '../hooks/language.hook';

const { lightPurple } = Colors;


const ChangeButton = () => {

    const {useLanguageState, changeInput, changeOutput} = LanguagesHook();
    const {input_value, output_value} = useLanguageState();

    const [rotateAnim, setRotateAnim] = useState(new Animated.Value(0));
    const RotateData = rotateAnim.interpolate({
        inputRange: [0, 0.5],
        outputRange: ['0deg', '180deg'],
    })

    const rotate = () => {
        Animated.timing(
            rotateAnim,
            {
                toValue: 6,
                duration: 300,
                easing: Easing.linear,
                useNativeDriver: true
            }
        ).start(() => setRotateAnim(new Animated.Value(0)));

    }

    const change = () => {

        const temp = output_value;

        changeOutput(input_value);
        changeInput(temp);

        rotate();
    }

    return (
        <Animated.View style={{transform: [{rotate: rotateAnim}]}}>
            <TouchableOpacity style={styles.container} onPress={() => change()}>
                <Sync width={24} height={24}/>
            </TouchableOpacity>
        </Animated.View>
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
        opacity: 0.5,
        transform: [{rotate: 0}]
    },

});

export default ChangeButton
