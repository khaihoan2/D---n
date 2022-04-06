import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  useWindowDimensions,
  TextInput,
} from 'react-native';
import React, { useContext, useState } from 'react';
import Logo from '../../../assets/images/Logo_2.png.webp';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { useDebugValue } from 'react/cjs/react.production.min';
import AuthContext from '../../context/AuthContext';

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SighInScreen = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const val = useContext(AuthContext);

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm();


  const onSignInPressed = data => {
    console.log(data);

    navigation.navigate('Home');
  };
  const onForgotPasswordPressed = () => {
    navigation.navigate('NewForgotPassword');
  };

  const onSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  return (
    <SafeAreaView>
      <View style={styles.root}>
        <Text style={styles.title}>LOGIN</Text>
        <Text>{val}</Text>
        {/* <Image
          source={Logo}
          style={([styles.logo], {height: height * 0.3})}
          resizeMode="contain"
        /> */}
        <CustomInput
          name="Email"
          placeholder="Email"
          control={control}
          rules={{
            required: 'Email is required',
            pattern: { value: EMAIL_REGEX, message: 'Email is invalid' }
          }}
        />
        <CustomInput
          name="Password"
          placeholder="Password"
          secureTextEntry
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

        <CustomButton text="Sign In" onPress={handleSubmit(onSignInPressed)} />
        <CustomButton
          text="Forgot Password ?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />

        <CustomButton
          text="Don'n have an account? Create one"
          onPress={onSignUpPress}
          type="TERTIARY"
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
  },
});

export default SighInScreen;
