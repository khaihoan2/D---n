import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import {useNavigation} from '@react-navigation/core';

const HomeScreen = () => {
  const navigation = useNavigation();
  const onTodoClick = () => {
    navigation.navigate('Todo');
  };

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.container}>Home</Text>
        <CustomButton text="Go Todo" onPress={onTodoClick} type="TERTIARYs" />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    fontSize: 24,
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default HomeScreen;
