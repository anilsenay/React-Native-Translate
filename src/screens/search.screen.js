import React, { useEffect } from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import LanguageView from './search_views/language.view'
import TranslateView from './search_views/translate.view'
import {LanguageContext, LanguageContextDispatch, LanguageProvider} from '../contexts/language.context'
import FlashMessage, {showMessage, hideMessage} from "react-native-flash-message";
import Logout from '../assets/images/navigation/logout.png'
import auth from '@react-native-firebase/auth';

const Search = ({ route, navigation }) => {

  const logout = () => {
    auth()
    .signOut()
    .then(() => console.log("logged out") );
    navigation.navigate('Login')
  }

  navigation.setOptions({
    headerLeft: () => (
      <TouchableOpacity style={styles.optionsButton} onPress={logout}>
        <Image source={ Logout } style={styles.icon}/>
      </TouchableOpacity>
    )
  })

  console.log((navigation))
  useEffect(() => {
    console.log(route.params)
    if(route.params?.showPopUp === "CREATED"){
        showMessage({
            message: "Account created!",
            type: "success",
          });
    }
    else if(route.params?.showPopUp === "LOGIN"){
        showMessage({
          message: "Logged in!",
          type: "success",
        });
    }
}, []);

  return (
    <LanguageProvider>
      <View style={styles.container}>
        <LanguageView />
        <TranslateView />
        <FlashMessage position="bottom" style={styles.popUp} titleStyle={{fontSize: 16}}/>
      </View>
    </LanguageProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    paddingTop: 70,
    backgroundColor: 'white',
  },
  popUp: {
    alignItems: 'center', 
    justifyContent: 'center'
  },
  optionsButton: {
    padding: 16,
  },
  icon: {
    width: 24,
    height: 24,
  }

});

export default Search;
