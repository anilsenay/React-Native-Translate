import React, { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../consts/colors'
import CustomPicker from '../components/picker'
import DropDownIcon from '../assets/images/home/down-arrow.svg'
import { SvgUri } from 'react-native-svg';
import LanguageView from './search_views/language.view'
import TranslateView from './search_views/translate.view'
const Search = () => {
  const [language, setLanguage] = useState("java");
  return (
    <View style={styles.container}>
      <LanguageView />
      <TranslateView />
    </View>
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
