import * as React from 'react';
import HomeScreen from '../../screens/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailScreen from '../../screens/DetailScreen';
import {HomeStackParamList} from './HomeStack.model';

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
