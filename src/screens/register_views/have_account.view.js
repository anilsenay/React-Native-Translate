import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const HaveAccountView = (props) => {
    return (
        <View style={styles.container}>
            <Text>Already have an account? </Text>
            <TouchableOpacity style={styles.touchable} onPress={() => {props.onClick()}}>
                <Text style={{color: '#A56FF8'}}>Sign In</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: 'center',
        backgroundColor: 'white',
    },
    touchable: {
        padding: 10,
        marginLeft: -10
    }
});

export default HaveAccountView
