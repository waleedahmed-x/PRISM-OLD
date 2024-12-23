import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '@components/Header';
import ChallengeObjective from '@components/ChallengeObjective';

export default function CreateChallenge({navigation}: any): React.JSX.Element {
  const [challengeName, setChallengeName] = useState<String>('');
  const [label, setLabel] = useState<boolean>(true);
  const [challengeNameColor, setChallengeNameColor] =
    useState<String>('#828282');
  useEffect(() => {
    challengeName.length > 32
      ? setChallengeNameColor('#c80b01')
      : setChallengeNameColor('#828282');
  }, [challengeName]);
  return (
    <Parent>
      <Header
        navigation={navigation}
        navigateTo="Challenges"
        screenTitle="Create a Challenge"
      />
      {Platform.OS === 'ios' ? (
        <TopImageContaineriOS>
          <TopImageiOS
            source={require('@assets/images/create-challenge.png')}
          />
        </TopImageContaineriOS>
      ) : (
        <TopImageContainerAndriod>
          <TopImageAndriod
            source={require('@assets/images/create-challenge.png')}
          />
        </TopImageContainerAndriod>
      )}
      <ScrollView>
        <InputContainer>
          {label && <Label>Name</Label>}
          <NameInput
            placeholder="My Challenge Name"
            placeholderTextColor="#aaa"
            onChangeText={name => setChallengeName(name)}
            onFocus={() => setLabel(false)}
            onBlur={() => setLabel(true)}
          />
          {/* @ts-ignore */}
          <CharCount textColor={challengeNameColor}>
            {challengeName.length}/32 charecters
          </CharCount>
        </InputContainer>
        <Rules>
          <RulesTitle>Rules</RulesTitle>
          <ChallengeObjective
            icon={require('@assets/icons/prize-cup.png')}
            additionalLabel={{show: false, label: ''}}
            title="Objective"
            label="Highest Kills"
          />
          <ChallengeObjective
            icon={require('@assets/icons/prize-cup.png')}
            additionalLabel={{show: true, label: 'Additional Conditions'}}
            title="Objective"
            label="Highest Kills"
          />
          <ChallengeObjective
            icon={require('@assets/icons/user-multiple.png')}
            additionalLabel={{show: false, label: ''}}
            title="Mode"
            label="Solo"
          />
          <ChallengeObjective
            icon={require('@assets/icons/ticket.png')}
            additionalLabel={{show: false, label: ''}}
            title="Entry Cost"
            label="2 USDC, 15% Creator Fee"
          />
          <ChallengeObjective
            icon={require('@assets/icons/coins-dollar.png')}
            additionalLabel={{show: false, label: ''}}
            title="Prize Distribution"
            label="The better you score, the more you win."
          />
          <ChallengeObjective
            icon={require('@assets/icons/calendar.png')}
            additionalLabel={{show: false, label: ''}}
            title="Challenge Date"
            label="Fri, Jun 14"
          />
          <ChallengeObjective
            icon={require('@assets/icons/calendar.png')}
            additionalLabel={{show: false, label: ''}}
            title="Connect to Discord"
            label="Send updates to your channel"
            gap
            radio
          />
          <ChallengeObjective
            icon={require('@assets/icons/calendar.png')}
            additionalLabel={{show: false, label: ''}}
            title="Make public on prism"
            label="Allow everyone to join"
            radio
          />
        </Rules>
        <CreateButton onPress={() => Alert.alert('Hello')}>
          {/* @ts-ignore */}
          <CreateButtonbg>
            <BtnTitle>Create Challenge</BtnTitle>
          </CreateButtonbg>
        </CreateButton>
      </ScrollView>
    </Parent>
  );
}
const Parent = styled(View)`
  position: relative;
  background-color: #000;
  height: 100%;
  width: 100%;
`;
const TopImageContaineriOS = styled(View)`
  position: relative;
  height: 190px;
  z-index: -1;
`;
const TopImageContainerAndriod = styled(View)`
  position: relative;
  height: 215px;
  z-index: -1;
`;
const TopImageiOS = styled(Image)`
  position: absolute;
  top: -140px;
  left: 0px;
  object-fit: contain;
  width: 100%;
`;
const TopImageAndriod = styled(Image)`
  position: absolute;
  top: -110px;
  left: 0px;
  object-fit: contain;
  width: 100%;
`;
const InputContainer = styled(View)`
  position: relative;
  margin-top: 30px;
  margin: 0px 10px;
`;
const Label = styled(Text)`
  position: absolute;
  top: 8px;
  left: 15px;
  font-size: 12px;
  color: #828282;
  margin-bottom: 10px;
`;
const NameInput = styled(TextInput)`
  color: #fff;
  background-color: #2d2e3499;
  border-radius: 15px;
  height: 65px;
  padding: 0px 15px;
`;
interface CharCountProps {
  textColor: string;
}
const CharCount = styled(Text)<CharCountProps>`
  width: 100%;
  text-align: right;
  padding-top: 5px;
  padding-right: 10px;
  color: ${({textColor}) => textColor};
  font-size: 12px;
`;
const Rules = styled(View)`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
const RulesTitle = styled(Text)`
  font-size: 18px;
  text-align: left;
  width: 100%;
  font-weight: 600;
  color: #ffffffd0;
  padding: 0px 25px;
  margin: 20px 0px;
`;
const CreateButtonbg = styled(LinearGradient).attrs({
  colors: ['#e299f5', '#ff6272'],
  start: {x: 0, y: 1},
  end: {x: 1, y: 0.5},
})`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CreateButton = styled(TouchableOpacity)`
  overflow: hidden;
  height: 60px;
  margin: 20px 10px 40px 10px;
  border-radius: 30px;
`;
const BtnTitle = styled(Text)`
  color: #fff;
  font-weight: 600;
  font-size: 18px;
`;
