/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Search from './screens/search.screen';
import Login from './screens/login.screen';
import Register from './screens/register.screen';
import Favorited from './screens/favorited.screen'
import options from './navigation/navigation.options'
import PopUp from './components/popup'

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
        <Stack.Screen name="Favorited" component={Favorited} options={ options }/>
      </Stack.Navigator>
      <PopUp />
    </NavigationContainer>
  );
};

export default Root;
