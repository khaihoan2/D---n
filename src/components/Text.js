import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Button,
  Alert,
  TouchableOpacity,
  TextInput,
  FlatList,
  FancyButton,
  SectionList,
  Square,
} from 'react-native';

const Text1 = () => {
  const [text, setText] = useState('');

  const [test, setTest] = useState('');

  const onChangeText = value => {
    setText(value);
  };
  const onChangeTest = value => {
    setTest(value);
  };
  const renderInput = () => {
    return (
      <View>
        <TextInput
          style={styles.input}
          onChangeText={value => onChangeText(value)}
          value={text}
        />
        <TextInput
          style={[styles.input, {backgroundColor: 'red'}]}
          onChangeText={value => onChangeTest(value)}
          value={test}
        />
        <Button title="Save" color="#841584" />
      </View>
    );
  };

  return <View>{renderInput()}</View>;
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 50,
    margin: 10,
    borderwidth: 3,
    backgroundColor: 'blue',
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
});
export default Text1;
