import React from 'react';
import {Platform, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import {HeaderProps} from '@interfaces/header';
import RoundClickable from './RoundClickable';

export default function Header({
  navigation,
  navigateTo,
  screenTitle,
  custom,
  element,
}: HeaderProps): React.JSX.Element {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{width: '100%'}}>
      <HeaderParent>
        <RoundClickable
          pressEvent={() => navigation.navigate(navigateTo)}
          icon={require('@assets/icons/back.png')}
        />
        <ScreenTitle>{screenTitle}</ScreenTitle>
        {custom && element}
      </HeaderParent>
    </SafeAreaView>
  );
}

export function HeaderBack({
  navigation,
  navigateTo,
  screenTitle,
}: any): React.JSX.Element {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{width: '100%'}}>
      <HeaderParent>
        <RoundClickable
          icon={require('@assets/icons/back.png')}
          pressEvent={() => navigation.goBack(navigateTo)}
        />
        <ScreenTitle>{screenTitle}</ScreenTitle>
      </HeaderParent>
    </SafeAreaView>
  );
}
const HeaderParent = styled(View)`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
  padding-bottom: ${Platform.OS === 'ios' ? '0px' : '5px'};
`;

const ScreenTitle = styled(Text)`
  color: white;
  font-size: 25px;
  font-weight: 500;
  margin-left: 20px;
`;
