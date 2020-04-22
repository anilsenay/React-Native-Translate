import React, {useState} from 'react'
import {Picker} from '@react-native-community/picker';
import { View, Text, StyleSheet, Image } from 'react-native'
import Colors from '../consts/colors'
import languages from '../consts/languages'

import LanguagesHook from '../hooks/language.hook';

const {lightPurple, textPurple} = Colors;

const CustomPicker = (props) => {

    const {useLanguageState, changeInput, changeOutput} = LanguagesHook();

    const {input_value, output_value} = useLanguageState();

    const containerStyle = {...props.styles, ...styles.container}

    return (
        <View style={containerStyle}>
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={props.type === "input" ? input_value : output_value}
                    style={styles.picker} 
                    onValueChange={(itemValue, itemIndex) =>
                    {
                        props.type === "input" ? changeInput(itemValue) : changeOutput(itemValue)
                    }
                    }>

                    {
                        languages.filter(item => item.value !== "detect" || props.type !== "output").map(item => {
                            return(
                                <Picker.Item key={item.value} label={item.label} value={item.value} />
                            )
                        })
                    }
                </Picker>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    pickerContainer: {
        borderRadius: 5,
        backgroundColor: lightPurple,
    },
    picker: {
      height: 40, 
      width: 120,
      color: textPurple,
      borderRadius: 50,
    },
    icon: {
        height: 24, 
        width: 24,
    }
  });

export default CustomPicker;
