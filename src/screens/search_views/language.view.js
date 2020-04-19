import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CustomPicker from '../../components/picker'
import ChangeButton from '../../components/change_button'
import Colors from '../../consts/colors'

const {lightPurple} = Colors;

const LanguageView = () => {
    return (
        <View style={styles.container}>
            <CustomPicker styles={{display: 'none'}}/>
            <CustomPicker styles={styles.picker} defaultValue="Türkçe"/>
            <ChangeButton/>
            <CustomPicker styles={styles.picker2} defaultValue="İngilizce"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'transparent',
        paddingHorizontal: 10,
    },
    picker: {
        alignItems: 'flex-start',
    },
    picker2: {
        alignItems: 'flex-end',
    }
});

export default LanguageView
