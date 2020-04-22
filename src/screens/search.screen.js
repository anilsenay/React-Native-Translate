import React, { useEffect } from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import LanguageView from './search_views/language.view'
import TranslateView from './search_views/translate.view'
import {LanguageProvider} from '../contexts/language.context'
import Logout from '../assets/images/navigation/logout.png'
import auth from '@react-native-firebase/auth';
import {     
  accountCreated,
  loggedIn,
  otherErrors,
} from '../consts/messages'

const Search = ({ route, navigation }) => {

  const logout = () => {
    auth()
    .signOut()
    .then(() => console.log("logged out") )
    .catch(otherErrors());
    navigation.navigate('Login', {showPopUp: "LOGOUT"})
  }

  navigation.setOptions({
    headerLeft: () => (
      <TouchableOpacity style={styles.optionsButton} onPress={logout}>
        <Image source={ Logout } style={styles.icon}/>
      </TouchableOpacity>
    )
  })

  console.log(`>${route.params.showPopUp}`)
  useEffect(() => {
    console.log(route.params)
    if(route.params?.showPopUp === "CREATED"){
        accountCreated();
    }
    if(route.params?.showPopUp === "LOGIN"){
        loggedIn();
    }
}, [route.params]);

  return (
    <LanguageProvider>
      <View style={styles.container}>
        <LanguageView />
        <TranslateView />
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
