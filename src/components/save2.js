import * as React from 'react';
import {View, Text, Button, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() =>
          navigation.navigate('Profile', {name: 'Custom profile header'})
        }
      />
    </View>
  );
}
// thêm logo vào góc trái trên cùng //
// function LogoTitle() {
//   return (
//     <Image
//       style={{width: 50, height: 50}}
//       source={require('@expo/snack-static/react-native-logo.png')}
//     />
//   );
// }
function ProfileScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile Screen</Text>
      <Button
        title="Update Profile"
        onPress={() => navigation.push(HomeScreen1)}
      />
      <Button title="Go Back" onPress={() => navigation.goBack('')} />
    </View>
  );
}
function HomeScreen1({navigation}) {
  const [count, setCount] = React.useState(0);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount(c => c + 1)} title="Update count" />
      ),
    });
  }, [navigation, setCount]);

  return <Text>Count: {count}</Text>;
}
const Stack = createNativeStackNavigator();

function Save2() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'My Home'}}
          // options={{headerTitle: props => <LogoTitle {...props} />}}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={({route}) => ({title: route.params.name})}
        />
        <Stack.Screen
          name="Update the title"
          component={HomeScreen1}
          options={({route}) => ({title: route.params.name})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Save2;
