import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailScreen from '../../screens/DetailScreen';
import {SearchStackParamList} from './SearchStack.model';
import SearchScreen from '../../screens/SearchScreen';

const Stack = createNativeStackNavigator<SearchStackParamList>();

const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default SearchStack;
