import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import React, { useState, useContext } from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form'
import AuthContext from '../../context/AuthContext';


const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = () => {
  // const [email, setEmail] = useState('');
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [passwordRepeat, setPasswordRepeat] = useState('');
  const { control, handleSubmit, watch } = useForm('');
  const pwd = watch('password')

  const val = useContext(AuthContext);


  const navigation = useNavigation();

  const onSignRegisterPressed = () => {
    navigation.navigate('ConfirmEmail');
  };
  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };
  const onTermsOfUserPressed = () => {
    console.warn('onTermsOfUserPressed');
  };
  const onPrivatePressed = () => {
    console.warn('onPrivatePressed');
  };

  return (
    <SafeAreaView>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>
        <Text>{val}</Text>
        <CustomInput
          name="Email"
          placeholder="Email"
          control={control}
          rules={{
            required: 'The email address is required',
            pattern: { value: EMAIL_REGEX, message: 'Email is invalid' }
          }}
        />
        <CustomInput
          name="Username"
          placeholder="Username"
          control={control}
          rules={{
            required: 'Username is required',
            minLength: {
              value: 3,
              message: 'Username should be minimum 8 character long',
            },
            maxLength: {
              value: 20,
              message: 'Username should be max 24 character long',
            },
          }}
        />
        <CustomInput
          name="password"
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
        <CustomInput
          name="Password-repeat"
          placeholder="Password repeat"
          control={control}
          secureTextEntry
          rules={{
            required: 'Password is required',
            validate: value => value === pwd || 'Password do not match',
          }}
        />
        <CustomButton text="Register" onPress={handleSubmit(onSignRegisterPressed)} />
        {/* /// */}
        <Text style={styles.text}>
          By registering, you confirm that you accept our{' '}
          <Text style={styles.link} onPress={onTermsOfUserPressed}>
            Terms of Use
          </Text>{' '}
          and{' '}
          <Text style={styles.link} onPress={onPrivatePressed}>
            Private Policy{' '}
          </Text>
        </Text>
        <CustomButton
          text="I have an account? Sign In"
          onPress={onSignInPress}
          type="TERTIARY"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 18,
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
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default SignUpScreen;
