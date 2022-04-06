import * as React from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {post} from './src/components/post';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to be "
        onPress={() =>
          navigation.navigate('Details', {
            itemId: 86,
            orthernParam: '',
          })
        }
      />
    </View>
  );
}

function DetailsScreen({navigation, route}) {
  const {itemId, orthernParam} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>orthernParam: {JSON.stringify(orthernParam)}</Text>
      <Button
        title="Details Screen.... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="go Details1" onPress={() => navigation.push('Details1')} />
      <Button title="go Back" onPress={() => navigation.popToTop('Home')} />
    </View>
  );
}
function DetailsScreen1({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen1</Text>
      <Button
        title="Details Screen.... again"
        onPress={() => navigation.push('CreatePost')}
      />
      <Button
        title="Details go Back"
        onPress={() => navigation.navigate('Home')}
      />
      <Button title="go Back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to firts srceen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function Save() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Details1" component={DetailsScreen1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Save;
