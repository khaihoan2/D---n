import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SighInScreen from '../screens/SignInScreen/SighInScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen/ForgotPasswordScreen';
import NewForgotPasswordScreen from '../screens/NewForgotPasswordScreen/NewForgotPasswordScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import CreateToDoScreen from '../screens/CreateToDo/Todocreate';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SighInScreen}></Stack.Screen>
        <Stack.Screen name="SignUp" component={SignUpScreen}></Stack.Screen>
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen}></Stack.Screen>
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}></Stack.Screen>
        <Stack.Screen name="NewForgotPassword" component={NewForgotPasswordScreen}></Stack.Screen>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Todo" component={CreateToDoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
