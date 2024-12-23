/* eslint-disable react-native/no-inline-styles */
import {ChallengeObjectiveProps} from '@/interfaces/challenges';
import React, {useState} from 'react';
import {Image, Platform, Switch, Text, View} from 'react-native';
import styled from 'styled-components/native';

export default function ChallengeObjective({
  icon,
  additionalLabel,
  title,
  label,
  gap,
  radio,
}: ChallengeObjectiveProps): React.JSX.Element {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <Rule mt={gap}>
      <RuleIcon>
        <Image source={icon} />
      </RuleIcon>
      <RuleContent>
        {additionalLabel.show && <RuleLabel>{additionalLabel.label}</RuleLabel>}
        <RuleTitle>{title}</RuleTitle>
        <RuleLabel>{label}</RuleLabel>
      </RuleContent>
      {radio ? (
        <Radio>
          <StyledSwitch
            trackColor={{false: '#2D2E34', true: '#ffffff'}}
            thumbColor={isEnabled ? '#000000' : '#ffffff'}
            ios_backgroundColor={isEnabled ? '#ffffff' : '#000000'}
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={
              Platform.OS === 'android'
                ? {}
                : {
                    padding: 10,
                    backgroundColor: '#000000',
                    shadowColor: '#ccc',
                    shadowOpacity: 0.5,
                    shadowRadius: 1,
                    shadowOffset: {
                      height: -0.9,
                      width: 0.7,
                    },
                  }
            }
          />
        </Radio>
      ) : (
        <Next>
          <Image source={require('@assets/icons/arrow-left.png')} />
        </Next>
      )}
    </Rule>
  );
}
interface RuleProps {
  mt?: boolean;
}
const Rule = styled(View)<RuleProps>`
  display: flex;
  flex-direction: row;
  width: 95%;
  background-color: #2d2e3499;
  height: 80px;
  border-radius: 25px;
  overflow: hidden;
  margin-top: ${({mt}) => (mt ? '20px' : '5px')};
`;

const RuleIcon = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
`;
const RuleContent = styled(View)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 75%;
`;
const Radio = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1%;
  margin-right: 30px;
`;
const StyledSwitch = styled(Switch)`
  /* border: 0.5px solid #fff; */
`;
const Next = styled(View)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 10%;
`;
const RuleTitle = styled(Text)`
  font-size: 18px;
  color: #fff;
  font-weight: 600;
  padding: 5px 0px;
`;
const RuleLabel = styled(Text)`
  color: #fff;
  font-size: 12px;
`;
