import React, { useState } from 'react';
import {View, StyleSheet} from 'react-native';
import LanguageView from './search_views/language.view'
import TranslateView from './search_views/translate.view'
import {LanguageContext, LanguageContextDispatch, LanguageProvider} from '../contexts/language.context'

const Search = () => {

  const [inputLang, setInputLang] = useState("tr");
  const [outputLang, setOutputLang] = useState("en");


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

});

export default Search;
