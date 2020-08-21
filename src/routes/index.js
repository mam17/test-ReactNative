import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WastesContainer from '../screens/containers/WastesContainer';
import WasteContainer from '../screens/containers/WasteContainer';
import { COLORS } from '../assets/styles/colors';

const Stack = createStackNavigator();

const Routes = () => (
  <Stack.Navigator initialRouteName="Wastes">
    <Stack.Screen name="Wastes" component={WastesContainer} />
    <Stack.Screen
      name="Waste"
      component={WasteContainer}
      options={{
        headerStyle: {
          backgroundColor: COLORS.blueLight2
        }
      }}
    />
  </Stack.Navigator>
);

export default Routes;
