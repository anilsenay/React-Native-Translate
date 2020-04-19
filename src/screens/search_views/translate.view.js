import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import CrossButton from '../../components/cross_button';
import Colors from '../../consts/colors'
import axios from 'axios'
import LanguagesHook from '../../hooks/language.hook';

const {darkPurple} = Colors;

const TranslateView = () => {

    const {useLanguageState, changeInput, changeOutput} = LanguagesHook();
    const {input_value, output_value} = useLanguageState();

    const [value, onChangeText] = useState("");
    const [output, setOutput] = useState("Test");


    const request = (text) => {
        return axios.get(
        `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200418T170345Z.bc1a7bbbbe797646.b3a4b85d9ec55c9b821be6462380cde319272af8&text=${text}&lang=${input_value}-${output_value}`,
        ).then(result => {
            setOutput(result.data.text[0])
        }).catch(e => {});
    };
    const detectRequest = () => {

    }
    
    useEffect(() => {
        input_value !== "detect" ?
        request(value) : detectRequest();
    }, [value, input_value, output_value])

    useEffect(() => {
        if(value.length === 0 && output.length !== 0)
            setOutput("")
    })

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
                <Text style={styles.output}>{output || "Type Something"}</Text>
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
