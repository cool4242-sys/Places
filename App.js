import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import AllPlaces from './screens/AllPlaces';
import AddPlace from './screens/AddPlace';
import IconButton from './components/UI/IconButton';
import { Colors } from './constants/colors';

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar/>
    <NavigationContainer>
      <stack.Navigator screenOptions={{
          headerStyle:{backgroundColor: Colors.primary500},
          headerTintColor: Colors.gray700,
          contentStyle:{backgroundColor: Colors.gray700}
      }}>
        <stack.Screen name='AllPlaces' component={AllPlaces}
         options={({navigation}) => ({
          title: 'Your Favourite Places.',
          headerRight: ({tintColor}) => (
          <IconButton icon="add" size={24} color={tintColor} onPress={() =>navigation.navigate('AddPlace')}
          />
        ),
        })}/>
        <stack.Screen name="AddPlace" component={AddPlace}
        options={{
          title: 'Add  A New Place',
        }}/>
      </stack.Navigator>
    </NavigationContainer>
    </>
  );
}