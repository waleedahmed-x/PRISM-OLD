import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoreGuard from './subscreens/LoreGuard';
import Lore from './Lore';

const Stack = createNativeStackNavigator();

function LoreLanding(): React.JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName="Lore"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTintColor: 'white',
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name="Lore´"
        component={Lore}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Guard"
        component={LoreGuard}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default LoreLanding;
