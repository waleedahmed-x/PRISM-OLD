import {ChallengeLeaderProps} from '@/interfaces/challenges';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';

export default function ChallengeLeader({
  navigation,
  serial,
  name,
  avatar,
  UDSC,
  kills,
}: ChallengeLeaderProps): React.JSX.Element {
  return (
    <Leader onPress={() => navigation.navigate('Leader Profile')}>
      <Serial>
        <Number serial={serial}>{serial}</Number>
      </Serial>
      <NameIcon>
        <Image source={avatar} />
        <Name>{name}</Name>
      </NameIcon>
      <UDSCKills>
        <UDSCTXT>+{UDSC} UDSC</UDSCTXT>
        <Kills>{kills}</Kills>
      </UDSCKills>
    </Leader>
  );
}
const Leader = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  width: 95%;
  height: 80px;
  background-color: #2d2e3499;
  border-radius: 25px;
  margin-bottom: 5px;
  overflow: hidden;
`;

const Serial = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
`;
interface NumberProps {
  serial: string;
}
const Number = styled(Text)<NumberProps>`
  color: ${({serial}) =>
    serial === '1'
      ? '#FFA331'
      : serial === '2'
      ? '#C7C7C7'
      : serial === '3'
      ? '#D68E5F'
      : '#FFFFFF'};
  font-weight: 600;
`;
const NameIcon = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 40%;
`;
const Name = styled(Text)`
  color: #fff;
  font-weight: 600;
  margin-left: 10px;
`;
const UDSCKills = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
`;
const UDSCTXT = styled(Text)`
  color: #85ccff;
  font-weight: 600;
`;
const Kills = styled(Text)`
  margin: 0px 30px;
  color: #fff;
  font-weight: 600;
`;
