import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Divider} from 'react-native-paper';
import styled from 'styled-components/native';
import {ChallengeCardPropsInterface} from '@interfaces/challenges';

export default function ChallengeCard({
  navigation,
  usrIcn,
  tags,
  displayImage,
  displayDateTitle,
  dueDateDescription,
  prize,
  entry,
  path,
  share,
}: ChallengeCardPropsInterface): React.JSX.Element {
  return (
    <>
      <ChallengeParent
        onPress={path ? () => navigation.navigate(path) : () => {}}>
        <Challenge>
          <GlassImage source={{uri: displayImage}} blurRadius={50} />
          {share ? (
            <ShareTag>
              <Tag>
                <Image source={require('@assets/icons/share.png')} />
                <NameText>Share</NameText>
              </Tag>
            </ShareTag>
          ) : (
            <ChallengeTags>
              <NameTag>
                <Image source={usrIcn} />
                <NameText>{tags[0]}</NameText>
              </NameTag>
              <NumberTag>
                <Image source={usrIcn} />
                <NumberText>{tags[1]}</NumberText>
              </NumberTag>
            </ChallengeTags>
          )}
          <ChallengeVisual>
            {/* @ts-ignore */}
            <Overlay />
            <MainImage source={{uri: displayImage}} />
            <VisualDetail>
              <Day>Day 2: {displayDateTitle[0]}</Day>
              <Title>{displayDateTitle[1]}</Title>
            </VisualDetail>
          </ChallengeVisual>
          <ChallengeDetails>
            <DetailTop>
              <DateMode>{dueDateDescription[0]}</DateMode>
              <TotalSkills>{dueDateDescription[1]}</TotalSkills>
            </DetailTop>
            <StyledDivider />
            <DetailBottom>
              <Prize>
                <PrizeTitle>Prize Pool</PrizeTitle>
                <PrizeValue>
                  <Image source={require('@assets/icons/rocket.png')} />
                  <PrizePool>{prize}</PrizePool>
                </PrizeValue>
              </Prize>
              <EnrollmentCost>
                <EnrollmentTitle>Entry</EnrollmentTitle>
                <EnrollmentValue>
                  <Image source={require('@assets/icons/dollar-circle.png')} />
                  <Value>{entry}</Value>
                </EnrollmentValue>
              </EnrollmentCost>
            </DetailBottom>
          </ChallengeDetails>
        </Challenge>
      </ChallengeParent>
    </>
  );
}

const ChallengeParent = styled(TouchableOpacity)`
  display: flex;
  flex-direction: column;
  width: 95%;
`;
const Challenge = styled(View)`
  position: relative;
  display: flex;
  margin: 10px;
  overflow: hidden;
  border-radius: 25px;
  border: 1px solid #ffffff2f;
`;
const GlassImage = styled(Image)`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  opacity: 0.5;
`;
const ChallengeVisual = styled(View)`
  position: relative;
  width: 100%;
  border-radius: 25px;
  overflow: hidden;
`;
const Overlay = styled(LinearGradient).attrs({
  colors: ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.4)', '#000000ee'],
  start: {x: 0, y: 0.2},
  end: {x: 0, y: 0.9},
})`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 250px;
`;
const ChallengeTags = styled(View)`
  position: absolute;
  top: 10px;
  left: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 15px;
  z-index: 1;
  width: 100%;
`;
const NameTag = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 25px;
  padding: 5px 10px;
`;
const NameText = styled(Text)`
  color: #fff;
  font-weight: 600;
  padding-left: 5px;
`;
const NumberTag = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 25px;
  padding: 5px 10px;
`;
const NumberText = styled(Text)`
  color: #fff;
  font-weight: 600;
  padding-left: 5px;
`;
const MainImage = styled(Image)`
  width: 100%;
  height: 250px;
`;
const VisualDetail = styled(View)`
  position: absolute;
  bottom: 10px;
  left: 20px;
  z-index: 3;
`;
const Day = styled(Text)`
  color: #fff;
  font-size: 12px;
  opacity: 0.7;
  padding-bottom: 5px;
`;
const Title = styled(Text)`
  color: #fff;
  font-size: 20px;
  font-weight: 500;
`;
const ChallengeDetails = styled(View)`
  padding: 20px 15px;
`;
const DetailTop = styled(View)``;
const StyledDivider = styled(Divider)`
  margin: 10px 0px;
`;
const DateMode = styled(Text)`
  font-size: 12px;
  opacity: 0.7;
  padding-bottom: 5px;
  color: #fff;
`;
const TotalSkills = styled(Text)`
  font-size: 18px;
  color: #fff;
  font-weight: 500;
`;
const DetailBottom = styled(View)`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
const Prize = styled(View)`
  display: flex;
  flex-direction: column;
  width: 50%;
`;
const PrizeTitle = styled(Text)`
  color: #fff;
  font-size: 12px;
  opacity: 0.7;
  padding-bottom: 5px;
`;
const PrizeValue = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const PrizePool = styled(Text)`
  color: #fff;
  padding-left: 5px;
`;
const EnrollmentCost = styled(View)`
  flex-direction: column;
  width: 50%;
  /* border: 1px solid green; */
`;
const EnrollmentTitle = styled(Text)`
  font-size: 12px;
  opacity: 0.7;
  padding-bottom: 5px;
  color: #fff;
`;
const EnrollmentValue = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const Value = styled(Text)`
  font-size: 18px;
  color: #fff;
  font-weight: 500;
  padding-left: 5px;
`;
const ShareTag = styled(View)`
  position: absolute;
  top: 10px;
  left: 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 0px 15px;
  z-index: 1;
  width: 100%;
`;
const Tag = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 25px;
  padding: 5px 10px;
`;
