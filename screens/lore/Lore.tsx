import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';
import LoreCard from '@components/LoreCard';
import Header from '@components/Header';
import {LoreProps} from '@interfaces/lore';

function Lore({navigation}: LoreProps): React.JSX.Element {
  return (
    <LoreParent>
      <Header navigation={navigation} navigateTo="Home" screenTitle="Lore" />
      <BackgroundImage source={require('@assets/images/bg.png')} />
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <ScrollView style={{width: '100%'}}>
        <ContentParent>
          <Title>Factions</Title>
          <TouchableOpacity onPress={() => navigation.navigate('Guard')}>
            <LoreCard
              name="Guard"
              poster={require('@assets/images/guardposter.png')}
              bgImgSrc={require('@assets/images/guard.png')}
              polyIcon={require('@assets/images/polygon.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Guard')}>
            <LoreCard
              name="Code"
              poster={require('@assets/images/codeposter.png')}
              bgImgSrc={require('@assets/images/code.png')}
              polyIcon={require('@assets/images/polygon.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Guard')}>
            <LoreCard
              name="Rebel"
              poster={require('@assets/images/rebelsposter.png')}
              bgImgSrc={require('@assets/images/rebel.png')}
              polyIcon={require('@assets/images/polygon.png')}
            />
          </TouchableOpacity>
        </ContentParent>
      </ScrollView>
    </LoreParent>
  );
}

const LoreParent = styled(View)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const ContentParent = styled(View)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const BackgroundImage = styled(Image)`
  position: absolute;
  bottom: 0px;
  left: 0px;
  z-index: -1;
  width: 100%;
`;
const Title = styled(Text)`
  margin: 20px 0px 10px 20px;
  font-size: 30px;
  color: #fff;
  width: 100%;
  text-align: start;
`;

export default Lore;
