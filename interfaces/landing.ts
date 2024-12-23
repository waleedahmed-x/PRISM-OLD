import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ImageSourcePropType} from 'react-native';

type RootStackParamList = {
  home: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'home'
>;

export interface LandingProps {
  navigation: HomeScreenNavigationProp;
}
export interface HomeElementProps {
  title: string;
  description: string;
  background: ImageSourcePropType;
  icon: ImageSourcePropType;
  navigation: any;
  goTo: string;
}
