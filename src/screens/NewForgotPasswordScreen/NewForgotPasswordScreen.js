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

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const NewForgotPasswordScreen = () => {
  const { control, handleSubmit } = useForm();

  const navigation = useNavigation();

  const onSubmitPressed = () => {
    navigation.navigate('ForgotPassword')
  };


  return (
    <SafeAreaView>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>
        <Text style={styles.textfonts}>Email *</Text>
        <CustomInput
          name="Email"
          placeholder="Enter your Email"
          control={control}
          rules={{
            required: 'The email address is required',
            pattern: { value: EMAIL_REGEX, message: 'Email is invalid' }
          }}
        />
        <CustomButton text="Submit" onPress={handleSubmit(onSubmitPressed)} />
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
    marginRight: 30
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
    marginRight: 280
  },
  textfonts: {
    fontWeight: 'bold',
    marginRight: 300
  }
});

export default NewForgotPasswordScreen;
