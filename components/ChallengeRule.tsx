import {ChallengeRuleProps} from '@/interfaces/challenges';
import React from 'react';
import {Image, Text, View} from 'react-native';
import styled from 'styled-components/native';

export default function ChallengeRule({
  title,
  label,
  icon,
}: ChallengeRuleProps): React.JSX.Element {
  return (
    <Rule>
      <RuleContent>
        <RuleLabel>{label}</RuleLabel>
        <RuleTitleIcon>
          {icon && <Avatar source={require('@assets/icons/owner.png')} />}
          <RuleTitle>{title}</RuleTitle>
        </RuleTitleIcon>
      </RuleContent>
    </Rule>
  );
}
const Rule = styled(View)`
  display: flex;
  flex-direction: row;
  width: 95%;
  background-color: #2e3133;
  height: 80px;
  border-radius: 25px;
  padding: 0px 20px;
  overflow: hidden;
  margin-bottom: 5px;
`;
const RuleContent = styled(View)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 75%;
`;

const RuleTitleIcon = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Avatar = styled(Image)`
  margin-right: 5px;
`;
const RuleTitle = styled(Text)`
  font-size: 18px;
  color: #fff;
  font-weight: 600;
  padding: 5px;
`;
const RuleLabel = styled(Text)`
  color: #fff;
  font-size: 12px;
`;
