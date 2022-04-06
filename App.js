import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import Navigation from './src/navigation/Navigation'
import { useForm } from "react-hook-form";
import { AuthProvider } from './src/context/AuthContext'


const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
export default App;