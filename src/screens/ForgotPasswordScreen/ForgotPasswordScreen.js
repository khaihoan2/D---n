import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import React, { useState } from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import { useNavigation } from '@react-navigation/core';
import { useForm } from 'react-hook-form'


const ForgotPasswordScreen = () => {

  const { control, handleSubmit } = useForm();

  const navigation = useNavigation();

  const onSubmitPressed = () => {
    navigation.navigate('SignIn')
  };
  const onSignInPress = () => {
    navigation.navigate('SignIn')
  };

  return (
    <SafeAreaView>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>
        <Text style={styles.textfonts}>Confirmation Code*</Text>
        <CustomInput
          name="code"
          placeholder="Code"
          control={control}
          rules={{
            required: 'Password is required',
            minLength: {
            value: 6,
            message: 'The code must be at least 6 digits.',
            }
          }}
        />
        <Text style={styles.textfont}>Password *</Text>
        <CustomInput
          name="password"
          placeholder="Enter your new password"
          control={control}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password should be minimum 8 character long',
            },
            maxLength: {
              value: 24,
              message: 'Password should be max 24 character long',
            },
          }}
        />
        <CustomButton text="Submit" onPress={handleSubmit(onSubmitPressed)} />

        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPress}
          type="TERTIARYs"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '700%',
    maxwidth: 300,
    maxHeight: 150,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
    marginRight: 100
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
  textfont: {
    fontWeight: 'bold',
    marginRight: 270
  },
  textfonts: {
    fontWeight: 'bold',
    marginRight: 220
  }
});

export default ForgotPasswordScreen;
