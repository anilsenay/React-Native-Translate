import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import {AsyncStorage} from 'react-native';
import Colors from '../../consts/colors'

const FavoriedView = () => {

    const [data, setData] = useState([])

    const retrieveData = async () => {
        try {
            AsyncStorage.getAllKeys((err, keys) => {
                AsyncStorage.multiGet(keys, (err, stores) => {
                stores.map((result, i, store) => {
                    // get at each store's key/value so you can work with it
                    let key = store[i][0];
                    let value = store[i][1];
                    setData(data => [...data, value])
                });
                });
            });
        } catch (error) {
        // Error retrieving data
        }
    };
    
    useEffect(() => {
        retrieveData();
    }, [])

    return (
        <View style={{height: '100%'}}>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                {
                    data.map(item => {
                        var obj = JSON.parse(item)
                        return (
                            <View key={obj.input} style={styles.words}>
                                <Text style={styles.input}>{obj.input}</Text>
                                <Text style={styles.output}>{obj.output}</Text>
                                <View style={styles.line}/>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      height: '100%',
      marginTop: 50,
      paddingBottom: 20,
      paddingHorizontal: 20,
    },
    words: {
        marginBottom: 10,
    },
    input: {
        fontSize: 18,
    },
    output: {
        fontSize: 20,
        color: Colors.darkPurple
    },
    line: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        opacity: 0.1,
        marginTop: 10,
    },
    
});

export default FavoriedView
