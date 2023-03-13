import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyTabs from './stacks';

export default function MyApp() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
