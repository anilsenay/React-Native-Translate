import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import CrossButton from '../../components/cross_button';
import Colors from '../../consts/colors'

const {darkPurple} = Colors;

const TranslateView = () => {

    const [value, onChangeText] = useState();
    const [output, setOutput] = useState();

    return (
        <View style={styles.container}>

            <View style={styles.inputView}>
                <TextInput 
                    multiline={true}
                    placeholder="Type Something"
                    onChangeText={text => onChangeText(text)}
                    value={value}
                    style={styles.input}
                />
                {
                    value?.length > 0 ? (<CrossButton onClick={onChangeText}/>) : null
                }
            </View>

            <View style={styles.line}/>

            <View style={styles.outputView}>
                <Text style={styles.output}>{output || "Something is wrong"}</Text>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      height: '100%',
      flex: 1,
      margin: 15,
      backgroundColor: 'transparent',
    },
    line: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        opacity: 0.1,
        marginTop: 10,
    },
    inputView: {
        flex: 0,
        flexDirection: 'row',
    },
    input: {
        fontSize: 24,
        paddingBottom: 48,
        width: "90%",
    },
    outputView: {
        marginTop: 20,
    },
    output: {
        fontSize: 24,
        paddingBottom: 48,
        width: "90%",
        color: darkPurple,
    },
  });

export default TranslateView
