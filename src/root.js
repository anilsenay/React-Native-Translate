/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { TouchableOpacity, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StyleSheet } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import Search from './screens/search.screen';
import Login from './screens/login.screen';
import Register from './screens/register.screen';
import auth from '@react-native-firebase/auth';
import options from './navigation/navigation.options'

const Stack = createStackNavigator();

const Root = () => {

  const loginOptions = {
    headerShown: false
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={ loginOptions }/>
        <Stack.Screen name="Register" component={Register} options={ loginOptions }/>
        <Stack.Screen name="Search" component={Search} options={ options }/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  optionsButton: {
    padding: 16,
  },
  icon: {
    width: 24,
    height: 24,
  }
});

export default Root;
