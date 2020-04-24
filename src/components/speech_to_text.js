import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity,KeyboardAvoidingView} from 'react-native'
import Voice from '@react-native-community/voice';
import Microphone from '../assets/images/home/microphone.svg'
import Colors from '../consts/colors'

function SpeechToText({language, setInput}) {
    useEffect(() => {
        const onSpeechResults = (e) => {
            setInput(e.value[0])
        };
        Voice.onSpeechResults = onSpeechResults;
        return () => {
            Voice.destroy().then(Voice.removeAllListeners);
        };
    }, []);

    const startVoice = async () => {
        try {
            await Voice.start(language);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS == "ios" ? "padding" : "height"}>
            <TouchableOpacity style={styles.touchable} onPress={() => startVoice()}>
                <Microphone width={24} height={24} fill="white"/>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    touchable:{
        position: 'absolute',
        bottom: 30,
        alignSelf:'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.buttonPurple,
        height: 60,
        width: 60,
        borderRadius: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.41,
        shadowRadius: 11.11,

        elevation: 24,
    }
});

export default SpeechToText;