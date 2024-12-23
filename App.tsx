import 'fast-text-encoding';
import 'react-native-get-random-values';
import '@ethersproject/shims';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Landing from '@screens/landing/Landing';
import PrismArcade from '@screens/arcade/PrismArcade';
import Challenges from '@screens/challenges/Challenges';
import Lore from '@screens/lore/LoreLanding';
import CreateChallenge from '@screens/challenges/subscreens/CreateChallenge';
import ChallengeDescription from '@screens/challenges/subscreens/ChallengeDescription';
import ChallengeLeaderProfile from '@screens/challenges/subscreens/ChallengeLeaderProfile';
import Game from '@screens/arcade/subscreens/GameScreen';
import ContextProviders from '@/utils/ContextProviders';
import BootSplash from 'react-native-bootsplash';
import {PrivyProvider} from '@privy-io/expo';
import Constants from 'expo-constants';
import Login from './screens/login/Login';
console.log(Constants.systemFonts);

export default function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();
  useEffect(() => {
    const init = async () => {
      try {
        // ! iOS
        // 1x Scale: 320 x 480 px
        // 2x Scale: 750 x 1334 px
        // 3x Scale: 1125 x 2436 px
        // ? Android will it self cherrypick just add the images in files
        // MDPI (1x, Medium Density, ~160 dpi)
        //     Size: 320 x 480 px
        // HDPI (1.5x, High Density, ~240 dpi)
        //     Size: 480 x 720 px
        // XHDPI (2x, Extra-High Density, ~320 dpi)
        //     Size: 640 x 960 px
        // XXHDPI (3x, Extra-Extra-High Density, ~480 dpi)
        //     Size: 960 x 1440 px
        // XXXHDPI (4x, Extra-Extra-Extra-High Density, ~640 dpi)
        //     Size: 1280 x 1920 px
      } catch (error) {
        console.error('Initialization error:', error);
      }
    };

    init().finally(async () => {
      try {
        await BootSplash.hide({fade: true});
      } catch (error) {
        console.error('Error hiding BootSplash:', error);
      }
    });
  }, []);

  return (
    <PrivyProvider
      appId="clzv45h3v015ijsgo98edgdog"
      clientId="client-WY2p2hDqSAh8gRYyhAcxTcddFY9V4RJvq69aRXcoRwqcT">
      <ContextProviders>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              headerStyle: {
                backgroundColor: '#000',
              },
              headerTintColor: 'white',
              headerBackTitleVisible: false,
            }}>
            <Stack.Screen
              name="Home"
              component={Landing}
              options={{
                headerShown: false,
                orientation: 'portrait',
              }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: false,
                orientation: 'portrait',
              }}
            />
            <Stack.Screen
              name="Prism Arcade"
              component={PrismArcade}
              options={{
                headerShown: false,
                orientation: 'portrait',
              }}
            />
            <Stack.Screen
              name="Game"
              component={Game}
              options={{
                headerShown: false,
                orientation: 'landscape',
              }}
            />
            <Stack.Screen
              name="Challenges"
              component={Challenges}
              options={{
                headerShown: false,
                orientation: 'portrait',
              }}
            />
            <Stack.Screen
              name="Create Challenge"
              component={CreateChallenge}
              options={{
                headerShown: false,
                orientation: 'portrait',
              }}
            />
            <Stack.Screen
              name="Challenge Description"
              component={ChallengeDescription}
              options={{
                headerShown: false,
                orientation: 'portrait',
              }}
            />
            <Stack.Screen
              name="Leader Profile"
              component={ChallengeLeaderProfile}
              options={{
                headerShown: false,
                orientation: 'portrait',
              }}
            />
            <Stack.Screen
              name="Lore"
              component={Lore}
              options={{
                headerShown: false,
                orientation: 'portrait',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ContextProviders>
    </PrivyProvider>
  );
}
