import React, {useState} from 'react';
import {Alert, Image, ScrollView, Text, View} from 'react-native';
import styled from 'styled-components/native';
import Header from '@components/Header';
import RoundClickable from '@components/RoundClickable';
import Dropdown from '@components/ui/Dropdown';
import TabNavigator from '@components/ui/TabNavigator';
import {LeaderProfileInterface, Option} from '@interfaces/challenges';

const options: Option = {
  creator: ['Creator', 'Option 1', 'Option 2', 'Option 3'],
  progress: ['In Progress', 'Option 1', 'Option 2', 'Option 3'],
  mode: ['Mode', 'Option 1', 'Option 2', 'Option 3'],
  prize: ['Prize', 'Option 1', 'Option 2', 'Option 3'],
};
function ProfileHeaderElement(): React.JSX.Element {
  return (
    <StyledView>
      <RoundClickable
        icon={require('@assets/icons/pencil-edit.png')}
        pressEvent={() => Alert.alert('Under development')}
      />
      <RoundClickable
        icon={require('@assets/icons/settings.png')}
        pressEvent={() => Alert.alert('Under development')}
      />
      <RoundClickable
        icon={require('@assets/icons/share-head.png')}
        pressEvent={() => Alert.alert('Under development')}
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

const tabList = [
  {
    name: 'Challenges',
    icons: {
      dark: require('@assets/icons/crown-dark.png'),
      light: require('@assets/icons/crown-light.png'),
    },
  },
  {
    name: 'Account & Wallet',
    icons: {
      dark: require('@assets/icons/link-dark.png'),
      light: require('@assets/icons/link-light.png'),
    },
  },
];
export default function ChallengeLeaderProfile({
  navigation,
}: LeaderProfileInterface): React.JSX.Element {
  const [tab, setTab] = useState<string>('Challenges');
  const [creator, setCreator] = useState<string>('Creator');
  const [progress, setProgress] = useState<string>('In Progress');
  const [mode, setMode] = useState<string>('Mode');
  const [prize, setPrize] = useState<string>('Prizes');

  return (
    <ParentView>
      <Header
        navigation={navigation}
        navigateTo="Challenge Description"
        screenTitle="Profile"
        custom
        element={<ProfileHeaderElement />}
      />
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <ScrollView style={{width: '100%'}}>
        <ProfileContainer>
          <TitleAvatar>
            <Image source={require('@assets/images/profile-main.png')} />
            <Title>Devin</Title>
          </TitleAvatar>
          <TabNavigator items={tabList} state={tab} setState={setTab} />
          <LifeStateContainer>
            <LifeStatusTitleIcon>
              <LifeStatusTitleText>Life Time Status</LifeStatusTitleText>
              <Image source={require('@assets/icons/info-circle.png')} />
            </LifeStatusTitleIcon>
            <StatsContainer>
              <Wins>
                <Win>0</Win>
                <WinLabel>Wins</WinLabel>
              </Wins>
              <Divider />
              <UDSCs>
                <UDSC>$0</UDSC>
                <UDSCLabel>UDSC Earned</UDSCLabel>
              </UDSCs>
            </StatsContainer>
          </LifeStateContainer>
          <Challenges>
            <ChallengesTitleText>My Challenges</ChallengesTitleText>
            <MenuParent>
              <Dropdown
                title={creator}
                options={options.creator}
                onSelect={setCreator}
                widthInPercentage={47}
                heightInPixels={50}
              />
              <Dropdown
                title={progress}
                options={options.progress}
                onSelect={setProgress}
                widthInPercentage={47}
                heightInPixels={50}
              />
              <Dropdown
                title={mode}
                options={options.mode}
                onSelect={setMode}
                widthInPercentage={47}
                heightInPixels={50}
              />
              <Dropdown
                title={prize}
                options={options.prize}
                onSelect={setPrize}
                widthInPercentage={47}
                heightInPixels={50}
              />
            </MenuParent>
          </Challenges>
          <TestChallenge>
            <Image source={require('@/dummy/test-challenge.png')} />
            <TestContent>
              <TestTitle>Test Challenge June 11th</TestTitle>
              <TestDescription>Kills - Ends Thu, June 13</TestDescription>
            </TestContent>
          </TestChallenge>
        </ProfileContainer>
      </ScrollView>
    </ParentView>
  );
}

const ParentView = styled(View)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;
  height: 100%;
  width: 100%;
`;
const ProfileContainer = styled(View)`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
const TitleAvatar = styled(View)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 50px 0px;
`;
const Title = styled(Text)`
  color: #fff;
  font-size: 30px;
  font-weight: 600;
  padding-top: 10px;
`;
const LifeStateContainer = styled(View)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  margin-top: 30px;
`;
const LifeStatusTitleIcon = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;
const LifeStatusTitleText = styled(Text)`
  margin: 0px 5px;
  font-size: 18px;
  color: #fff;
`;
const StatsContainer = styled(View)`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-top: 15px;
  border-radius: 25px;
  height: 110px;
  border: 0.5px solid #ccc;
`;
const Wins = styled(View)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 49.5%;
  height: 100%;
`;
const Win = styled(Text)`
  color: #fff;
  font-size: 22px;
  font-weight: 700;
`;
const WinLabel = styled(Text)`
  color: #fff;
  font-size: 12px;
  font-weight: 300;
`;
const Divider = styled(View)`
  position: absolute;
  top: 45px;
  left: 50%;
  height: 20px;
  width: 0.5px;
  background-color: #ccc;
`;
const UDSCs = styled(View)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 49.5%;
  height: 100%;
`;
const UDSC = styled(Text)`
  color: #6ce8c1;
  font-size: 22px;
  font-weight: 700;
`;
const UDSCLabel = styled(Text)`
  color: #6ce8c1;
  font-weight: 300;
  font-size: 12px;
`;
const Challenges = styled(View)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  margin-top: 40px;
`;
const ChallengesTitleText = styled(Text)`
  width: 100%;
  text-align: start;
  padding-left: 5px;
  font-size: 18px;
  color: #fff;
`;

const MenuParent = styled(View)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  width: 95%;
  margin-top: 15px;
  z-index: 1;
`;
const TestChallenge = styled(View)`
  display: flex;
  flex-direction: row;
  background-color: #2b3031;
  border-radius: 20px;
  margin: 20px 0px;
  width: 90%;
  z-index: -1;
`;
const TestContent = styled(View)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  padding-left: 10px;
`;
const TestTitle = styled(Text)`
  font-size: 18px;
  color: #fff;
`;
const TestDescription = styled(Text)`
  font-size: 12px;
  color: #fff;
`;
