import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Cross from '../assets/images/home/cross.svg'
import Colors from '../consts/colors'

const { lightPurple } = Colors;

const CrossButton = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => props.onClick("")}>
            <Cross width={16} height={16}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 44,
        height: 44,
        padding: 10,
        marginTop: 10,
    },

});

export default CrossButton
