import {ImageSourcePropType} from 'react-native';

export interface StyledProps {
  backgroundColor?: string;
  color?: string;
}
export interface ChallengeMenuOptionInterface {
  game: string[];
  mode: string[];
  prize: string[];
}

export interface ChallengeCardPropsInterface {
  navigation?: any;
  usrIcn: ImageSourcePropType;
  tags: string[];
  displayImage: string;
  displayDateTitle: string[];
  dueDateDescription: string[];
  prize: string;
  entry: string;
  path?: string;
  share?: boolean;
}
export interface LeaderProfileInterface {
  navigation: any;
}
export interface Option {
  creator: string[];
  progress: string[];
  mode: string[];
  prize: string[];
}
export interface ChallengeDescriptionProps {
  navigation: any;
}
export interface ChallengeLeaderProps {
  navigation: any;
  serial: string;
  name: string;
  avatar: ImageSourcePropType;
  UDSC: string;
  kills: string;
}
export interface ChallengeObjectiveProps {
  icon: ImageSourcePropType;
  additionalLabel: {show: boolean; label: string};
  title: string;
  label: string;
  gap?: boolean;
  radio?: boolean;
}
export interface ChallengeRuleProps {
  title: string;
  label: string;
  icon?: boolean;
}
