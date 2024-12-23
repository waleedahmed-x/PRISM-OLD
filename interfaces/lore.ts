import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ImageSourcePropType} from 'react-native';

type RootStackParamList = {
  Home: undefined;
  Guard: undefined;
  Code: undefined;
  Lore: undefined;
};

type LoreScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Lore'
>;

export interface LoreProps {
  navigation: LoreScreenNavigationProp;
}
export interface CardProps {
  name: string;
  polyIcon: ImageSourcePropType;
  bgImgSrc: ImageSourcePropType;
  poster: ImageSourcePropType;
}
