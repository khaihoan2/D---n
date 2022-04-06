import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Controller } from 'react-hook-form'

const CustomInput = ({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry }) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
        <>
          <View style={[styles.container,
          { borderColor: error ? 'red' : '#e8e8e8' }
          ]}>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              style={styles.input}
              secureTextEntry={secureTextEntry}
            />
          </View>
          {error && <Text style={{ color: 'red', alignSelf: 'stretch' }}>{error.message || 'Error'}</Text>}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',

    brodercolor: '#e8e8e8',
    borderwidth: 2,
    borderradius: 5,

    paddingHorizontal: 10, // điều chỉnh khoảng cách của chữ trong nút (placeholder)
    marginVertical: 5, //khoảng cách giữa 2 nút
  },
  input: {},
});

export default CustomInput;
