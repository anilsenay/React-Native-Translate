import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import CrossButton from '../../components/cross_button';
import Colors from '../../consts/colors'
import axios from 'axios'
import LanguagesHook from '../../hooks/language.hook';
import Tts from 'react-native-tts';
import SpeechToText from '../../components/speech_to_text'
import Speaker from '../../assets/images/home/speaker.svg'
import Mute from '../../assets/images/home/black-box.svg'

const {darkPurple} = Colors;

const TranslateView = () => {

    const {useLanguageState, changeInput, changeOutput} = LanguagesHook();
    const {input_value, output_value} = useLanguageState();

    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    const [isPlaying, setPlaying] = useState("")

    const play = (type) => {
        Tts.stop()
        if(type === "input"){
            Tts.setDefaultLanguage(input_value)
            setPlaying(type)
            Tts.speak(input)
        }else {
            Tts.setDefaultLanguage(output_value)
            setPlaying(type)
            Tts.speak(output)
        }
    }

    Tts.addEventListener('tts-finish', () => setPlaying(""));
    Tts.removeEventListener('tts-finish');

    //requests will be seperated later. They will not stay at a component
    const request = (text, lang) => {
        return axios.get(
        `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200418T170345Z.bc1a7bbbbe797646.b3a4b85d9ec55c9b821be6462380cde319272af8&text=${text}&lang=${lang || input_value}-${output_value}`,
        ).then(result => {
            setOutput(result.data.text[0])
        }).catch(e => {});
    };
    const detectRequest = (text) => {
        return axios.get(
        `https://translate.yandex.net/api/v1.5/tr.json/detect?key=trnsl.1.1.20200418T170345Z.bc1a7bbbbe797646.b3a4b85d9ec55c9b821be6462380cde319272af8&text=${text}`,
        ).then(result => {
            request(text, result.data.lang)
        }).catch(e => {});
    }
    
    useEffect(() => {
        input_value !== "detect" ?
        request(input) : detectRequest(input);
    }, [input, input_value, output_value])

    useEffect(() => {
        if(input.length === 0 && output.length !== 0)
            setOutput("")
    })

    return (
        <View style={styles.container}>

            <View style={styles.inputView}>
                <TextInput 
                    multiline={true}
                    placeholder="Type Something"
                    onChangeText={text => setInput(text)}
                    value={input}
                    style={styles.input}
                />
                {
                    input?.length > 0 ? (
                    <View>
                        <CrossButton onClick={setInput}/>
                        <TouchableOpacity style={styles.speaker} onPress={() => play("input")}>
                            {isPlaying !== "input" ? 
                                <Speaker width={16} height={16} fill="black"/>
                                :
                                <Mute width={12} height={12} fill="black"/>
                            }
                        </TouchableOpacity>
                    </View>
                    ) 
                    : null
                }
            </View>

            <View style={styles.line}/>

            <View style={styles.outputView}>
                <Text style={styles.output}>{output || "Waiting your input..."}</Text>
                {
                    output?.length > 0 ? (
                    <View>
                        <TouchableOpacity style={styles.speaker} onPress={() => play("output")}>
                            {isPlaying !== "output" ? 
                                <Speaker width={16} height={16} fill="black"/>
                                :
                                <Mute width={12} height={12} fill="black"/>
                            }
                        </TouchableOpacity>
                    </View>
                    ) 
                    : null
                }
            </View>

            <SpeechToText language={input_value} setInput={setInput}/>
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
        flex: 0,
        flexDirection: 'row',
        marginTop: 20,
    },
    output: {
        fontSize: 24,
        paddingBottom: 48,
        marginLeft: 4,
        width: "90%",
        color: darkPurple,
    },
    speaker: {
        width: 44,
        height: 44,
        padding: 10,
        marginTop: 10,
    },
  });

export default TranslateView
