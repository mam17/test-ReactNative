import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WastesContainer from '../screens/containers/WastesContainer';

const Stack = createStackNavigator();

const Routes = () => (
  <Stack.Navigator initialRouteName="Wastes" headerMode="none">
    <Stack.Screen name="Wastes" component={WastesContainer} />
  </Stack.Navigator>
);

export default Routes;
