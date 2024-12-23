import React, {useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';
import {ChallengeDescriptionProps} from '@interfaces/challenges';
import Header from '@components/Header';
import ChallengeCard from '@components/ChallengeCard';
import ChallengeLeader from '@components/ChallengeLeader';
import ChallengeRule from '@components/ChallengeRule';
import TabNavigator from '@components/ui/TabNavigator';
import {leaders} from '@/dummy/leaders';

const tabList = [
  {
    name: `Leaderboard (${leaders.length})`,
  },
  {
    name: 'Comments',
  },
];
export default function ChallengeDescription({
  navigation,
}: ChallengeDescriptionProps): React.JSX.Element {
  const [tabItems, setTabItems] = useState<string>(
    `Leaderboard (${leaders.length})`,
  );
  const [showAllLeaders, setShowAllLeaders] = useState<boolean>(false);
  return (
    <DescriptionParent>
      <Header
        navigation={navigation}
        navigateTo="Challenges"
        screenTitle="Challenge Description"
      />
      <ScrollView>
        <DescriptionContent>
          <ChallengeCard
            navigation={null}
            usrIcn={require('@assets/icons/MrDevin.png')}
            tags={['Devin', '14']}
            displayImage={
              'https://arcade.prism.ai/arcade/games/silentStrike/thumbnail.png'
            }
            displayDateTitle={['Fri Jun, 14 Solo', 'Challenge of the Day']}
            dueDateDescription={['Fri Jun, 14 Solo', 'Highest Total Skills']}
            prize="450.00"
            entry="Free"
            path=""
            share
          />
          <TabNavigator
            items={tabList}
            state={tabItems}
            setState={setTabItems}
          />
          <Leaderboard>
            <LeaderboardTopStrip>
              <Names>Leaders</Names>
              <TotalKills>Total Kills</TotalKills>
            </LeaderboardTopStrip>
            {leaders
              .slice(0, showAllLeaders ? leaders.length : 5)
              .map((leader, index) => (
                <ChallengeLeader
                  key={index}
                  navigation={navigation}
                  serial={leader.serial}
                  name={leader.name}
                  avatar={leader.avatar}
                  UDSC={leader.UDSC}
                  kills={leader.kills}
                />
              ))}
            {!showAllLeaders && (
              <ShowAllLeaders onPress={() => setShowAllLeaders(true)}>
                <Readmore>+{leaders.length - 5} More</Readmore>
              </ShowAllLeaders>
            )}
          </Leaderboard>
          <ChallengeRule title="Highest Total Kills" label="Objective" />
          <ChallengeRule title="Highest Total Kills" label="Objective" />
          <ChallengeRule title="Highest Total Kills" label="Objective" />
          <ChallengeRule title="BVC" label="Owner" icon />
          <PrizePoolContainer>
            <Title>
              450.00 UDSC <White>Prize Pool</White>
              <Image
                source={require('@assets/icons/arrow-up.png')}
                // eslint-disable-next-line react-native/no-inline-styles
                style={{width: 22, height: 22}}
              />
            </Title>
            <Boost>
              <Image source={require('@assets/icons/rocket-white.png')} />
              <BoostText>Boost The Prize tool</BoostText>
              <Underline width="113px" />
            </Boost>
            <JoinButton>
              <Image source={require('@assets/icons/greek-helmet.png')} />
              <JoinText>Join</JoinText>
            </JoinButton>
            <EntryFee>
              Entry Fee: <Blue>Free</Blue>
            </EntryFee>
          </PrizePoolContainer>
          <Smurling>
            <Image source={require('@assets/icons/devil.png')} />
            <SmurlingText>Anti-Smurfing Rules</SmurlingText>
            <Underline width="130px" />
          </Smurling>
        </DescriptionContent>
      </ScrollView>
    </DescriptionParent>
  );
}
const DescriptionParent = styled(View)`
  display: flex;
  background-color: #000;
  height: 100%;
`;
const DescriptionContent = styled(View)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;
const Leaderboard = styled(View)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`;
const LeaderboardTopStrip = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 95%;
  margin: 20px 0px;
`;
const Names = styled(Text)`
  color: #fff;
  font-size: 18px;
`;
const TotalKills = styled(Text)`
  color: #fff;
  font-size: 18px;
`;
const ShowAllLeaders = styled(TouchableOpacity)`
  margin-bottom: 0px;
`;
const Readmore = styled(Text)`
  color: #fff;
  width: 100%;
  text-align: center;
  padding: 10px 0px;
`;
const PrizePoolContainer = styled(View)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  padding: 30px;
  width: 95%;
  background-color: #2e3133;
`;
const Title = styled(Text)`
  font-size: 22px;
  font-weight: 600;
  color: #6ce8c1;
`;
const White = styled(Text)`
  color: #fff;
`;
const Boost = styled(View)`
  position: relative;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;
const BoostText = styled(Text)`
  font-size: 12px;
  color: #fff;
  text-align: center;
  width: 115px;
`;
interface UnderlineProp {
  width: string;
}
const Underline = styled(View)<UnderlineProp>`
  position: absolute;
  bottom: 0px;
  right: 0px;
  height: 1px;
  width: ${({width}) => width};
  background-color: #fff;
`;
const JoinButton = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 55px;
  margin: 15px 0px 10px 0px;
  background-color: #96ccff;
  border-radius: 80px;
`;
const JoinText = styled(Text)`
  font-size: 17px;
  font-weight: 600;
  color: #003353;
  margin-left: 5px;
`;
const EntryFee = styled(Text)`
  font-size: 14px;
  font-weight: 500;
  color: #fff;
`;
const Blue = styled(Text)`
  color: #96ccff;
`;
const Smurling = styled(View)`
  display: flex;
  flex-direction: row;
  width: 146px;
  margin: 5px 0px 20px 0px;
`;
const SmurlingText = styled(Text)`
  color: #fff;
`;
