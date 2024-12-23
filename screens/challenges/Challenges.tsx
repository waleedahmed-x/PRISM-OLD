import React, {useState} from 'react';
import {Alert, ScrollView, Text, View} from 'react-native';
import styled from 'styled-components/native';
import Header from '@components/Header';
import RoundClickable from '@components/RoundClickable';
import ChallengeCard from '@components/ChallengeCard';
import TabNavigator from '@components/ui/TabNavigator';
import {challenges} from '@/dummy/challenges';
import ChallengeMenu from './Menu';

const tabList = [
  {
    name: 'Yesterday',
  },
  {
    name: 'Live',
  },
  {
    name: 'Upcoming',
  },
];
function Challenges({navigation}: any): React.JSX.Element {
  const [tabItem, setTabItem] = useState<string>('Live');

  return (
    <SuperParent>
      <Header
        navigation={navigation}
        navigateTo="Home"
        screenTitle="Challenges"
        custom
        element={<HeaderElement navigation={navigation} />}
      />
      <ScrollView style={{width: '100%'}}>
        <ChallengesContainer>
          <Title>Challenges</Title>
          <TabNavigator items={tabList} state={tabItem} setState={setTabItem} />
          <Indexer>
            <ChallengeMenu />
          </Indexer>
          <ChallengeCards>
            {challenges &&
              challenges.map((challenge, i) => {
                return (
                  <ChallengeCard
                    key={i}
                    navigation={navigation}
                    usrIcn={require('@assets/icons/MrDevin.png')}
                    tags={challenge.tags}
                    displayImage={challenge.displayImage}
                    displayDateTitle={challenge.displayDateTitle}
                    dueDateDescription={challenge.dueDateDescription}
                    prize={challenge.prize}
                    entry={challenge.entry}
                    path="Challenge Description"
                  />
                );
              })}
          </ChallengeCards>
        </ChallengesContainer>
      </ScrollView>
    </SuperParent>
  );
}

const SuperParent = styled(View)`
  flex: 1;
  background-color: #000;
`;
const ChallengesContainer = styled(View)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const Indexer = styled(View)`
  z-index: 1;
`;
const ChallengeCards = styled(View)`
  margin-top: 30px;
  z-index: 0;
`;
const Title = styled(Text)`
  margin: 20px 0px 10px 20px;
  font-size: 30px;
  color: #fff;
  width: 100%;
  text-align: start;
`;

export default Challenges;
function HeaderElement({navigation}: any) {
  return (
    <StyledView>
      <RoundClickable
        icon={require('@assets/icons/discord.png')}
        pressEvent={() => Alert.alert('Under development')}
      />
      <RoundClickable
        icon={require('@assets/icons/add-plus.png')}
        pressEvent={() => navigation.navigate('Create Challenge')}
      />
    </StyledView>
  );
}
const StyledView = styled(View)`
  position: absolute;
  right: 10px;
  display: flex;
  flex-direction: row;
`;
